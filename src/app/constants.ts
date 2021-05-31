export enum FlashMessageTypes {
    ERROR = 'error',
    SUCCESS = 'success',
    WARN = 'warn'
}

export interface FlashMessage {
    id: string;
    message: string;
    type: FlashMessageTypes;
}