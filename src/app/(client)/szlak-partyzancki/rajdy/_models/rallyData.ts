export interface RallyData {
  id: string;
  slug: string;
  title: string;
  date?: string;
  invite?: string;
  purpose?: string;
  purposeList?: string[];
  rulesList?: string[];
  adviceList?: string[];
  rewards?: string[];
  transportHeader?: string;
  transportList?: string[];
  warning?: string;
  programList?: string[];
  organizators?: string[];
  partners?: string[];
  taskInfo?: string;
  tasks?: string[];
}