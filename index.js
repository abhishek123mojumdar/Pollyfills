// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Polly-Fills</h1>`;

// ------------------ Bind polly fill ------------------------//
var abhiObj = {
  name: 'Abhishek',
  foo: function (val1, val2) {
    console.log(this.name + ' ' + val1 + val2);
  },
};

var myObj = {
  name: 'Dickson',
};

Function.prototype.myBind = function (...args) {
  var fn = this;
  var context = args[0];
  var params = args.slice(1);
  return function (...args) {
    return fn.apply(context, [...params, ...args]);
  };
};

abhiObj.foo.myBind(myObj, 1, 2)();

//------------map polly-fill --------------//

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

var arr = [4, 54, 6, 6].myMap((x) => {
  return x * 2;
});

console.log(arr);

//----------------- change a recursive object to a flat object --------------//

var abhiObj = {
  name: 'Abhishek',
  address: {
    personal: {
      city: 'Jamshedpur',
      area: 'Dimna Road',
    },
    official: {
      city: 'Bangalore',
      area: {
        landMark: 'smart point',
      },
    },
  },
};

function flatObject(abhiObj, obj, prevKeyName) {
  for (let key in abhiObj) {
    if (abhiObj.hasOwnProperty(key) && typeof abhiObj[key] == 'object') {
      flatObject(abhiObj[key], obj, prevKeyName + '_' + key);
    } else {
      obj[prevKeyName + '_' + key] = abhiObj[key];
    }
  }

  return obj;
}

let obj = {};
console.log(flatObject(abhiObj, obj, 'person'));

//---------------- add n number ------------------//
let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
};

console.log(sum(1)(2)(3)(4)(5)(6)(7)());
