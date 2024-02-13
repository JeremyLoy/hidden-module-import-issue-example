import {add} from "@myorg/math";
// this shouldn't be allowed via autocomplete, and it should be an eslint error
import {addImplementation} from "@myorg/math/addImplementation.js";

describe('math', () => {
    it('add correctly', () => {
        expect(add(2, 3)).toBe(5);
    })
    // this shouldn't be allowed to be imported
    it("shouldn't be allowed to reference the implementation directly", () => {
        expect(addImplementation(2, 3)).toBe(5);
    })
})
