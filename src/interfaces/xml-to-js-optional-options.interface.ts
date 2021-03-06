export interface XmlToJsOptionalOptions {
    arrayFields?: string[];
    objectFields?: string[];
    fieldNameFormat?: 'camel' | 'snake' | 'none';
    fieldNameMapping?: { [key: string]: string };
}