import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

//import rootReducer from 'redux/dist/redux';

const DEFAULT_CASH = [["ONE HUNDRED", 100],["TWENTY", 20],["TEN", 10],["FIVE", 5],["ONE", 1],["QUARTER", 0.25],["DIME", 0.1],["NICKEL", 0.05],["PENNY", 0.01]];
//const DEFAULT_CASHLEFT = [["ONE HUNDRED", 0],["TWENTY", 0],["TEN", 0],["FIVE", 0],["ONE", 0],["QUARTER", 0],["DIME", 0],["NICKEL", 0],["PENNY", 0]];
const DEFAULT_CASHSET = [["ONE HUNDRED", 0],["TWENTY", 0],["TEN", 0],["FIVE", 0],["ONE", 0],["QUARTER", 0],["DIME", 0],["NICKEL", 0],["PENNY", 0]];

const DISPLAY_LAYOUT = "col-xs-12 col-md-6";
const RESULT_LAYOUT = "col-xs-12 col-md-6";
const SETTING_LAYOUT = "col-xs-12 col-md-12";
const LIST_LAYOUT = "col-xs-6 col-md-6";
const SETTING_LIST_LAYOUT = "col-xs-12 col-md-6";
const BTN_LAYOUT = "col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-6 col-lg-4 col-lg-offset-4"
const APP_LAYOUT = "col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2";


//Redux
const defaultState = {
  
  price: [0],
  totalShow: "",
  payment: 0,
  priceShow: [],
  
  paymentShow: "",
  cid: [["ONE HUNDRED", 0],["TWENTY", 0],["TEN", 0],["FIVE", 0],["ONE", 0],["QUARTER", 0],["DIME", 0],["NICKEL", 0],["PENNY", 0]],
  status: "",
  change: [["ONE HUNDRED", 0],["TWENTY", 0],["TEN", 0],["FIVE", 0],["ONE", 0],["QUARTER", 0],["DIME", 0],["NICKEL", 0],["PENNY", 0]]
};
const ADDPRICE = 'ADDPRICE';
const REMOVEPRICE = 'REMOVEPRICE';
const RESETPRICE = 'RESETPRICE';

const ADDTOTALSHOW = 'ADDTOTALSHOW';
const REMOVETOTALSHOW = 'REMOVETOTALSHOW';

const ADDPAYMENT = 'ADDPAYMENT';
const REMOVEPAYMENT = 'REMOVEPAYMENT';

const ADDPRICESHOW = 'ADDPRICESHOW';
const REMOVEPRICESHOW = 'REMOVEPRICESHOW';
const RESETPRICESHOW = 'RESETPRICESHOW';

const ADDPAYMENTSHOW = 'ADDPAYMENTSHOW';
const REMOVEPAYMENTSHOW = 'REMOVEPAYMENTSHOW';

const ADDCID = 'ADDCID';
const REMOVECID ='REMOVECID';

const ADDSTATUS = 'ADDSTATUS';
const REMOVESTATUS = 'REMOVESTATUS';

const ADDCHANGE = 'ADDCHANGE';
const REMOVECHANGE = 'REMOVECHANGE';

//管理价格
const addPriceReducer = (state = defaultState.price, action) => {
  switch (action.type) {
    case ADDPRICE:
      return [
        ...state,
        action.price
      ];
    case REMOVEPRICE:
      return state.slice(0, state.indexOf(action.price))
                  .concat(state.slice(state.indexOf(action.price) + 1));
    case RESETPRICE:
      return defaultState.price;
    default: 
      return state;
  }
};

const addPrice = (price) =>{
  return {
    type: ADDPRICE,
    price: price
  };
};

const removePrice = (price) => {
  return {
    type: REMOVEPRICE,
    price: price
  };
};
const resetPrice = () => {
  return {
    type: RESETPRICE
  };
}

//管理总价钱显示
const totalShowReducer = (state = {totalShow: defaultState.totalShow}, action) => {
  switch (action.type) {
    case ADDTOTALSHOW:
      return {
        totalShow: action.show
      };
    case REMOVETOTALSHOW:
      return {totalShow: defaultState.totalShow};
    default: 
      return state;
  }
};

const addTotalShow = (show) =>{
  return {
    type: ADDTOTALSHOW,
    show: show
  };
};

const removeTotalShow = () => {
  return {
    type: REMOVETOTALSHOW
  };
};

