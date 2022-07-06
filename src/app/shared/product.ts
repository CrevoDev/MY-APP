export class Product<T> {
    value: T | undefined;
    key: string = '';
    label: string = '';
    required: boolean = true;
    type: string = '';
    readonly: boolean = false

    constructor(
        fields: {
            value?: T;
            key?: string;
            label?: string;
            required?: boolean;
            type?: string;
            readonly?: boolean
        } = {}
    ) {
        this.value = fields.value;
        this.key = fields.key || '';
        this.label = fields.label || '';
        this.required = !!fields.required;
        this.type = fields.type || '';
        this.readonly = fields.readonly || false

     }
}
