angular.module("app",["ui.router"])


.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("indexpage")
	$urlRouterProvider.when("/searchpage","searchpage/danpage")
	$urlRouterProvider.when("/likepage","likepage/dapage")
	$stateProvider
	.state({
		name:"index",
		url:"/indexpage",
		templateUrl:"view/index.html",
		controller:function($scope,$http,$state,$rootScope){
			var banner=new Swiper('.banner',{
				autoplay:true,
				speed: 1500,
				pagination:".swiper-pagination"
			})
			
			var pin_wrapper=new IScroll("#pin_wrapper",{
				scrollX:false
			})
			
			$http.get("data/qing.json")
				.success(function(data){
					$scope.list=data
					console.log($scope.list)
				})
				
				
			$scope.qing_list=function(ele1,ele2){
				$rootScope.datas=ele1.list
				//console.log(ele2)
				$rootScope.ele=ele2
				console.log($scope.ele)
				$state.go("qing_list")
			}
			var qing=new Swiper('.qing_list',{
				
			})
		}
		
	})
	.state({
		name:"qing_list",
		url:"/qing_listpage",
		templateUrl:"view/qingList.html",
		controller:function($rootScope,$scope){
			$scope.els=$rootScope.ele
			console.log($scope.els)
		}
	})
	.state({
		name:"kefu",
		url:"/kefupage",
		templateUrl:"view/kefu.html"
	})
	.state({
		name:"search",
		url:"/searchpage",
		templateUrl:"view/search.html",
		controller:function($rootScope,$scope){
			$scope.search=function(msg){
				$rootScope.msg=msg
				console.log($rootScope.msg)
			}
			
		}
	})
	.state({
		name:"search.dan",
		url:"/danpage",
		templateUrl:"view/dan.html"
	})
	.state({
		name:"search.da",
		url:"/dapage",
		templateUrl:"view/da.html"
	})
	.state({
		name:"search.wen",
		url:"/wenpage",
		templateUrl:"view/wen.html",
		controller:function($scope,$http){
			$http.get("data/wen.json")
			.success(function(data){
				console.log(data)
				$scope.list=data

			})
		}
	})
	.state({
		name:"search.pin",
		url:"/pinpage",
		templateUrl:"view/pin.html",
		controller:function($scope,$http){
			$http.get("data/pin_yong.json")
			.success(function(data){
				console.log(data)
				$scope.list=data
			})
		}
	})
	.state({
		name:"chuan",
		url:"/chuanpage",
		templateUrl:"view/chuan.html",
		controller:function($scope,$rootScope){
			var swiper = new Swiper('.qi', {
		        pagination: '.swiper-pagination',
		        effect: 'coverflow',
		        grabCursor: true,
		        centeredSlides: true,
		        slidesPerView: 'auto',
		        coverflow: {
		            rotate: 50,
		            stretch: 0,
		            depth: 100,
		            modifier: 1,
		            slideShadows : true
		        }
		    });
		    
		    function slideTo(index){
		    	swiper.slideTo(index,1000)
		    }
		    
		    $(".swiper-slide").on("swiperRight",function(){
		    	var index=$(this).index();
		    	console.log(index)
		    	slideTo(index)
		    	if(index==0){
		    		$rootScope.today="昨天"
		    	}else if(index==1){
		    		$rootScope.today="今天"
		    	}
		    })
		   $scope.today="今天"
		   	
		   
		   	$scope.isShow=false
			$rootScope.fenxiang=function(){
				$scope.isShow=!($scope.isShow);
				console.log($scope.isShow)
			}
			$scope.markhidden=function(){
				$scope.isShow=false
			}
			
			
			$scope.changeBg=function(){
				$scope.div1Bg = '#d075ea';
			}
			
		   
		}
		
		
	})
	.state({
		name:"qing",
		url:"/qingpage",
		templateUrl:"view/qing.html"
	})
	.state({
		name:"zai",
		url:"/zaipage",
		templateUrl:"view/zai.html",
		controller:function($scope,$http){
			$http.get("data/tui.json")
				.success(function(data){
					$scope.list=data
				})
		}
	})
	.state({
		name:"back",
		url:"/chuanpage",
		templateUrl:"view/chuan.html"
	})
	.state({
		name:"backqing",
		url:"/chuanpage",
		templateUrl:"view/chuan.html"
	})
	.state({
		name:"ceshi",
		url:"/ceshipage",
		templateUrl:"view/ceshi.html",
		controller:function($scope){
			var swiper = new Swiper('.pagination_up', {
		        pagination: '.swiper-pagination',
		        paginationType: 'progress'
		    });
				}
		
	})
	.state({
		name:"shouce",
		url:"/shoucepage",
		templateUrl:"view/shouce.html",
		controller: function($scope,$rootScope){
			var pin_wrapper=new IScroll("#shou_wrapper",{
				scrollX:false
			})
			
			$scope.isShow=false
			$rootScope.fenxiang=function(){
				$scope.isShow=!($scope.isShow);
				console.log($scope.isShow)
			}
			$scope.markhidden=function(){
				$scope.isShow=false
			}
		}
	})
	.state({
		name:"dialog",
		url:"/indexpage",
		templateUrl:"view/index.html"
	})
	
	.state({
		name:"city",
		url:"/citypage",
		templateUrl:"view/city.html",
		controller:function($scope,$http,$state,$rootScope){
			$http.get("data/city.json")
			.success(function(data){
				$scope.list=data
				
			})
			$scope.ols=function(obj){
				$rootScope.olList=obj.list;
				$state.go("city2")
				
				
				console.log($scope.olList)
			}
		}
	})
	.state({
		name:"city2",
		url:"/city2page",
		templateUrl:"view/city2.html",
		controller:function($scope,$state,$rootScope){
			$scope.olis=function(txt){
				$state.go("chuan")
				console.log(txt)
				$rootScope.citys=txt
			}
			
		}
		
	})
	.state({
		name:"backchuan",
		url:"/chuanpage",
		templateUrl:"view/chuan.html"
	})
	.state({
		name:"backchuan1",
		url:"/chuanpage",
		templateUrl:"view/city.html"
	})
	.state({
		name:"backindex",
		url:"/indexpage",
		templateUrl:"view/index.html"
	})
	.state({
		name:"add",
		url:"/addpage",
		templateUrl:"view/add.html"
	})
	.state({
		name:"gou",
		url:"/goupage",
		templateUrl:"view/gou.html",
		controller:function($scope){
			var gou_wrap=new IScroll("#gou_wrapper",{
				scrollX:false
			})
		}
	})
	.state({
		name:"ling",
		url:"/lingpage",
		templateUrl:"view/ling.html",
		scroller:function($scope){
			var link_wrapper=new IScroll("#link_wrapper",{
				scrollX:false
			})
		}
	})
	.state({
		name:"seetings",
		url:"/seetingspage",
		templateUrl:"view/seetings.html"
	})
	.state({
		name:"seeting1",
		url:"/seeting1",
		templateUrl:"view/seeting1.html",
		controller:function(){
			
		}
	})
	.state({
		name:"pwd",
		url:"/pwdpage",
		templateUrl:"view/password.html"
	})
	.state({
		name:"shouquan",
		url:"/shouquanpage",
		templateUrl:"view/shouquan.html"
	})
	.state({
		name:"bang",
		url:"/bangpage",
		templateUrl:"view/bang.html"
	})
	.state({
		name:"backsetting",
		url:"seetingspage",
		templateUrl:"view/seetings.html"
	})
	.state({
		name:"geren",
		url:"/gerenpage",
		templateUrl:"view/geren.html"
	})
	.state({
		name:"backge",
		url:"/seeting1",
		templateUrl:"view/seeting1.html"
	})
	.state({
		name:"close",
		url:"/seeting1",
		templateUrl:"view/seeting1.html"
	})
	.state({
		name:"like",
		url:"/likepage",
		templateUrl:"view/like.html"
	})
	.state({
		name:"backlike",
		url:"/backlikepage",
		templateUrl:"view/seetings.html"
	})
	.state({
		name:"like.dan",
		url:"/danpage",
		templateUrl:"view/dan.html"
	})
	.state({
		name:"like.da",
		url:"/dapage",
		templateUrl:"view/da.html"
	})
})

