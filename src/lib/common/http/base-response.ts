export class BaseResponse<T> {
    Success: boolean;
    Message: string;
    Obj: T;
}