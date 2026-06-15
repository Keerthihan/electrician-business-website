import React from 'react';
import {
  ShieldAlert,
  Zap,
  BatteryCharging,
  Wrench,
  Lightbulb,
  CheckSquare,
  Eye,
  Briefcase,
  ShieldCheck,
  Award,
  Clock,
  Phone,
  MapPin,
  Star,
  Check,
  AlertTriangle,
  Mail,
  MessageCircle,
  Search,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  HelpCircle
} from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
  size?: number;
  key?: React.Key;
}

export default function IconRenderer({ name, className = '', size }: IconRendererProps) {
  const iconProps = { className, ...(size ? { size } : {}) };

  switch (name) {
    case 'ShieldAlert':
      return <ShieldAlert {...iconProps} />;
    case 'Zap':
      return <Zap {...iconProps} />;
    case 'BatteryCharging':
      return <BatteryCharging {...iconProps} />;
    case 'Wrench':
      return <Wrench {...iconProps} />;
    case 'Lightbulb':
      return <Lightbulb {...iconProps} />;
    case 'CheckSquare':
      return <CheckSquare {...iconProps} />;
    case 'Eye':
      return <Eye {...iconProps} />;
    case 'Briefcase':
      return <Briefcase {...iconProps} />;
    case 'ShieldCheck':
      return <ShieldCheck {...iconProps} />;
    case 'Award':
      return <Award {...iconProps} />;
    case 'Clock':
      return <Clock {...iconProps} />;
    case 'Phone':
      return <Phone {...iconProps} />;
    case 'MapPin':
      return <MapPin {...iconProps} />;
    case 'Star':
      return <Star {...iconProps} />;
    case 'Check':
      return <Check {...iconProps} />;
    case 'AlertTriangle':
      return <AlertTriangle {...iconProps} />;
    case 'Mail':
      return <Mail {...iconProps} />;
    case 'MessageCircle':
      return <MessageCircle {...iconProps} />;
    case 'Search':
      return <Search {...iconProps} />;
    case 'ChevronRight':
      return <ChevronRight {...iconProps} />;
    case 'ArrowRight':
      return <ArrowRight {...iconProps} />;
    case 'Menu':
      return <Menu {...iconProps} />;
    case 'X':
      return <X {...iconProps} />;
    default:
      return <HelpCircle {...iconProps} />;
  }
}
