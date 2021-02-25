
// 身份证中第十八位数字的计算方法
// 将前面的身份证号码17位数分别乘以不同的系数。从第一位到第十七位的系数分别为：7、9、10、5、8、4、2、1、6、3、7、9、10、5、8、4、2；
// 将这17位数字和系数相乘的结果相加；
// 用加出来和除以11，看余数是多少
// 余数只可能有0 、1、 2、 3、 4、 5、 6、 7、 8、 9、 10这11个数字。其分别对应的最后一位身份证的号码为1、0、X、9、8、7、6、5、4、3、2；
// 通过上面得知如果余数是2，就会在身份证的第18位数字上出现罗马数字的Ⅹ。如果余数是10，身份证的最后一位号码就是2。
// 第一代身份证十五位数升为第二代身份证十八位数:第一步，在原十五位数身份证的第六位数后面插入19 ，这样身份证号码即为十七位数；第二步，按照国家规定的统一公式计算出第十八位数，作为校验码放在第二代身份证的尾号。
// 身份证倒数第二位：偶数性别为女，奇数为男
`6位行政区域 + 4位年龄 + 2位月份 + 2位日期 + 3位随机 + 第十八位`

const idcard = '52213019841213003';
const idArray = idcard.split('');
const coefficient = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
let count = 0;
for(let i=0; i<idArray.length; i++) {
    const num = parseInt(idArray[i]);
    count +=num * coefficient[i];
}
const remainder = count%11;
const map = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
console.log(map[remainder]);


