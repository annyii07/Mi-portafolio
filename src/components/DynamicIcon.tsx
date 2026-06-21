import React from 'react';
import * as LucideImport from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function DynamicIcon({ name, className = '', size = 20 }: DynamicIconProps) {
  // Map icons safely
  const IconComponent = (LucideImport as Record<string, React.ComponentType<{ className?: string; size?: number }>>)[name];
  
  if (!IconComponent) {
    // Fallback icon in case of missing mapping
    return <LucideImport.HelpCircle className={className} size={size} />;
  }
  
  return <IconComponent className={className} size={size} />;
}