//管理顾客付款数据
const addPaymentReducer = (state = {payment: defaultState.payment}, action) => {
  switch (action.type) {
    case ADDPAYMENT:
      return {
        payment: action.payment
      };
    case REMOVEPAYMENT:
      return {payment: defaultState.payment};
    default: 
      return state;
  }
};

const addPayment = (payment) =>{
  return {
    type: ADDPAYMENT,
    payment: payment
  }
};

const removePayment = () => {
  return {
    type: REMOVEPAYMENT
  }
};
//管理价钱显示
const addPriceShowReducer = (state = defaultState.priceShow, action) => {
  switch (action.type) {
    case ADDPRICESHOW:
      return [
        ...state,
        action.priceShow
      ];
    case REMOVEPRICESHOW:
      return state.slice(0, state.indexOf(action.priceShow))
                  .concat(state.slice(state.indexOf(action.priceShow) + 1));
    case RESETPRICESHOW:
      return defaultState.priceShow;
    default: 
      return state;
  }
};

const addPriceShow = (priceShow) =>{
  return {
    type: ADDPRICESHOW,
    priceShow: priceShow
  };
};

const removePriceShow = (priceShow) => {
  return {
    type: REMOVEPRICESHOW,
    priceShow: priceShow
  };
};

const resetPriceShow = () => {
  return {
    type: RESETPRICESHOW
  };
}
//管理付款显示
const addPaymentShowReducer = (state = {paymentShow: defaultState.paymentShow}, action) => {
  switch (action.type) {
    case ADDPAYMENTSHOW:
      return {
        paymentShow: action.paymentShow
      };
    case REMOVEPAYMENTSHOW:
      return {paymentShow: defaultState.paymentShow};
    default: 
      return state;
  }
};

const addPaymentShow = (paymentShow) =>{
  return {
    type: ADDPAYMENTSHOW,
    paymentShow: paymentShow
  }
};

const removePaymentShow = () => {
  return {
    type: REMOVEPAYMENTSHOW
  }
};
//管理收银柜现金
const addCidReducer = (state = defaultState.cid, action) => {
  switch (action.type) {
    case ADDCID:
      return action.cid;
    case REMOVECID:
      return defaultState.cid;
    default: 
      return state;
  }
};

const addCid = (cid) =>{
  return {
    type: ADDCID,
    cid: cid
  }
};

const removeCid = () => {
  return {
    type: REMOVECID
  }
};
//管理收银柜状态
const statusReducer = (state = {status: defaultState.status}, action) => {
  switch (action.type) {
    case ADDSTATUS:
      return {
        status: action.status
      };
    case REMOVESTATUS:
      return {status: defaultState.status};
    default: 
      return state;
  }
};

const addStatus = (status) =>{
  return {
    type: ADDSTATUS,
    status: status
  }
};

const removeStatus = () => {
  return {
    type: REMOVESTATUS
  }
};
//管理找零数据
const addChangeReducer = (state = defaultState.change, action) => {
  switch (action.type) {
    case ADDCHANGE:
      return action.change;
    case REMOVECHANGE:
      return defaultState.change;
    default: 
      return state;
  }
};

const addChange = (change) =>{
  return {
    type: ADDCHANGE,
    change: change
  }
};

const removeChange = () => {
  return {
    type: REMOVECHANGE
  }
};

//结合全部reducers
const rootReducer = combineReducers({
  price: addPriceReducer,
  totalShow: totalShowReducer,
  payment: addPaymentReducer,
  priceShow: addPriceShowReducer,
  
  paymentShow: addPaymentShowReducer,
  cid: addCidReducer,
  status: statusReducer,
  change: addChangeReducer
});
//创建store
const store = createStore(rootReducer);


//React

//const Provider;
//const connect;

//收银机模拟器的输入显示
class Display extends React.Component {
  /* constructor(props) {
    super(props);
  } */

