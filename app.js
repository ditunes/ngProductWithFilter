var APP = angular.module('APP', [])



APP.controller('indexCtrl', function($scope) {

    $scope.filter = {
        keyWord: '',
        saleDown: false
    }

    $scope.products = [{
        title: '食品',
        data: [
            { title: '苹果', price: 15, unit: '克', stock: 100, sale: 10 },
            { title: '面包', price: 25, unit: '个', stock: 10, sale: 2 },
            { title: '啤酒', price: 15, unit: '瓶', stock: 100, sale: 4 },
        ]
    }, {
        title: '电子数码',
        data: [
            { title: '电脑', price: 3000, unit: '台', stock: 5, sale: 0 },
            { title: '电视', price: 1000, unit: '台', stock: 2, sale: 0 }
        ]

    }]

})