(function (window) {
	'use strict';

	var todoApp = angular.module('todoApp',[])

	todoApp.controller('controller',['$scope',function($scope){

		/*功能1:任务的展示
		假设已经得到数据*/
		$scope.msg=[
		{id:1,name:'吃虾',completed:true},
		{id:2,name:'吃鸡',completed:true},
		{id:3,name:'吃鱼',completed:false},
		{id:4,name:'吃大烤串',completed:true},
		{id:5,name:'吃火锅',completed:false},
		{id:6,name:'吃薯片',completed:true}
		]

		// 功能2:添加任务

		$scope.write=''

		// 把写的内容添加到$scope.msg中

		$scope.add = function(){
			if(!$scope.write){
				return
			}
			$scope.msg.push({
			name:$scope.write,
			id:Math.random(),
			completed:false
		 })
		  $scope.write=''	
		}

		// 功能3:删除任务
		
		$scope.remove = function(id){
			for(var i=0;i<$scope.msg.length;i++){
				var msg = $scope.msg[i]
				if(msg.id===id){
					$scope.msg.splice(i,1);
					return
				}
			}
		}



		//功能4:修改任务内容
		$scope.iseditId = -1

		$scope.edit = function(id){
			$scope.iseditId=id
		}

		$scope.save = function(){
			$scope.iseditId=-1
		}



		//功能5:切换功能完成是否状态

		//功能6:批量切换完成是否状态

		$scope.slectAll = false

		$scope.all = function(){
			for(var i=0;i<$scope.msg.length;i++){
				var msg = $scope.msg[i]
				msg.completed = $scope.slectAll
			}
		}


		//功能7:显示未完成的任务数

		
		$scope.num = function(){
			var count=0
			for(var i=0;i<$scope.msg.length;i++){
				var msg = $scope.msg[i]
				if(msg.completed==false){
					count++
				}
			}
			return count
		}


		//功能8:清除所有已完成的任务

		$scope.clear = function(){
			for(var i=$scope.msg.length-1;i>=0;i--){
				var msg = $scope.msg[i]
				if(msg.completed==true){
					$scope.msg.splice(i,1)
				}
			}
		}

















		
	}])

})(window);
