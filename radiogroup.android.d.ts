import { RadioGroupInterface, RadioButtonInterface } from './';
import { Property } from 'tns-core-modules/ui/core/view';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Label } from 'tns-core-modules/ui/label';
export declare class RadioGroup extends StackLayout implements RadioGroupInterface {
    private _android;
    _fillColor: string;
    _tintColor: string;
    private _androidViewId;
    constructor();
    readonly android: any;
    readonly nativeView: any;
    checkedButton: number;
    fillColor: string;
    tintColor: string;
    _createNativeView(): void;
}
export declare const checkedButtonProperty: Property<RadioGroup, number>;
export declare class RadioButton extends Label implements RadioButtonInterface {
    private _android;
    private _fillColor;
    private _checkStyle;
    private _checkPadding;
    private _checkPaddingLeft;
    private _checkPaddingTop;
    private _checkPaddingRight;
    private _checkPaddingBottom;
    constructor();
    readonly android: any;
    readonly nativeView: any;
    checkStyle: string;
    checkPadding: string;
    checkPaddingLeft: string;
    checkPaddingTop: string;
    checkPaddingRight: string;
    checkPaddingBottom: string;
    checked: boolean;
    enabled: boolean;
    text: string;
    fillColor: string;
    tintColor: string;
    _createNativeView(): void;
    toggle(): void;
}
export declare const checkedProperty: Property<RadioButton, boolean>;
export declare const enabledProperty: Property<RadioButton, boolean>;
export declare const textProperty: Property<RadioButton, string>;