/*自定义指令*/
.directive("myFooter",function(){
	return {
		restrict:"AE",
		scope:{},
		replace:true,
		template:`<footer class="foot">
			    	<a ui-sref="index" ui-sref-active="bgColor">
			    		<dl>
			    			<dt><i class="iconfont icon-default-baidu f22"></i> </dt>
			    			<dd>首页</dd>
			    		</dl>
			    	</a>
			    	<a ui-sref="gou" ui-sref-active="bgColor">
			    		<dl>
			    			<dt><i class="iconfont icon-caidan f22"></i></dt>
			    			<dd>购物</dd>
			    		</dl>
			    	</a>
			    	<a ui-sref="ling" ui-sref-active="bgColor">
			    		<dl>
			    			<dt><i class="iconfont icon-bianji f22"></i></dt>
			    			<dd>灵感</dd>
			    		</dl>
			    	</a>
			    	<a ui-sref-active="bgColor">
			    		<dl>
			    			<dt><i class="iconfont icon-gouwuche1 f22"></i></dt>
			    			<dd>购物车</dd>
			    		</dl>
			    	</a>
			    	<a ui-sref="seetings" ui-sref-active="bgColor">
			    		<dl>
			    			<dt><i class="iconfont icon-shaixuan f22"></i></dt>
			    			<dd>我的</dd>
			    		</dl>
			    	</a>
			    </footer>`
	}
})

/*.directive("myDialog",function(){
	return {
		restrict:"AE",
		scope:{
			
		},
		replace:true,
		template:`<div class="fen_dialog" ng-show="isShow" ng-click="markhidden()">
					<div class="fen_mark">
						<span>分享到</span>
						<ul>
							<li><i class="iconfont icon-weixin f22"></i></li>
							<li><i class="iconfont icon-weixin1 f22"></i></li>
							<li><i class="iconfont icon-circular-QQ f22"></i></li>
							<li><i class="iconfont icon-circular-Weibo f22"></i></li>
						</ul>
					</div>
				</div>`,
		link:function(scope,Element,attr){
			
			scope.fenxiang=function(){
				scope.isShow=!scope.isShow
				scope.$apply.isShow=scope.$parent.isShow
			}
			scope.$apply.isShow=scope.$parent.isShow
			
		}
	}
})
*/
