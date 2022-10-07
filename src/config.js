// definir puerto por defecto // ------------------------------
import {config} from "dotenv";
config();

export default {
    port: process.env.PORT || 4000,
};