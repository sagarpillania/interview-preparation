const {sum,captializeChar,reverseString}=require("./script.js")

test('add 1 + 2 to equal 3',()=>{
    expect(sum(1,2)).toBe(3);
});

test('delhi equals Delhi',()=>{
    expect(captializeChar("delhi")).toBe("Delhi");
});

test('delhi equals ihled',()=>{
    expect(reverseString("delhi")).toBe("ihled");
});