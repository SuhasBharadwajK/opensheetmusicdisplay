import { IXmlElement } from "./Xml";
/**
 * Some helper methods to handle MXL files.
 */
export declare class MXLHelper {
    /** Returns the documentElement of MXL data. */
    static MXLtoIXmlElement(data: string): Promise<IXmlElement>;
    static MXLtoXMLstring(data: string): Promise<string>;
}
