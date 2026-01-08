import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface SelectOption {
    value: string;
    label: string;
    group?: string;
}

interface GroupedSelectProps {
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}

export default function GroupedSelect({
    value,
    onChange,
    options,
    placeholder = 'Select...',
    className = '',
    disabled = false
}: GroupedSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // 按组分组选项
    const groupedOptions = options.reduce((acc, option) => {
        const group = option.group || 'Other';
        if (!acc[group]) {
            acc[group] = [];
        }
        acc[group].push(option);
        return acc;
    }, {} as Record<string, SelectOption[]>);

    // 获取当前选中项的标签
    const selectedOption = options.find(opt => opt.value === value);
    const selectedLabel = selectedOption?.label || placeholder;

    // 点击外部关闭下拉菜单
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div ref={containerRef} className={cn('relative', className)}>
            {/* 触发按钮 */}
            <button
                type="button"
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
                className={cn(
                    'w-full px-3 py-2 text-left text-xs font-mono',
                    'bg-white dark:bg-gray-800',
                    'border border-gray-300 dark:border-gray-600',
                    'rounded-lg',
                    'flex items-center justify-between gap-2',
                    'transition-all duration-200',
                    'hover:border-blue-400 dark:hover:border-blue-500',
                    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                    disabled && 'opacity-50 cursor-not-allowed',
                    isOpen && 'ring-2 ring-blue-500 border-transparent'
                )}
            >
                <span className="truncate text-gray-900 dark:text-gray-100">
                    {selectedLabel}
                </span>
                <ChevronDown
                    size={14}
                    className={cn(
                        'text-gray-500 dark:text-gray-400 transition-transform duration-200',
                        isOpen && 'rotate-180'
                    )}
                />
            </button>

            {/* 下拉菜单 */}
            {isOpen && (
                <div
                    className={cn(
                        'absolute z-50 w-full mt-1',
                        'bg-white dark:bg-gray-800',
                        'border border-gray-200 dark:border-gray-700',
                        'rounded-lg shadow-lg',
                        'max-h-80 overflow-y-auto',
                        'animate-in fade-in-0 zoom-in-95 duration-100'
                    )}
                >
                    {Object.entries(groupedOptions).map(([group, groupOptions]) => (
                        <div key={group}>
                            {/* 分组标题 */}
                            <div className="px-3 py-2 text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-900/50 sticky top-0">
                                {group}
                            </div>

                            {/* 分组选项 */}
                            {groupOptions.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => handleSelect(option.value)}
                                    className={cn(
                                        'w-full px-3 py-2 text-left text-xs font-mono',
                                        'flex items-center justify-between gap-2',
                                        'transition-colors duration-150',
                                        'hover:bg-blue-50 dark:hover:bg-blue-900/20',
                                        option.value === value
                                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                                            : 'text-gray-900 dark:text-gray-100'
                                    )}
                                >
                                    <span className="truncate">{option.label}</span>
                                    {option.value === value && (
                                        <Check size={14} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                                    )}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
