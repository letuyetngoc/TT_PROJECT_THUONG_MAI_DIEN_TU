import swal from "sweetalert";
import { message } from 'antd';

export function errorMessage(title, text) {
    return swal({
        title: title,
        text: text,
        icon: "error",
        button: "Cancel",
    });
}
export function successMessage(text) {
    return message.success(text);
}

export function successBigMessage(title, text) {
    return swal({
        title: title,
        text: text,
        icon: "success",
        button: "Cancel",
    });
} 
