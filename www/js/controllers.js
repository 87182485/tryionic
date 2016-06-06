angular.module('app.controllers', [])

    .controller('homeCtrl', function ($log, $scope, $ionicNavBarDelegate) {
        $ionicNavBarDelegate.showBackButton(true);

        var searchData = [
            { text: "Leaf Rake", loc: 'C23' },
            { text: "Garden Cart", loc: 'D15' },
            { text: "Hammer", loc: 'E30' },
            { text: "Saw", loc: 'F20' },
            { text: "Game Controller", loc: 'F15' },
        ];

        angular.extend($scope, {
            isSearchMode: false,
            search: '',
            performSearch: performSearch,
            searchData: searchData,
            onSearchMode: onSearchMode,
            offSearchMode: offSearchMode
        });

        function onSearchMode() {
            $log.info("onSearchMode");
            $scope.isSearchMode = true;
        }

        function offSearchMode() {
            if ($scope.search === '') {
                $scope.isSearchMode = false;
            }
        }

        function performSearch() {

        }
    })

    .controller('categoryCtrl', function ($scope) {

    })

    .controller('cartCtrl', function ($scope) {

    })

    .controller('leafRakeCtrl', function ($log, $scope) {

        angular.extend($scope, {
            quantity: 2,
            price: 19.95,
            total: 0,
            add: add,
            minus: minus
        });

        function activate() {
            $log.info('running');
            updateTotal();
        }

        function add() {
            $scope.quantity++;
            updateTotal();
        }

        function minus() {
            if ($scope.quantity > 0) {
                $scope.quantity--;
                updateTotal();
            }
        }

        function updateTotal() {
            $scope.total = $scope.quantity * $scope.price;
        }

        activate();
    })

    .controller('mapViewCtrl', function ($log, $scope) {
        var defaultMapSrc = 'img/map-1.png';
        $scope.mapSrc = defaultMapSrc;

        $scope.switchToA = function () {
            $log.info('A');
            $scope.mapSrc = 'img/map-2.png'
        };

        $scope.switchToG = function () {
            $log.info('G');
            $scope.mapSrc = 'img/map3.png'
        };
    });