  render(){
    /* const cidItem = this.props.cid.map(
              (item) => 
              <li key={item[0].toString()}>
                {item[1]}
              </li>
            ); */
    
    console.log(this.props.cid);
    return (
      <div id="information-input" className={DISPLAY_LAYOUT}>
        <h2 id="information">Information</h2>
        {/* <p id="cashErrorInfo" className="hidden red-text">Please add some cash!</p> */}
        
        <div>
          <p>Price<strong id="price-error-text" className="red-text"></strong></p>
          <input id="price" type="text" name="price"></input>
          <button id="add-item" type="button" onClick={this.props.addGoods}>Add</button>
        </div>
        <div>
          <p>Payment<strong id="payment-error-text" className="red-text"></strong></p>
          <input id="payment" type="text" name="payment" required onChange={this.props.handlePayment}></input>
        </div>
        <p id="display-btn">
          <button id="reset" className="btn btn-default" type="button" name="reset" onClick={this.props.reset}>Reset</button>
          <button id="calculateBtn" className="btn btn-default" type="button" name="calculate" onClick={this.props.calculate}>Calculate</button>
        </p>
        <h3>Cash in drawer:</h3>
        <div id="display-input-list" className="row">
          <ul id="cash-in-drawer" className={LIST_LAYOUT}>
            {DEFAULT_CASH.map(
              (item) => 
              <li key={item[0].toString()}>
                {item[0] + ": "}
              </li>
            )}
          </ul>
          <ul id="cash-in-drawer-value" className={LIST_LAYOUT}>
            {this.props.cid.map(
              (item) => 
              <li key={item[0].toString()}>
                {item[1]}
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
//收银机的柜台现金设置
class CashSetting extends React.Component {
  render() {
    
    return(
      
      <div className={SETTING_LAYOUT}>
        <p>
          <button id="unlock" className="btn btn-default btn-block" type="button" onClick={this.props.show}>Unlock Cash Setting</button>
        </p>
        
        <div id="cash-setting-div" className="hidden">
          <h2>Cash in drawer setting</h2>
          <ul id="remainder">
            {DEFAULT_CASH.map((item) => 
              <li key={item[0].toString()} className="row">
                <p className={"cash-left-name " + SETTING_LIST_LAYOUT}>{item[0] + ": "}<strong className="error-text red-text"></strong></p>
                <p className={SETTING_LIST_LAYOUT}>
                  <input type="text" id={item[1].toString()} className="cash-in-drawer-setting"></input>
                </p>
              </li>
            )}
          </ul>
          <div id="cash-setting-btn-wrapper" className="row">
            <button id="cash-submit" className={"btn btn-default "+ BTN_LAYOUT} type="button" onClick={this.props.handleInput}>Submit</button>
            <button id="cid-reset" className={"btn btn-default " + BTN_LAYOUT} type="button" onClick={this.props.resetCid}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}
//收银机的计算结果展示
class Result extends React.Component {
  /* constructor(props) {
    super(props);
  } */

  render() {
    console.log(this.props.change);
    const changeItem = this.props.change.map((item) => 
      <li key={item[0].toString()} className="row">
        <p className={LIST_LAYOUT}>{item[0] + ": "}</p>
        <p className={LIST_LAYOUT}>{item[1]}</p>
      </li>
    );
    return (
      <div id="result" className={RESULT_LAYOUT}>
        <h2>Result</h2>
        
        <h3>price: </h3>
        <ul id="price-result-list">
            {this.props.priceText.map((item) =>
              <li key={item.toString()}>
                {item}
              </li>
            )}
        </ul>
        <h3>total: {this.props.totalShow}</h3>
        <h3>payment: {this.props.paymentText}</h3>
        <h3>Change due</h3>
        <p><strong>{"Status: " + this.props.status}</strong></p>
        <div id="result-list">
          
          <ul  id="result-list-value">{changeItem}</ul>
        </div>
      </div>
    );
  }
}

class Presentational extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unlockBtn: false,
      /* price: [0],
      totalShow: "",
      payment: 0,
      priceShow: [], */
      showHold: true,
      /* paymentShow: "",
      cid: [["ONE HUNDRED", 0],["TWENTY", 0],["TEN", 0],["FIVE", 0],["ONE", 0],["QUARTER", 0],["DIME", 0],["NICKEL", 0],["PENNY", 0]],
      status: "",
      change: DEFAULT_CASHSET */
      cidChangeNum: 0
    };

    this.calculate = this.calculate.bind(this);
    //this.handlePrice = this.handlePrice.bind(this);
    this.handlePayment = this.handlePayment.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.reset = this.reset.bind(this);
    this.show = this.show.bind(this);
    this.addGoods = this.addGoods.bind(this);
    this.resetCid = this.resetCid.bind(this);
  }
  //商品价格输入
  addGoods(e) {
    let itemPrice = document.getElementById("price"); 
    let priceErrorText = document.getElementById("price-error-text");
    //检查价格输入是否正确的数值     
    if(/[^0-9.]/.test(itemPrice.value) || /\..+\./.test(itemPrice.value) || /\.{2,}/.test(itemPrice.value)) {
      priceErrorText.textContent = " Error!";
      itemPrice.value = "";
      //检查价格输入的值的小数点后的位数，必须小于等于小数点后的货币的种类数，若大于则报错
    }else if(itemPrice.value.slice(itemPrice.value.indexOf(".")).length > 3) {
      priceErrorText.textContent = " Error!";
      //如果价格输入的值为空，则默认输入为0
    }else if(itemPrice.value === ""){
      itemPrice.value = "0";
      //通过以上所有检查，则再检查显示开关
    }else {
      priceErrorText.textContent = "";
      //显示开关为关，说明已经进行过一轮计算，则打开显示开关，重置计算结果的显示，并更新价格数据
      if (this.state.showHold === false){
        this.setState({
          showHold: true,
          /* price: [Number(itemPrice.value)],
          priceShow: [Number(itemPrice.value)],
          totalShow: "",
          paymentShow: "",
          status: "",
          change: DEFAULT_CASHSET */
        });
        this.props.submitResetPrice();
        this.props.submitResetPriceShow();
        this.props.submitNewPrice(Number(itemPrice.value));
        this.props.submitNewPriceShow(Number(itemPrice.value));
        this.props.submitRemoveTotalShow();
        this.props.submitRemovePaymentShow();
        this.props.submitRemoveStatus();
        this.props.submitRemoveChange();
        //若显示开关已经打开，则在原有数据上继续添加
      }else {
        /* this.setState({
          price: this.state.price.concat(Number(itemPrice.value)),
          priceShow: this.state.priceShow.concat(Number(itemPrice.value))
        }); */
        this.props.submitNewPrice(Number(itemPrice.value));
        this.props.submitNewPriceShow(Number(itemPrice.value));
      }
    }
    //完成价格数据处理后，清空输入，以便下一次处理
    itemPrice.value = "";
  }

  //收银柜的现金设置开关
  show(e){
    let selectedDiv = document.getElementById("cash-setting-div");
    let btn = document.getElementById("unlock");
    if(this.state.unlockBtn === false){
      selectedDiv.classList.remove("hidden");
      this.setState({
        unlockBtn: true
      });
      btn.textContent = "Lock Cash Setting";
    }else {
      selectedDiv.classList.add("hidden");
      this.setState({
        unlockBtn: false
      });
      btn.textContent = "Unlock Cash Setting";
    }
  }

  //重置收银柜的现金设置
  resetCid() {
    let cashInput = document.querySelectorAll(".cash-in-drawer-setting");
    for(let i=0; i < cashInput.length; i++){
      cashInput[i].value = ""
    }
    this.props.submitNewCid(DEFAULT_CASHSET);
    this.setState({
      cidChangeNum: 0
    });
  }

  //重置整个收银机的状态(除了收银柜现金之外)
  reset(e){
    
    this.props.submitResetPrice();
    this.props.submitRemoveTotalShow();
    this.props.submitRemovePayment();
    this.props.submitResetPriceShow();
    this.props.submitRemovePaymentShow();
    //this.props.submitNewCid(DEFAULT_CASHSET);
    this.props.submitRemoveStatus();
    this.props.submitRemoveChange();
    let priceInput = document.getElementById("price");
    let paymentInput = document.getElementById("payment");
    priceInput.value = "";
    paymentInput.value = "";
    this.setState({
      unlockBtn: false,
      /* price: [0],
      totalShow: "",
      payment: 0,
      priceShow: [], */
      showHold: true
      /* paymentShow: "",
      cid: [["ONE HUNDRED", 0],["TWENTY", 0],["TEN", 0],["FIVE", 0],["ONE", 0],["QUARTER", 0],["DIME", 0],["NICKEL", 0],["PENNY", 0]],
      status: '',
      change: DEFAULT_CASHSET */
      
    });
    //console.log(this.state.cid);
    //console.log(this.state.status);
  }

  /* handlePrice(event) {
    //let priceInput = document.getElementById("price");
    //let paymentInput = document.getElementById("payment");

    if(/[^0-9.]/.test(event.target.value) || /\..+\./.test(event.target.value) || /\.{2,}/.test(event.target.value)) {
      alert("Erro! Please try again!");
      event.target.value = "";

    }else if(event.target.value.slice(event.target.value.indexOf(".")).length > 3) {
      alert("Erro! Please try again!");

    }else if(event.target.value === ""){
      event.target.value = "0";
    }else {
      this.setState({
        price: Number(event.target.value),
        priceShow: Number(event.target.value)
      });
    }
    
  } */

  //处理顾客的付款数据
  handlePayment(event) {
    //let priceInput = document.getElementById("price");
    //let paymentInput = document.getElementById("payment");
    //检查是否为正确数值，必须为数字和小数点的组合，且小数点不能连打，不能有多个小数点
    if(/[^0-9.]/.test(event.target.value) || /\..+\./.test(event.target.value) || /\.{2,}/.test(event.target.value)) {
      alert("Erro! Please try again!");
      event.target.value = "0";
      //检查小数点后的位数，必须小于等于小数点后的货币种类数，否则报错
    }else if(event.target.value.slice(event.target.value.indexOf(".")).length > 3) {
      alert("Erro! Please try again!");
      //若输入为空，则默认设置数值为0
    }else if(event.target.value === ""){
      event.target.value = "0"
      //通过以上所有检查后，更新付款数据
    }else {
      /* this.setState({
        payment: Number(event.target.value),
        paymentShow: Number(event.target.value)
      }); */
      this.props.submitNewPayment(Number(event.target.value));
      this.props.submitNewPaymentShow(Number(event.target.value));
    }
    
  }

  //处理收银柜的现金数据
  handleInput() {
    //创建一个变量存储处理数据
    let cashLeft = this.props.cid;
    let cashInput = document.querySelectorAll(".cash-in-drawer-setting");
    let cashInputError = document.querySelectorAll(".error-text");
    //用于检查数据错误
    let errorFlag = 0;
    //用循环检查所有现金设置的数据
    for(let i=0; i < cashInput.length; i++){
      //cashInputName[i].innerText = "";
      //检查数值是否正确，必须为数字和小数点的组合，且小数点不可连打，不能有一个以上的小数点
      if(/[^0-9.]/.test(cashInput[i].value) || /\..+\./.test(cashInput[i].value) || /\.{2,}/.test(cashInput[i].value)) {
        cashInputError[i].textContent = " Error!";
        cashInput[i].value = "";
        errorFlag++;
        //检查小数点后的位数，必须小于等于小数点后的货币种类数，否则增加错误标识
      }else if(cashInput[i].value.slice(cashInput[i].value.indexOf(".")).length > 3) {
        cashInputError[i].textContent = " Error!";
        errorFlag++;
        //若输入为空，则默认设置为0
      }else if(cashInput[i].value === ""){
        cashInput[i].value = "";
        //若通过以上所有的数据检查，则进入下一步检查
      }else {
        //console.log((Number(cashInput[i].value) * 100).toFixed(0));
        //因为货币显示存在小数，故为方便处理；
        //将数据放大100倍，又由于将文本转化为数值后为浮点数，故需取整
        //然后再检查输入数据是否能被对应的货币单位整除
        //若能被整除，则更新该数据到事先创建的变量中
        if(((Number(cashInput[i].value) * 100).toFixed(0) % (DEFAULT_CASH[i][1] * 100)) === 0){
          //console.log((Number(cashInput[i].value) * 100).toFixed(0) % (DEFAULT_CASH[i][1] * 100));
          cashLeft[i][1] += (Number(cashInput[i].value) * 100).toFixed(0) / 100;
          //console.log("hello" + cashLeft[i][1]);
          cashInputError[i].textContent = "";
          //若不能被整除，则显示并记录错误
        }else {
          cashInput[i].value = "";
          cashInputError[i].textContent = " Error!";
          errorFlag++;
        }
      }
    }
    //用循环检查完数据后，再查看错误标识
    //若错误标识为0，则说明数据全部通过检查，可以更新数据到状态中
    //并清空输入
    if(errorFlag === 0){
       this.setState({
        cidChangeNum: this.state.cidChangeNum + 1
        //change: DEFAULT_CHANGE
      }); 
      
      this.props.submitNewCid(cashLeft);
      for(let i=0; i < cashInput.length; i++){
        cashInput[i].value = ""
      }
    }
    //console.log(this.state.cid);
    //console.log(this.state.change);
    //console.log(cashLeft);
    //console.log(this.props.cid);
  }

  //计算找零数据
  calculate() {

    if(this.state.showHold === true){
      this.setState({
        showHold: false
      });
    }

    let change;

    //备份库存现金
    let cashSort = this.props.cid;
    let price = this.props.price.reduce((acc, cur) => acc + cur);
    console.log(this.props.price, price);
    /* this.setState({
      totalShow: price
    }); */
    this.props.submitNewTotalShow(price);

    let cash = this.props.payment;
    let cidBox = this.props.cid;
    //console.log(cid);
    console.log(price,cash);
    //准备好结果模板
    let result = {
      status: '',
      change: [["ONE HUNDRED"],["TWENTY"],["TEN"],["FIVE"],["ONE"],["QUARTER"],["DIME"],["NICKEL"],["PENNY"]]
    }
    //把金钱面额与库存金额的数组位置相对应，方便记忆
    let billPos = {
      0.01: 0,
      0.05: 1,
      0.1: 2,
      0.25: 3,
      1: 4,
      5: 5,
      10: 6,
      20: 7,
      100: 8
    }
    //计算找零，为了方便计算余数，把找零放大100倍，后续相关计算的因子也全部等同的放大100倍
    change = Math.round((cash - price) * 100);
    console.log(change);
    //用于保存每次计算一个面额的钞票数后，所仍需要的找零的金额
    let remainder = 0;
    //计算库存金额的总金额
    let amountCash = cidBox[billPos[0.01]][1] + cidBox[billPos[0.05]][1] + cidBox[billPos[0.1]][1] + cidBox[billPos[0.25]][1] + cidBox[billPos[1]][1] + cidBox[billPos[5]][1] + cidBox[billPos[10]][1] + cidBox[billPos[20]][1] + cidBox[billPos[100]][1];
    amountCash *= 100;
    //console.log(amountCash);

    
      if (amountCash < change){
        //库存总金额少于应当找零的金额
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        
        /* this.setState({
          status: result.status,
          change: result.change
        }); */
        this.props.submitNewStatus(result.status);
        this.props.submitNewChange(result.change);
      }else if (amountCash === change){
        //库存总金额正好等于应当找零的金额
        result.status = "CLOSED";
        //把库存金额由高到低排序后返回
        result.change = cashSort.sort((a, b) => -(a - b));
        result.change = result.change.filter((item) => item[1] !== 0);
        /* this.setState({
          status: result.status,
          change: result.change,
          cid: [["ONE HUNDRED", 0],["TWENTY", 0],["TEN", 0],["FIVE", 0],["ONE", 0],["QUARTER", 0],["DIME", 0],["NICKEL", 0],["PENNY", 0]]
        }); */
        this.props.submitNewStatus(result.status);
        this.props.submitNewChange(result.change);
        this.props.submitRemoveCid();
        this.setState({
          cidChangeNum: this.state.cidChangeNum + 1
        });
      }else {
        //库存总金额大于应当找零的金额
        let hundred = Math.floor(change / 10000);
        if (hundred * 100 > cidBox[8 - billPos[100]][1]){
          //库存的百元面额钞票总金额不足以找零
          //则找零剩余的金额应当等于，当前应找零金额 - 库存百元面额钞票总金额；因为为了便于计算，找零放大了100倍，所以此处库存金额也放大相同倍数
          remainder = change - cidBox[billPos[100]][1] * 100;
          //应找零金额直接包含库存的所有百元面额钞票
          result.change[8 - billPos[100]].push(cidBox[billPos[100]][1]);
          //更新库存
          cidBox[8 - billPos[100]][1] = 0;
          
        }else {
          //库存的百元面额钞票比当前应当找零金额的百位及以上数多
          //则找零的剩余金额应当为，当前应找零金额，对库存百元钞票求余数
          remainder = change % 10000;
          //找零应包含的百元面额的钞票数为，当前应找零金额除以100的商；该商为当前面额的钱币数量，再乘以对应面额，则是，该面额的钱币用于找零的金额
          result.change[8 - billPos[100]].push(hundred * 100);
          //更新库存
          cidBox[8 - billPos[100]][1] -= hundred * 100;
          
        }
        
        let twenty = Math.floor(remainder / 2000);
        if (twenty * 20 > cidBox[8 - billPos[20]][1]){
          remainder -= cidBox[billPos[20]][1] * 100;
          result.change[8 - billPos[20]].push(cidBox[billPos[20]][1]);

          //更新库存
          cidBox[8 - billPos[20]][1] = 0;
        }else {
          remainder = change % 10000 % 2000;
          result.change[8 - billPos[20]].push(twenty * 20);
          //更新库存
          cidBox[8 - billPos[20]][1] -= twenty * 20;
        }

        let ten = Math.floor(remainder / 1000);
        if (ten * 20 > cidBox[8 - billPos[10]][1]){
          remainder -= cidBox[billPos[10]][1] * 100;
          result.change[8 - billPos[10]].push(cidBox[billPos[10]][1]);
          //更新库存
          cidBox[8 - billPos[10]][1] = 0;
        }else {
          remainder = change % 10000 % 2000 % 1000;
          result.change[8 - billPos[10]].push(ten * 10);
          //更新库存
          cidBox[8 - billPos[10]][1] -= ten * 10;
        }
        //console.log(ten, remainder);
        let five = Math.floor(remainder  / 500);
        if (five * 5 > cidBox[8 - billPos[5]][1]){
          remainder -= cidBox[billPos[5]][1] * 100;
          result.change[8 - billPos[5]].push(cidBox[billPos[5]][1]);
          //更新库存
          cidBox[8 - billPos[5]][1] = 0;
        }else {
          remainder = change % 10000 % 2000 % 1000 % 500;
          result.change[8 - billPos[5]].push(five * 5);
          //更新库存
          cidBox[8 - billPos[5]][1] -= five * 5;
        }
        
        let dollar = Math.floor(remainder / 100);
        if (dollar * 1 > cidBox[8 - billPos[1]][1]){
          remainder -= cidBox[billPos[1]][1] * 100;
          result.change[8 - billPos[1]].push(cidBox[billPos[1]][1]);
          //更新库存
          cidBox[8 - billPos[1]][1] = 0;
        }else {
          remainder = change % 10000 % 2000 % 1000 % 500 % 100;
          result.change[8 - billPos[1]].push(dollar * 1);
          //更新库存
          cidBox[8 - billPos[1]][1] -= dollar * 1;
        }
        
        let quarter = Math.floor(remainder / 25);
        if (quarter * 0.25 > cidBox[8 - billPos[0.25]][1]){
          remainder -= cidBox[billPos[0.25]][1] * 100;
          result.change[8 - billPos[0.25]].push(cidBox[billPos[0.25]][1]);
          //更新库存
          cidBox[8 - billPos[0.25]][1] = 0;
        }else {
          remainder = change % 10000 % 2000 % 1000 % 500 % 100 % 25;
          result.change[8 - billPos[0.25]].push(quarter * 0.25);
          //更新库存
          cidBox[8 - billPos[0.25]][1] -= quarter * 0.25;
        }
        
        let dime = Math.floor(remainder / 10);
        if (dime * 0.1 > cidBox[8 - billPos[0.1]][1]){
          remainder -= cidBox[billPos[0.1]][1] * 100;
          result.change[8 - billPos[0.1]].push(cidBox[billPos[0.1]][1]);
          //更新库存
          cidBox[8 - billPos[0.1]][1] =0;
        }else {
          remainder = change % 10000 % 2000 % 1000 % 500 % 100 % 25 % 10;
          result.change[8 - billPos[0.1]].push(dime * 0.1);
          //更新库存
          cidBox[8 - billPos[0.1]][1] -= dime * 0.1;
        }
        
        let nickel = Math.floor(remainder / 5);
        if (nickel * 0.05 > cidBox[8 - billPos[0.05]][1]){
          remainder -= cidBox[billPos[0.05]][1] * 100;
          result.change[8 - billPos[0.05]].push(cidBox[billPos[0.05]][1]);
          //更新库存
          cidBox[8 - billPos[0.05]][1] = 0;
        }else {
          remainder = change % 10000 % 2000 % 1000 % 500 % 100 % 25 % 10 % 5;
          result.change[8 - billPos[0.05]].push(nickel * 0.05);
          
          //更新库存
          cidBox[8 - billPos[0.05]][1] -= nickel * 0.05;
        }

        let penny = Math.floor(remainder / 1);
        if (penny * 0.01 > cidBox[8 - billPos[0.01]][1]){
          //这是最小面额的金钱，如果计算得出的应当找零的金额，比库存还要大
          //则说明两种情况，一是，库存金额小于找零金额，但这个情况前面已经处理
          //二是，前面都把剩余的找零金额堆积到了此处，前面所有面额的钱币库存都不能找零，此处最小面额的钱币也还是不足以找零，即，库存的钱币无法准确找零
          //例如，库存只有1 + 0.01，而需找零0.5
          result.change = [];
          result.status = "INSUFFICIENT_FUNDS"
          cidBox = this.props.cid;
          //更新找零的计算结果
          /* this.setState({
            status: result.status,
            change: result.change
          }); */
          this.props.submitNewStatus(result.status);
          this.props.submitNewChange(result.change);
        }else {
          result.change[8 - billPos[0.01]].push(penny * 0.01);
          //更新库存
          cidBox[8 - billPos[0.01]][1] -= penny * 0.01;

          result.change = result.change.filter((item) => item[1] !== 0);
          
          result.status = "OPEN";
          
          /* this.setState({
            status: result.status,
            change: result.change,
            cid: cidBox
          }); */
          this.props.submitNewStatus(result.status);
          this.props.submitNewChange(result.change);
          this.props.submitNewCid(cidBox);
          this.setState({
            cidChangeNum: this.state.cidChangeNum + 1
          })
        }
        
        
      }
      console.log(result);
      //完成一次计算后，初始化数据
      let priceInput = document.getElementById("price");
      let paymentInput = document.getElementById("payment");
      priceInput.value = "0";
      paymentInput.value = "0";
      /* this.setState({
        price: [0],
        payment: 0
      }); */
      this.props.submitResetPrice();
      this.props.submitRemovePayment();
  }

  render() {
    return(
      <div className="row">
        <div className={APP_LAYOUT}>
          <Display price={this.props.price} payment={this.props.payment} cid={this.props.cid} addGoods={this.addGoods} handlePayment={this.handlePayment} calculate={this.calculate} reset={this.reset} />
          <Result change={this.props.change} status={this.props.status} priceText={this.props.priceShow} paymentText={this.props.paymentShow} totalShow={this.props.totalShow}/>
          <CashSetting handleInput={this.handleInput} show={this.show} resetCid={this.resetCid}/>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
    price: state.price,
    totalShow: state.totalShow.totalShow,
    payment: state.payment.payment,
    priceShow: state.priceShow,

    paymentShow: state.paymentShow.paymentShow,
    cid: state.cid,
    status: state.status.status,
    change: state.change
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewPrice: (price) => {
      dispatch(addPrice(price))
    },
    submitRemovePrice: (price) => {
      dispatch(removePrice(price))
    },
    submitResetPrice: () => {
      dispatch(resetPrice())
    },
    submitNewTotalShow: (totalShow) => {
      dispatch(addTotalShow(totalShow))
    },
    submitRemoveTotalShow: () => {
      dispatch(removeTotalShow())
    },
    submitNewPayment: (payment) => {
      dispatch(addPayment(payment))
    },
    submitRemovePayment: () => {
      dispatch(removePayment())
    },
    submitNewPriceShow: (priceShow) => {
      dispatch(addPriceShow(priceShow))
    },
    submitRemovePriceShow: (priceShow) => {
      dispatch(removePriceShow(priceShow))
    },
    submitResetPriceShow: () => {
      dispatch(resetPriceShow())
    },
    submitNewPaymentShow: (paymentShow) => {
      dispatch(addPaymentShow(paymentShow))
    },
    submitRemovePaymentShow: () => {
      dispatch(removePaymentShow())
    },
    submitNewCid: (cid) => {
      dispatch(addCid(cid))
    },
    submitRemoveCid: () => {
      dispatch(removeCid())
    },
    submitNewStatus: (status) => {
      dispatch(addStatus(status))
    },
    submitRemoveStatus: () => {
      dispatch(removeStatus())
    },
    submitNewChange: (change) => {
      dispatch(addChange(change))
    },
    submitRemoveChange: () => {
      dispatch(removeChange())
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Container />
      </Provider>
    );
  };
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default AppWrapper;
