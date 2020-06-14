export interface FileTreeItem {
    path: string;
    name: string;
    size: number;
    directory: boolean;
    file: boolean;
    md5?: string;
}

export interface FileTreeOptions {    
    /**
     * File names or folder names to be ignored
     */
    ignore?: string | string[];
    
    /**
     * Defining a specific file suffix
     */    
     suffix?: string | string[];

    /**
     * Return the md5 value of the file
     */
    md5?: boolean;
}

/**
 * Export files in all directories and subdirectories
 * @param path root
 * @param options specific filter and setting
 * @returns {Array}
 */
export function allFile(path, options?: FileTreeOptions) : FileTreeItem[];


/**
 * In accordance with the tree structure of all directories and subdirectories in the file
 * @param path root
 * @param options specific filter and setting
 * @returns {Array}
 */
export function tree(path?: string, options?: FileTreeOptions) : FileTreeItem[];


/**
 * Export files in current folder
 * @param path root
 * @param options specific filter and setting
 * @returns {Array}
 */
export function list(path?: string, options?: FileTreeOptions) : FileTreeItem[];
