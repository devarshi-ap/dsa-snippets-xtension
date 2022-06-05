var expect = require('chai').expect;
var lib = require('./snippets.lib');

describe('Functions library of snippets', function () {
  describe('Selection Sort', function () {
    it('returns a sorted array', function () {
      var arr1 = lib.selectionSort([99, 77, -88, -33, 22, 66, 0, 12]);
      var arr2 = lib.selectionSort([]);

      expect(arr1).to.deep.equal([-88, -33, 0, 12, 22, 66, 77, 99]);
      expect(arr2).to.deep.equal([]);
    });
  });

  describe('Insertion Sort', function () {
    it('returns a sorted array', function () {
      var arr1 = lib.insertionSort([99, 77, -88, -33, 22, 66, 0, 12]);
      var arr2 = lib.insertionSort([]);

      expect(arr1).to.deep.equal([-88, -33, 0, 12, 22, 66, 77, 99]);
      expect(arr2).to.deep.equal([]);
    });
  });

  describe('Bubble Sort', function () {
    it('returns a sorted array', function () {
      var arr1 = lib.bubbleSort([99, 77, -88, -33, 22, 66, 0, 12]);
      var arr2 = lib.bubbleSort([]);

      expect(arr1).to.deep.equal([-88, -33, 0, 12, 22, 66, 77, 99]);
      expect(arr2).to.deep.equal([]);
    });
  });

  describe('Shell Sort', function () {
    it('returns a sorted array', function () {
      var arr1 = lib.shellSort([99, 77, -88, -33, 22, 66, 0, 12]);
      var arr2 = lib.shellSort([]);

      expect(arr1).to.deep.equal([-88, -33, 0, 12, 22, 66, 77, 99]);
      expect(arr2).to.deep.equal([]);
    });
  });

  describe('Counting Sort', function () {
    it('returns a sorted array', function () {
      var arr1 = lib.countingSort([99, 77, -88, -33, 22, 66, 0, 12], -88, 99);
      var arr2 = lib.countingSort([]);

      expect(arr1).to.deep.equal([-88, -33, 0, 12, 22, 66, 77, 99]);
      expect(arr2).to.deep.equal([]);
    });
  });

  describe('Linear Search', function () {
    it('returns index of targeted element in specified array', function () {
      var search1 = lib.linearSearch([-20, -10, 0, 5, 10, 15], 5);
      var search2 = lib.linearSearch([0, 1, 2, 3, 4, 5], -88);
      var search3 = lib.linearSearch([], 0);

      expect(search1).to.equal(3);
      expect(search2).to.equal(-1);
      expect(search3).to.equal(-1);
    });
  });

  describe('Binary Search', function () {
    it('returns index of targeted element in specified array', function () {
      var search1 = lib.binarySearch([-20, -10, 0, 5, 10, 15], 5);
      var search2 = lib.binarySearch([0, 1, 2, 3, 4, 5], -88);
      var search3 = lib.binarySearch([], 0);

      expect(search1).to.equal(3);
      expect(search2).to.equal(-1);
      expect(search3).to.equal(-1);
    });
  });

  describe('Jump Search', function () {
    it('returns index of targeted element in specified array', function () {
      var search1 = lib.jumpSearch([-20, -10, 0, 5, 10, 15], 5);
      var search2 = lib.jumpSearch([0, 1, 2, 3, 4, 5], -88);
      var search3 = lib.jumpSearch([], 0);

      expect(search1).to.equal(3);
      expect(search2).to.equal(-1);
      expect(search3).to.equal(-1);
    });
  });

  describe('Interpolation Search', function () {
    it('returns index of targeted element in specified array', function () {
      var search1 = lib.interpolationSearch([-20, -10, 0, 5, 10, 15], 5);
      var search2 = lib.interpolationSearch([0, 1, 2, 3, 4, 5], -88);
      var search3 = lib.interpolationSearch([], 0);

      expect(search1).to.equal(3);
      expect(search2).to.equal(-1);
      expect(search3).to.equal(-1);
    });
  });

  describe('Fibonacci Search', function () {
    it('returns index of targeted element in specified array', function () {
      var search1 = lib.fibMonaccianSearch([0, 5, 10, 15], 5, 6);
      var search2 = lib.fibMonaccianSearch([0, 1, 2, 3, 4, 5], 8, 6);
      var search3 = lib.fibMonaccianSearch([], 0, 0);

      expect(search1).to.equal(1);
      expect(search2).to.equal(-1);
      expect(search3).to.equal(-1);
    });
  });

  describe('Array Uniques', function () {
    it('returns the unique-equivalent of the array, or, the set-converted equivalent', function () {
      var arr1 = lib.getUniqueValues([0, 1, 2, 2, 3, 4, 3, -1]);
      var arr2 = lib.getUniqueValues([]);

      expect(arr1).to.deep.equal([0, 1, 2, 3, 4, -1]);
      expect(arr2).to.deep.equal([]);
    });
  });

  describe('Sieve of Eratosthenes', function () {
    it('returns array of primes up to n', function () {
      var primesArr1 = lib.findPrimes(10);
      var primesArr2 = lib.findPrimes(0);

      expect(primesArr1).to.deep.equal([2, 3, 5, 7]);
      expect(primesArr2).to.deep.equal([]);
    });
  });

  describe('Prime Factorization', function () {
    it('returns array of the decomposition of n into a product of smaller primes', function () {
      var primesArr1 = lib.primeFactors(100);
      var primesArr2 = lib.primeFactors(0);

      expect(primesArr1).to.deep.equal([2, 2, 5, 5]);
      expect(primesArr2).to.deep.equal([]);
    });
  });

  describe('Modular Exponentiation', function () {
    it('returns result of (a ^ b) mod n', function () {
      var prod1 = lib.ModularExponentiation(5, 3, 6);
      var prod2 = lib.ModularExponentiation(0, 0, 0);

      expect(prod1).to.equal(5);
      expect(prod2).to.equal(1);
    });
  });

  describe('Iterative Factorial', function () {
    it('returns n!', function () {
      var res1 = lib.ItrFact(5);
      var res2 = lib.ItrFact(0);

      expect(res1).to.equal(120);
      expect(res2).to.equal(1);
    });
  });

  describe('Euclidean Distance', function () {
    it('returns the Euclidean Distance between two points in any number of dimensions (Nd array)', function () {
      var dist1 = lib.euclideanDistance([1, 1], [2, 3]);
      var dist2 = lib.euclideanDistance([1, 1, 1], [2, 3, 2]);

      expect(dist1).to.equal(2.23606797749979);
      expect(dist2).to.equal(2.449489742783178);
    });
  });


});