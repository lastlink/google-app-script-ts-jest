import { getItems } from "../../src/list/getSheetList";

describe("getSheetList.ts", () => {
    it("list", () => {
        var items = getItems();
        expect(items).toEqual(["test", "test3", "test5"]);
    });
});