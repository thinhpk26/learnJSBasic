import { type_warn } from "../constains.js";
function logger(param, type = type_warn) {
    console[type](param)
}

export default logger;