import Parse from "parse";
import keys from "./keys.json";

Parse.initialize(keys.AppID, keys.JSkey);
Parse.serverURL = keys.ParseServerURL;
