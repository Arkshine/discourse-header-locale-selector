import { gte } from "@ember/object/computed";
import SingleSelectComponent from "select-kit/components/single-select";

export default SingleSelectComponent.extend({
  pluginApiIdentifiers: ["combo-box"],
  classNames: ["combobox", "combo-box"],

  selectKitOptions: {
    caretUpIcon: "caret-up",
    caretDownIcon: "caret-down",
    autoFilterable: "autoFilterable",
    headerComponent: "locale-combo-box/header",
  },

  autoFilterable: gte("content.length", 10),

  modifyComponentForRow() {
    return "locale-combo-box/row";
  },
});
