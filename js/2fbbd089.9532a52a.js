(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2fbbd089"],{"0073":function(t,e,a){},"1e34":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mypage"},[a("TitleBar",{attrs:{titleTx:t.title}}),a("div",{staticClass:"id-up-part"},[a("div",{staticClass:"id-di-sp"},[a("span",{staticClass:"id-di-name"},[t._v(t._s(t.$t("ivben"))+"：")]),a("span",{staticClass:"id-di-value"},[t._v(t._s(t.item.amt)+" ETH")])]),a("div",{staticClass:"id-di-sp"},[a("span",{staticClass:"id-di-name"},[t._v(t._s(t.$t("ivstartt"))+"：")]),a("span",{staticClass:"id-di-value"},[t._v(t._s(t.item.time))])]),a("div",{staticClass:"id-di-sp"},[a("span",{staticClass:"id-di-name"},[t._v(t._s(t.$t("ivprogress"))+"：")]),a("span",{staticClass:"id-di-value"},[t._v(t._s(t.pastTime))])]),a("div",{staticClass:"id-di-sp"},[a("span",{staticClass:"id-di-name"},[t._v(t._s(t.$t("curearned"))+"：")]),a("span",{staticClass:"id-di-value"},[t._v(t._s(t.currentIncome/t.global.cmatconfig.mcoinPrice)+" CGAS")])]),a("div",{staticClass:"id-di-sp"},[a("span",{staticClass:"id-di-name"},[t._v(t._s(t.$t("candraw"))+"：")]),a("span",{staticClass:"id-di-value"},[t._v(t._s(t.currentCanSell/t.global.cmatconfig.mcoinPrice)+" CGAS")])]),t.isRepay&&t.isLive?a("span",{staticClass:"id-tips",domProps:{innerHTML:t._s(t.$t("repaytiptx",{currentCanSell:t.currentCanSell/t.global.cmatconfig.mcoinPrice,leftCanSell:t.leftCanSell/t.global.cmatconfig.mcoinPrice,rePayAmount:t.rePayAmount}))}}):t._e(),t.isLive?t._e():a("q-btn",{staticStyle:{"align-self":"center",margin:"10px"},attrs:{size:"18px",round:"",color:"secondary",icon:"done",disable:""}}),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.nextBtnShow,expression:"nextBtnShow"}],staticClass:"btn-normal",attrs:{rounded:"",label:t.$t("cansellheyue"),color:"primary"},on:{click:t.toNext}})],1),a("custom-input-dialog-vue",{attrs:{dialogData:t.dialogData},on:{pressOK:t.pressOK}}),a("div",{staticClass:"id-down-part"},[a("span",{staticClass:"id-transfer-tip"},[t._v(t._s(t.$t("drawlog")))]),a("div",{staticClass:"id-trans-log"},[a("q-list",{staticStyle:{width:"100vw"},attrs:{highlight:"",separator:"","no-border":""}},t._l(t.withdrawList,function(e){return a("q-item",{key:e.index,staticClass:"id-item",nativeOn:{click:function(a){t.openEtherScan(e.hash)}}},[a("span",{staticStyle:{color:"dodgerblue"}},[t._v("\n            "+t._s(e.withdrawamt/t.global.cmatconfig.mcoinPrice)+" CGAS\n          ")]),a("span",{staticStyle:{color:"#44566B"}},[t._v(t._s(e.time))])])}))],1)])],1)},s=[];i._withStripped=!0;a("ac6a"),a("cadf"),a("96cf");var n=a("c973"),r=a.n(n),o=a("9bfb"),l=a("e7ea"),c=(a("a002"),a("6b45")),u=a("f5ef"),d=(a("96a1"),a("df7c"),a("3452"),{components:{TitleBar:o["a"],CustomInputDialogVue:c["a"]},data:function(){return{title:this.$t("ivdetail"),item:this.$route.query.item,currentCanSell:"",leftCanSell:"",rePayAmount:"",dialogData:{show:!1,msg:this.$t("cansellheyue"),from:"investDetail",repayAmout:this.$route.query.item.amt,isRepay:!1,currentCanSell:""},alreadyDrawAmt:0,bx123:0,bx4:0,currentWeek:0,pastTime:"",currentIncome:"",leftCanDraw3:"",nextBtnShow:!0,spanTx:"",isLive:!0,withdrawList:[],txStatus:[],isRepay:!1,repayAmout:0}},mounted:function(){console.log("---- InvestDetail mounted"),console.log("----id:"+this.$route.query.item.investid),this.pastTime=this.$route.query.item.pastTime,this.currentIncome=this.$route.query.item.currentIncome,this.rePayAmount=this.$route.query.item.amt,this.getInvestInfoById(),this.getinvestDrawEvent(),this.getCanDrawInfo(),this.util.refreshGasPrice(this)},methods:{getInvestInfoById:function(){var t=this,e=function(){var e=r()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.global.m3gameContract.getInvestInfoById(t.$route.query.item.investid-1+"");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();e().then(function(e){t.isLive=e._status,t.nextBtnShow=e._status})},getinvestDrawEvent:function(){var t=this,e={address:this.global.contractConfig.m3gameAddress,fromBlock:this.global.contractConfig.eventFromBlock,topics:["0x63ba7464748b18baa06a514cdf6a17502f9938fe7c5ebf590dd1cb978c562117","0x000000000000000000000000"+this.global.contractConfig.tokenAddress.substring(2),"0x000000000000000000000000"+this.global.wallet.ethAddress.substring(2)]},a=this.global.defaultProvider.getLogs(e);a.then(function(e){t.parseEvents(e)}).catch(function(t){console.error(t)})},parseEvents:function(t){var e,a=t.reverse();this.withdrawList=[];for(var i=0;i<t.length;i++){e=this.global.m3gameContract.interface.parseLog(a[i]);e.values.inverstor;parseInt(e.values.id)===parseInt(this.$route.query.item.investid-1)&&this.withdrawList.push({withdrawamt:l["ethers"].utils.formatEther(e.values.drawAmt),time:this.util.convertUTCTimeToLocalTime(1e3*parseInt(e.values.time)),hash:a[i].transactionHash})}},getCanDrawInfo:function(){var t=this,e=function(){var e=r()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.global.proxyContract.getCanDrawInfo(t.$route.query.item.investid-1+"");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();e().then(function(e){console.log(e),t.dialogData.currentCanSell=t.currentCanSell=l["ethers"].utils.formatEther(e._candraw),0!==parseInt(e._repayDraw)&&(t.leftCanSell=parseFloat((l["ethers"].utils.formatEther(e._repayDraw)-t.currentCanSell).toFixed(10)),t.dialogData.isRepay=t.isRepay=!0),t.isLive||(t.currentCanSell=0)}).catch(function(e){-1!==(e+"").indexOf("call revert exception")&&(t.dialogData.currentCanSell=t.currentCanSell=0)})},toNext:function(){0!==this.currentCanSell?this.dialogData.show=!0:toast(this.$t("candraw0"))},pressOK:function(t){var e=parseFloat((.01*(t.v1+t.v3)).toFixed(10));this.global.wallet.lastMcoinBalance<e?this.$q.dialog({title:"",message:this.$t("cmatless"),ok:this.$t("ok")}):this.isRepay&&t.v1>this.currentCanSell?this.getLocalWallet(t,t.v3):this.getLocalWallet(t,0)},getLocalWallet:function(t,e){var a=this;this.$q.loading.show({message:a.$t("txsubmiting"),spinnerSize:50});var i=this.util.getWallet(a,t.v2);this.doWithDraw(i,t.v1,e)},doWithDraw:function(t,e,a){var i=this,s=this.global.m3gameContract.connect(t),n={value:l["ethers"].utils.parseEther(a+""),gasPrice:l["ethers"].utils.bigNumberify(this.global.contractConfig.gasprice)},r=parseInt(this.item.investid)-1;s.investWithdraw(r+"",l["ethers"].utils.parseEther(parseFloat((e*this.global.cmatconfig.mcoinPrice).toFixed(10))+""),n).then(function(t){console.log(t),i.$q.loading.hide(),i.util.showInfoDialog(i,t.hash,!0),i.util.listen4TxResult(i,t.hash,i.$t("sellsuccess"),i.$t("submitfailed"),function(){n.value>0&&u["a"].$emit("investSuccess")})}).catch(function(t){console.error(t),i.util.reprotError2Bmob(i,"investWithdraw",t,r+","+l["ethers"].utils.parseEther(e+"")+","+n.value),i.$q.loading.hide()})},getTxResult:function(t,e){var a=this,i="https://api.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash="+e+"&apikey="+this.global.apiconfig.etherscanAPIKey;this.$axios.get(i).then(function(e){"0"===e.data.status?a.txStatus[t]=!0:a.txStatus[t]=!1}).catch(function(t){}).then(function(){})},openEtherScan:function(t){}}}),h=d,p=(a("5e9e"),a("2877")),m=Object(p["a"])(h,i,s,!1,null,null,null);m.options.__file="InvestDetail.vue";e["default"]=m.exports},"3dd4":function(t,e,a){},"5e9e":function(t,e,a){"use strict";var i=a("3dd4"),s=a.n(i);s.a},"6b45":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{on:{cancel:t.onCancel,show:t.onShow,hide:t.onHide},scopedSlots:t._u([{key:"buttons",fn:function(e){return a("div",{staticClass:"dialog-btn"},[a("q-btn",{attrs:{flat:"",label:t.$t("cancel")},on:{click:e.cancel}}),a("q-btn",{staticStyle:{"margin-top":"0px"},attrs:{flat:"",label:t.$t("ok")},on:{click:t.onOk}})],1)}}]),model:{value:t.dialogData.show,callback:function(e){t.$set(t.dialogData,"show",e)},expression:"dialogData.show"}},[a("span",{staticStyle:{color:"black"},attrs:{slot:"message"},slot:"message"},[t._v(t._s(t.dialogData.msg))]),a("div",{attrs:{slot:"body"},slot:"body"},[a("q-input",{attrs:{type:"number",placeholder:"ethtrans"===t.dialogData.from?t.$t("inputbyamt"):"investDetail"===t.dialogData.from?t.$t("fillsellamt"):t.$t("drawamt")},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}}),a("q-input",{directives:[{name:"show",rawName:"v-show",value:"investDetail"===t.dialogData.from&&t.dialogData.isRepay&&t.input1>this.dialogData.currentCanSell,expression:"dialogData.from==='investDetail'&&dialogData.isRepay&& input1 > this.dialogData.currentCanSell"}],attrs:{type:"number",placeholder:t.$t("repayamt")},model:{value:t.repayAmt,callback:function(e){t.repayAmt=e},expression:"repayAmt"}}),"investDetail"===t.dialogData.from?a("span",{staticStyle:{"font-size":"10px"}},[t._v(t._s(t.$t("needcmat"))+":"+t._s(parseFloat((.02*(t.input1+t.repayAmt)).toFixed(10))))]):t._e(),"ethtrans"===t.dialogData.from?a("span",{staticStyle:{"font-size":"10px"}},[t._v(t._s(t.$t("cutprice"))+":"+t._s(t.global.cmatconfig.mcoinPrice)+","+t._s(t.$t("payethnum",{num:t.computeNeedETH})))]):t._e(),a("q-input",{attrs:{placeholder:t.$t("enterpswd")},model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}})],1)])},s=[];i._withStripped=!0;a("96cf");var n=a("c973"),r=a.n(n),o={props:["dialogData"],data:function(){return{input1:"investDetail"===this.dialogData.from?this.dialogData.canDrawAmt:"",input2:"",repayAmt:""}},computed:{computeNeedETH:function(){var t;return t=this.input1>=6e4?.5:this.input1>=2e3&&this.input1<6e4?.9:1,parseFloat((this.input1*this.global.cmatconfig.mcoinPrice*t).toFixed(10))}},methods:{onOk:function(){""!==this.input1&&null!==this.input1?""!==this.input2?this.input2.length<6?toast(this.$t("pwsdless6")):"investDetail"===this.dialogData.from&&this.dialogData.isRepay&&this.input1>this.dialogData.currentCanSell&&this.repayAmt<this.dialogData.repayAmout?toast(this.$t("repayinsuffit")+this.dialogData.repayAmout):"referAwards"===this.dialogData.from&&this.input1>this.dialogData.referAwards?toast(this.$t("drawexceed")):"referAwards"===this.dialogData.from&&this.input1>this.dialogData.totalInvest?toast(this.$t("drawexdtalivst")):(this.$emit("pressOK",{v1:this.input1,v2:this.input2,v3:this.repayAmt,v4:this.computeNeedETH}),this.dialogData.show=!1):toast(this.$t("pswdnull")):toast(this.$t("numnull"))},onCancel:function(){},onShow:function(){},onHide:function(){},choose:function(){var t=r()(regeneratorRuntime.mark(function t(e,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}()}},l=o,c=(a("ad45"),a("2877")),u=Object(c["a"])(l,i,s,!1,null,"4214c8a0",null);u.options.__file="CustomInputDialog.vue";e["a"]=u.exports},"9bfb":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title-bar"},[a("q-icon",{staticClass:"title-back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(e){return t.goBack(e)}}}),a("div",{staticClass:"title-tx"},[t._v(t._s(t.titleTx))])],1)},s=[];i._withStripped=!0;var n={props:["titleTx"],methods:{goBack:function(){this.$router.go(-1)}}},r=n,o=(a("a675"),a("2877")),l=Object(o["a"])(r,i,s,!1,null,null,null);l.options.__file="TitleBar.vue";e["a"]=l.exports},a675:function(t,e,a){"use strict";var i=a("ca51"),s=a.n(i);s.a},ad45:function(t,e,a){"use strict";var i=a("0073"),s=a.n(i);s.a},ca51:function(t,e,a){},f5ef:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var i=a("2b0e"),s=new i["a"]}}]);