function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-login-login-module~components-register-register-module~home-home-module"], {
  /***/
  "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js":
  /*!************************************************************************************!*\
    !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js ***!
    \************************************************************************************/

  /*! exports provided: AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, AngularFirestoreDocument, AngularFirestoreModule, ENABLE_PERSISTENCE, PERSISTENCE_SETTINGS, SETTINGS, associateQuery, combineChange, combineChanges, docChanges, fromCollectionRef, fromDocRef, fromRef, sortedChanges, validateEventsArray */

  /***/
  function node_modulesAngularFire__ivy_ngcc__Fesm2015AngularFireFirestoreJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFirestore", function () {
      return AngularFirestore;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollection", function () {
      return AngularFirestoreCollection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollectionGroup", function () {
      return AngularFirestoreCollectionGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFirestoreDocument", function () {
      return AngularFirestoreDocument;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFirestoreModule", function () {
      return AngularFirestoreModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ENABLE_PERSISTENCE", function () {
      return ENABLE_PERSISTENCE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PERSISTENCE_SETTINGS", function () {
      return PERSISTENCE_SETTINGS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SETTINGS", function () {
      return SETTINGS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "associateQuery", function () {
      return associateQuery;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "combineChange", function () {
      return combineChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "combineChanges", function () {
      return combineChanges;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "docChanges", function () {
      return docChanges;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromCollectionRef", function () {
      return fromCollectionRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromDocRef", function () {
      return fromDocRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromRef", function () {
      return fromRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sortedChanges", function () {
      return sortedChanges;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateEventsArray", function () {
      return validateEventsArray;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/index.cjs.js");
    /* harmony import */


    var _firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @firebase/firestore */
    "./node_modules/@firebase/firestore/dist/index.cjs.js");
    /* harmony import */


    var _firebase_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T, R
     * @param {?} ref
     * @param {?=} scheduler
     * @return {?}
     */


    function _fromRef(ref) {
      var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : rxjs__WEBPACK_IMPORTED_MODULE_1__["asyncScheduler"];
      return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](
      /**
      * @param {?} subscriber
      * @return {?}
      */
      function (subscriber) {
        /** @type {?} */
        var unsubscribe;

        if (scheduler != null) {
          scheduler.schedule(
          /**
          * @return {?}
          */
          function () {
            unsubscribe = ref.onSnapshot(subscriber);
          });
        } else {
          unsubscribe = ref.onSnapshot(subscriber);
        }

        return (
          /**
          * @return {?}
          */
          function () {
            if (unsubscribe != null) {
              unsubscribe();
            }
          }
        );
      });
    }
    /**
     * @template R
     * @param {?} ref
     * @param {?=} scheduler
     * @return {?}
     */


    function fromRef(ref, scheduler) {
      return _fromRef(ref, scheduler);
    }
    /**
     * @template T
     * @param {?} ref
     * @param {?=} scheduler
     * @return {?}
     */


    function fromDocRef(ref, scheduler) {
      return fromRef(ref, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
      /**
      * @param {?} payload
      * @return {?}
      */
      function (payload) {
        return {
          payload: payload,
          type: 'value'
        };
      }));
    }
    /**
     * @template T
     * @param {?} ref
     * @param {?=} scheduler
     * @return {?}
     */


    function fromCollectionRef(ref, scheduler) {
      return fromRef(ref, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
      /**
      * @param {?} payload
      * @return {?}
      */
      function (payload) {
        return {
          payload: payload,
          type: 'query'
        };
      }));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Return a stream of document changes on a query. These results are not in sort order but in
     * order of occurence.
     * @template T
     * @param {?} query
     * @param {?=} scheduler
     * @return {?}
     */


    function docChanges(query, scheduler) {
      return fromCollectionRef(query, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
      /**
      * @param {?} action
      * @return {?}
      */
      function (action) {
        return action.payload.docChanges().map(
        /**
        * @param {?} change
        * @return {?}
        */
        function (change) {
          return (
            /** @type {?} */
            {
              type: change.type,
              payload: change
            }
          );
        });
      }));
    }
    /**
     * Return a stream of document changes on a query. These results are in sort order.
     * @template T
     * @param {?} query
     * @param {?} events
     * @param {?=} scheduler
     * @return {?}
     */


    function sortedChanges(query, events, scheduler) {
      return fromCollectionRef(query, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
      /**
      * @param {?} changes
      * @return {?}
      */
      function (changes) {
        return changes.payload.docChanges();
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(
      /**
      * @param {?} current
      * @param {?} changes
      * @return {?}
      */
      function (current, changes) {
        return combineChanges(current, changes, events);
      }, []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
      /**
      * @param {?} changes
      * @return {?}
      */
      function (changes) {
        return changes.map(
        /**
        * @param {?} c
        * @return {?}
        */
        function (c) {
          return (
            /** @type {?} */
            {
              type: c.type,
              payload: c
            }
          );
        });
      }));
    }
    /**
     * Combines the total result set from the current set of changes from an incoming set
     * of changes.
     * @template T
     * @param {?} current
     * @param {?} changes
     * @param {?} events
     * @return {?}
     */


    function combineChanges(current, changes, events) {
      changes.forEach(
      /**
      * @param {?} change
      * @return {?}
      */
      function (change) {
        // skip unwanted change types
        if (events.indexOf(change.type) > -1) {
          current = combineChange(current, change);
        }
      });
      return current;
    }
    /**
     * Creates a new sorted array from a new change.
     * @template T
     * @param {?} combined
     * @param {?} change
     * @return {?}
     */


    function combineChange(combined, change) {
      switch (change.type) {
        case 'added':
          if (combined[change.newIndex] && combined[change.newIndex].doc.ref.isEqual(change.doc.ref)) {// Not sure why the duplicates are getting fired
          } else {
            combined.splice(change.newIndex, 0, change);
          }

          break;

        case 'modified':
          if (combined[change.oldIndex] == null || combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
            // When an item changes position we first remove it
            // and then add it's new position
            if (change.oldIndex !== change.newIndex) {
              combined.splice(change.oldIndex, 1);
              combined.splice(change.newIndex, 0, change);
            } else {
              combined.splice(change.newIndex, 1, change);
            }
          }

          break;

        case 'removed':
          if (combined[change.oldIndex] && combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
            combined.splice(change.oldIndex, 1);
          }

          break;
      }

      return combined;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?=} events
     * @return {?}
     */


    function validateEventsArray(events) {
      if (!events || events.length === 0) {
        events = ['added', 'removed', 'modified'];
      }

      return events;
    }
    /**
     * AngularFirestoreCollection service
     *
     * This class creates a reference to a Firestore Collection. A reference and a query are provided in
     * in the constructor. The query can be the unqueried reference if no query is desired.The class
     * is generic which gives you type safety for data update methods and data streaming.
     *
     * This class uses Symbol.observable to transform into Observable using Observable.from().
     *
     * This class is rarely used directly and should be created from the AngularFirestore service.
     *
     * Example:
     *
     * const collectionRef = firebase.firestore.collection('stocks');
     * const query = collectionRef.where('price', '>', '0.01');
     * const fakeStock = new AngularFirestoreCollection<Stock>(collectionRef, query);
     *
     * // NOTE!: the updates are performed on the reference not the query
     * await fakeStock.add({ name: 'FAKE', price: 0.01 });
     *
     * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
     * fakeStock.valueChanges().subscribe(value => console.log(value));
     * @template T
     */


    var AngularFirestoreCollection = /*#__PURE__*/function () {
      /**
       * The constructor takes in a CollectionReference and Query to provide wrapper methods
       * for data operations and data streaming.
       *
       * Note: Data operation methods are done on the reference not the query. This means
       * when you update data it is not updating data to the window of your query unless
       * the data fits the criteria of the query. See the AssociatedRefence type for details
       * on this implication.
       * @param {?} ref
       * @param {?} query
       * @param {?} afs
       */
      function AngularFirestoreCollection(ref, query, afs) {
        _classCallCheck(this, AngularFirestoreCollection);

        this.ref = ref;
        this.query = query;
        this.afs = afs;
      }
      /**
       * Listen to the latest change in the stream. This method returns changes
       * as they occur and they are not sorted by query order. This allows you to construct
       * your own data structure.
       * @param {?=} events
       * @return {?}
       */


      _createClass(AngularFirestoreCollection, [{
        key: "stateChanges",
        value: function stateChanges(events) {
          if (!events || events.length === 0) {
            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
          }

          return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @param {?} actions
          * @return {?}
          */
          function (actions) {
            return actions.filter(
            /**
            * @param {?} change
            * @return {?}
            */
            function (change) {
              return events.indexOf(change.type) > -1;
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} changes
          * @return {?}
          */
          function (changes) {
            return changes.length > 0;
          }), this.afs.keepUnstableUntilFirst);
        }
        /**
         * Create a stream of changes as they occur it time. This method is similar to stateChanges()
         * but it collects each event in an array over time.
         * @param {?=} events
         * @return {?}
         */

      }, {
        key: "auditTrail",
        value: function auditTrail(events) {
          return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(
          /**
          * @param {?} current
          * @param {?} action
          * @return {?}
          */
          function (current, action) {
            return [].concat(_toConsumableArray(current), _toConsumableArray(action));
          }, []));
        }
        /**
         * Create a stream of synchronized changes. This method keeps the local array in sorted
         * query order.
         * @param {?=} events
         * @return {?}
         */

      }, {
        key: "snapshotChanges",
        value: function snapshotChanges(events) {
          /** @type {?} */
          var validatedEvents = validateEventsArray(events);
          /** @type {?} */

          var scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
          return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
        }
        /**
         * @template K
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "valueChanges",
        value: function valueChanges() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return fromCollectionRef(this.query, this.afs.schedulers.outsideAngular).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @param {?} actions
          * @return {?}
          */
          function (actions) {
            return actions.payload.docs.map(
            /**
            * @param {?} a
            * @return {?}
            */
            function (a) {
              if (options.idField) {
                return (
                  /** @type {?} */
                  Object.assign(Object.assign({},
                  /** @type {?} */
                  a.data()), _defineProperty({}, options.idField, a.id))
                );
              } else {
                return a.data();
              }
            });
          }), this.afs.keepUnstableUntilFirst);
        }
        /**
         * Retrieve the results of the query once.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "get",
        value: function get(options) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
        }
        /**
         * Add data to a collection reference.
         *
         * Note: Data operation methods are done on the reference not the query. This means
         * when you update data it is not updating data to the window of your query unless
         * the data fits the criteria of the query.
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "add",
        value: function add(data) {
          return this.ref.add(data);
        }
        /**
         * Create a reference to a single document in a collection.
         * @template T
         * @param {?=} path
         * @return {?}
         */

      }, {
        key: "doc",
        value: function doc(path) {
          return new AngularFirestoreDocument(this.ref.doc(path), this.afs);
        }
      }]);

      return AngularFirestoreCollection;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * AngularFirestoreDocument service
     *
     * This class creates a reference to a Firestore Document. A reference is provided in
     * in the constructor. The class is generic which gives you type safety for data update
     * methods and data streaming.
     *
     * This class uses Symbol.observable to transform into Observable using Observable.from().
     *
     * This class is rarely used directly and should be created from the AngularFirestore service.
     *
     * Example:
     *
     * const fakeStock = new AngularFirestoreDocument<Stock>(doc('stocks/FAKE'));
     * await fakeStock.set({ name: 'FAKE', price: 0.01 });
     * fakeStock.valueChanges().map(snap => {
     *   if(snap.exists) return snap.data();
     *   return null;
     * }).subscribe(value => console.log(value));
     * // OR! Transform using Observable.from() and the data is unwrapped for you
     * Observable.from(fakeStock).subscribe(value => console.log(value));
     * @template T
     */


    var AngularFirestoreDocument = /*#__PURE__*/function () {
      /**
       * The contstuctor takes in a DocumentReference to provide wrapper methods
       * for data operations, data streaming, and Symbol.observable.
       * @param {?} ref
       * @param {?} afs
       */
      function AngularFirestoreDocument(ref, afs) {
        _classCallCheck(this, AngularFirestoreDocument);

        this.ref = ref;
        this.afs = afs;
      }
      /**
       * Create or overwrite a single document.
       * @param {?} data
       * @param {?=} options
       * @return {?}
       */


      _createClass(AngularFirestoreDocument, [{
        key: "set",
        value: function set(data, options) {
          return this.ref.set(data, options);
        }
        /**
         * Update some fields of a document without overwriting the entire document.
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "update",
        value: function update(data) {
          return this.ref.update(data);
        }
        /**
         * Delete a document.
         * @return {?}
         */

      }, {
        key: "delete",
        value: function _delete() {
          return this.ref["delete"]();
        }
        /**
         * Create a reference to a sub-collection given a path and an optional query
         * function.
         * @template R
         * @param {?} path
         * @param {?=} queryFn
         * @return {?}
         */

      }, {
        key: "collection",
        value: function collection(path, queryFn) {
          /** @type {?} */
          var collectionRef = this.ref.collection(path);

          var _associateQuery = associateQuery(collectionRef, queryFn),
              ref = _associateQuery.ref,
              query = _associateQuery.query;

          return new AngularFirestoreCollection(ref, query, this.afs);
        }
        /**
         * Listen to snapshot updates from the document.
         * @return {?}
         */

      }, {
        key: "snapshotChanges",
        value: function snapshotChanges() {
          /** @type {?} */
          var scheduledFromDocRef$ = fromDocRef(this.ref, this.afs.schedulers.outsideAngular);
          return scheduledFromDocRef$.pipe(this.afs.keepUnstableUntilFirst);
        }
        /**
         * Listen to unwrapped snapshot updates from the document.
         * @return {?}
         */

      }, {
        key: "valueChanges",
        value: function valueChanges() {
          return this.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @param {?} action
          * @return {?}
          */
          function (action) {
            return action.payload.data();
          }));
        }
        /**
         * Retrieve the document once.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "get",
        value: function get(options) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.ref.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
        }
      }]);

      return AngularFirestoreDocument;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * AngularFirestoreCollectionGroup service
     *
     * This class holds a reference to a Firestore Collection Group Query.
     *
     * This class uses Symbol.observable to transform into Observable using Observable.from().
     *
     * This class is rarely used directly and should be created from the AngularFirestore service.
     *
     * Example:
     *
     * const collectionGroup = firebase.firestore.collectionGroup('stocks');
     * const query = collectionRef.where('price', '>', '0.01');
     * const fakeStock = new AngularFirestoreCollectionGroup<Stock>(query, afs);
     *
     * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
     * fakeStock.valueChanges().subscribe(value => console.log(value));
     * @template T
     */


    var AngularFirestoreCollectionGroup = /*#__PURE__*/function () {
      /**
       * The constructor takes in a CollectionGroupQuery to provide wrapper methods
       * for data operations and data streaming.
       * @param {?} query
       * @param {?} afs
       */
      function AngularFirestoreCollectionGroup(query, afs) {
        _classCallCheck(this, AngularFirestoreCollectionGroup);

        this.query = query;
        this.afs = afs;
      }
      /**
       * Listen to the latest change in the stream. This method returns changes
       * as they occur and they are not sorted by query order. This allows you to construct
       * your own data structure.
       * @param {?=} events
       * @return {?}
       */


      _createClass(AngularFirestoreCollectionGroup, [{
        key: "stateChanges",
        value: function stateChanges(events) {
          if (!events || events.length === 0) {
            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
          }

          return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @param {?} actions
          * @return {?}
          */
          function (actions) {
            return actions.filter(
            /**
            * @param {?} change
            * @return {?}
            */
            function (change) {
              return events.indexOf(change.type) > -1;
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} changes
          * @return {?}
          */
          function (changes) {
            return changes.length > 0;
          }), this.afs.keepUnstableUntilFirst);
        }
        /**
         * Create a stream of changes as they occur it time. This method is similar to stateChanges()
         * but it collects each event in an array over time.
         * @param {?=} events
         * @return {?}
         */

      }, {
        key: "auditTrail",
        value: function auditTrail(events) {
          return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(
          /**
          * @param {?} current
          * @param {?} action
          * @return {?}
          */
          function (current, action) {
            return [].concat(_toConsumableArray(current), _toConsumableArray(action));
          }, []));
        }
        /**
         * Create a stream of synchronized changes. This method keeps the local array in sorted
         * query order.
         * @param {?=} events
         * @return {?}
         */

      }, {
        key: "snapshotChanges",
        value: function snapshotChanges(events) {
          /** @type {?} */
          var validatedEvents = validateEventsArray(events);
          /** @type {?} */

          var scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
          return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
        }
        /**
         * Listen to all documents in the collection and its possible query as an Observable.
         * @return {?}
         */

      }, {
        key: "valueChanges",
        value: function valueChanges() {
          /** @type {?} */
          var fromCollectionRefScheduled$ = fromCollectionRef(this.query, this.afs.schedulers.outsideAngular);
          return fromCollectionRefScheduled$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @param {?} actions
          * @return {?}
          */
          function (actions) {
            return actions.payload.docs.map(
            /**
            * @param {?} a
            * @return {?}
            */
            function (a) {
              return a.data();
            });
          }), this.afs.keepUnstableUntilFirst);
        }
        /**
         * Retrieve the results of the query once.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "get",
        value: function get(options) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
        }
      }]);

      return AngularFirestoreCollectionGroup;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The value of this token determines whether or not the firestore will have persistance enabled
     * @type {?}
     */


    var ENABLE_PERSISTENCE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.enableFirestorePersistence');
    /** @type {?} */

    var PERSISTENCE_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.persistenceSettings');
    /** @type {?} */

    var SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.settings');
    /**
     * A utility methods for associating a collection reference with
     * a query.
     *
     * @param {?} collectionRef - A collection reference to query
     * @param {?=} queryFn - The callback to create a query
     *
     * Example:
     * const { query, ref } = associateQuery(docRef.collection('items'), ref => {
     *  return ref.where('age', '<', 200);
     * });
     * @return {?}
     */

    function associateQuery(collectionRef) {
      var queryFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :
      /**
      * @param {?} ref
      * @return {?}
      */
      function (ref) {
        return ref;
      };

      /** @type {?} */
      var query = queryFn(collectionRef);
      /** @type {?} */

      var ref = collectionRef;
      return {
        query: query,
        ref: ref
      };
    }
    /**
     * AngularFirestore Service
     *
     * This service is the main entry point for this feature module. It provides
     * an API for creating Collection and Reference services. These services can
     * then be used to do data updates and observable streams of the data.
     *
     * Example:
     *
     * import { Component } from '\@angular/core';
     * import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '\@angular/fire/firestore';
     * import { Observable } from 'rxjs/Observable';
     * import { from } from 'rxjs/observable';
     *
     * \@Component({
     *   selector: 'app-my-component',
     *   template: `
     *    <h2>Items for {{ (profile | async)?.name }}
     *    <ul>
     *       <li *ngFor="let item of items | async">{{ item.name }}</li>
     *    </ul>
     *    <div class="control-input">
     *       <input type="text" #itemname />
     *       <button (click)="addItem(itemname.value)">Add Item</button>
     *    </div>
     *   `
     * })
     * export class MyComponent implements OnInit {
     *
     *   // services for data operations and data streaming
     *   private readonly itemsRef: AngularFirestoreCollection<Item>;
     *   private readonly profileRef: AngularFirestoreDocument<Profile>;
     *
     *   // observables for template
     *   items: Observable<Item[]>;
     *   profile: Observable<Profile>;
     *
     *   // inject main service
     *   constructor(private readonly afs: AngularFirestore) {}
     *
     *   ngOnInit() {
     *     this.itemsRef = afs.collection('items', ref => ref.where('user', '==', 'davideast').limit(10));
     *     this.items = this.itemsRef.valueChanges().map(snap => snap.docs.map(data => doc.data()));
     *     // this.items = from(this.itemsRef); // you can also do this with no mapping
     *
     *     this.profileRef = afs.doc('users/davideast');
     *     this.profile = this.profileRef.valueChanges();
     *   }
     *
     *   addItem(name: string) {
     *     const user = 'davideast';
     *     this.itemsRef.add({ name, user });
     *   }
     * }
     */


    var AngularFirestore = /*#__PURE__*/function () {
      /**
       * Each Feature of AngularFire has a FirebaseApp injected. This way we
       * don't rely on the main Firebase App instance and we can create named
       * apps and use multiple apps.
       * @param {?} options
       * @param {?} nameOrConfig
       * @param {?} shouldEnablePersistence
       * @param {?} settings
       * @param {?} platformId
       * @param {?} zone
       * @param {?} persistenceSettings
       */
      function AngularFirestore(options, nameOrConfig, shouldEnablePersistence, settings, // tslint:disable-next-line:ban-types
      platformId, zone, persistenceSettings) {
        var _this = this;

        _classCallCheck(this, AngularFirestore);

        this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵAngularFireSchedulers"](zone);
        this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵkeepUnstableUntilFirstFactory"])(this.schedulers);
        this.firestore = zone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig); // INVESTIGATE this seems to be required because in the browser build registerFirestore is an Object?
          //             seems like we're fighting ngcc. In the server firestore() isn't available, so I have to register
          //             in the browser registerFirestore is not a function... maybe this is an underlying firebase-js-sdk issue

          if (_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["registerFirestore"]) {
            Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["registerFirestore"])(_firebase_app__WEBPACK_IMPORTED_MODULE_5___default.a);
          }
          /** @type {?} */


          var firestore = app.firestore();

          if (settings) {
            firestore.settings(settings);
          }

          return firestore;
        });

        if (shouldEnablePersistence && !Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(platformId)) {
          // We need to try/catch here because not all enablePersistence() failures are caught
          // https://github.com/firebase/firebase-js-sdk/issues/608

          /** @type {?} */
          var enablePersistence =
          /**
          * @return {?}
          */
          function enablePersistence() {
            try {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_this.firestore.enablePersistence(persistenceSettings || undefined).then(
              /**
              * @return {?}
              */
              function () {
                return true;
              },
              /**
              * @return {?}
              */
              function () {
                return false;
              }));
            } catch (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
            }
          };

          this.persistenceEnabled$ = zone.runOutsideAngular(enablePersistence);
        } else {
          this.persistenceEnabled$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }
      }
      /**
       * @template T
       * @param {?} pathOrRef
       * @param {?=} queryFn
       * @return {?}
       */


      _createClass(AngularFirestore, [{
        key: "collection",
        value: function collection(pathOrRef, queryFn) {
          /** @type {?} */
          var collectionRef;

          if (typeof pathOrRef === 'string') {
            collectionRef = this.firestore.collection(pathOrRef);
          } else {
            collectionRef = pathOrRef;
          }

          var _associateQuery2 = associateQuery(collectionRef, queryFn),
              ref = _associateQuery2.ref,
              query = _associateQuery2.query;
          /** @type {?} */


          var refInZone = this.schedulers.ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return ref;
          });
          return new AngularFirestoreCollection(refInZone, query, this);
        }
        /**
         * Create a reference to a Firestore Collection Group based on a collectionId
         * and an optional query function to narrow the result
         * set.
         * @template T
         * @param {?} collectionId
         * @param {?=} queryGroupFn
         * @return {?}
         */

      }, {
        key: "collectionGroup",
        value: function collectionGroup(collectionId, queryGroupFn) {
          /** @type {?} */
          var queryFn = queryGroupFn ||
          /**
          * @param {?} ref
          * @return {?}
          */
          function (ref) {
            return ref;
          };
          /** @type {?} */


          var collectionGroup = this.firestore.collectionGroup(collectionId);
          return new AngularFirestoreCollectionGroup(queryFn(collectionGroup), this);
        }
        /**
         * @template T
         * @param {?} pathOrRef
         * @return {?}
         */

      }, {
        key: "doc",
        value: function doc(pathOrRef) {
          /** @type {?} */
          var ref;

          if (typeof pathOrRef === 'string') {
            ref = this.firestore.doc(pathOrRef);
          } else {
            ref = pathOrRef;
          }
          /** @type {?} */


          var refInZone = this.schedulers.ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return ref;
          });
          return new AngularFirestoreDocument(refInZone, this);
        }
        /**
         * Returns a generated Firestore Document Id.
         * @return {?}
         */

      }, {
        key: "createId",
        value: function createId() {
          return this.firestore.collection('_').doc().id;
        }
      }]);

      return AngularFirestore;
    }();

    AngularFirestore.ɵfac = function AngularFirestore_Factory(t) {
      return new (t || AngularFirestore)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ENABLE_PERSISTENCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SETTINGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PERSISTENCE_SETTINGS, 8));
    };
    /** @nocollapse */


    AngularFirestore.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [ENABLE_PERSISTENCE]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [SETTINGS]
        }]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [PERSISTENCE_SETTINGS]
        }]
      }];
    };
    /** @nocollapse */


    AngularFirestore.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function AngularFirestore_Factory() {
        return new AngularFirestore(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ENABLE_PERSISTENCE, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(SETTINGS, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PERSISTENCE_SETTINGS, 8));
      },
      token: AngularFirestore,
      providedIn: "any"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFirestore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'any'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [ENABLE_PERSISTENCE]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [SETTINGS]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [PERSISTENCE_SETTINGS]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AngularFirestoreModule = /*#__PURE__*/function () {
      function AngularFirestoreModule() {
        _classCallCheck(this, AngularFirestoreModule);
      }

      _createClass(AngularFirestoreModule, null, [{
        key: "enablePersistence",

        /**
         * Attempt to enable persistent storage, if possible
         * @param {?=} persistenceSettings
         * @return {?}
         */
        value: function enablePersistence(persistenceSettings) {
          return {
            ngModule: AngularFirestoreModule,
            providers: [{
              provide: ENABLE_PERSISTENCE,
              useValue: true
            }, {
              provide: PERSISTENCE_SETTINGS,
              useValue: persistenceSettings
            }]
          };
        }
      }]);

      return AngularFirestoreModule;
    }();

    AngularFirestoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AngularFirestoreModule
    });
    AngularFirestoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AngularFirestoreModule_Factory(t) {
        return new (t || AngularFirestoreModule)();
      },
      providers: [AngularFirestore]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFirestoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          providers: [AngularFirestore]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     * @template T
     */


    function DocumentSnapshotExists() {}

    if (false) {}
    /**
     * @record
     */


    function DocumentSnapshotDoesNotExist() {}

    if (false) {}
    /**
     * @record
     * @template T
     */


    function QueryDocumentSnapshot() {}

    if (false) {}
    /**
     * @record
     * @template T
     */


    function QuerySnapshot() {}

    if (false) {}
    /**
     * @record
     * @template T
     */


    function DocumentChange() {}

    if (false) {}
    /**
     * @record
     * @template T
     */


    function DocumentChangeAction() {}

    if (false) {}
    /**
     * @record
     * @template T
     */


    function Action() {}

    if (false) {}
    /**
     * @record
     * @template T
     */


    function Reference() {}

    if (false) {}
    /**
     * A structure that provides an association between a reference
     * and a query on that reference. Note: Performing operations
     * on the reference can lead to confusing results with complicated
     * queries.
     *
     * Example:
     *
     * const query = ref.where('type', '==', 'Book').
     *                  .where('price', '>' 18.00)
     *                  .where('price', '<' 100.00)
     *                  .where('category', '==', 'Fiction')
     *                  .where('publisher', '==', 'BigPublisher')
     *
     * // This addition would not be a result of the query above
     * ref.add({
     *  type: 'Magazine',
     *  price: 4.99,
     *  category: 'Sports',
     *  publisher: 'SportsPublisher'
     * });
     * @record
     */


    function AssociatedReference() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=angular-fire-firestore.js.map

    /***/

  },

  /***/
  "./node_modules/@firebase/firestore/dist/index.cjs.js":
  /*!************************************************************!*\
    !*** ./node_modules/@firebase/firestore/dist/index.cjs.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFirebaseFirestoreDistIndexCjsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });

    var t,
        e = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"),
        n = (t = __webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/index.cjs.js")) && "object" == typeof t && "default" in t ? t["default"] : t,
        r = __webpack_require__(
    /*! @firebase/logger */
    "./node_modules/@firebase/logger/dist/index.esm.js"),
        i = __webpack_require__(
    /*! @firebase/util */
    "./node_modules/@firebase/util/dist/index.cjs.js"),
        o = __webpack_require__(
    /*! @firebase/webchannel-wrapper */
    "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js"),
        s = __webpack_require__(
    /*! @firebase/component */
    "./node_modules/@firebase/component/dist/index.cjs.js"),
        u = n.SDK_VERSION,
        a = new r.Logger("@firebase/firestore"); // Helper methods are needed because variables can't be exported as read/write


    function c() {
      return a.logLevel;
    }

    function h(t) {
      for (var n = [], i = 1; i < arguments.length; i++) {
        n[i - 1] = arguments[i];
      }

      if (a.logLevel <= r.LogLevel.DEBUG) {
        var o = n.map(l);
        a.debug.apply(a, e.__spreadArrays(["Firestore (" + u + "): " + t], o));
      }
    }

    function f(t) {
      for (var n = [], i = 1; i < arguments.length; i++) {
        n[i - 1] = arguments[i];
      }

      if (a.logLevel <= r.LogLevel.ERROR) {
        var o = n.map(l);
        a.error.apply(a, e.__spreadArrays(["Firestore (" + u + "): " + t], o));
      }
    }
    /**
     * Converts an additional log parameter to a string representation.
     */


    function l(t) {
      if ("string" == typeof t) return t;

      try {
        return e = t, JSON.stringify(e);
      } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
      }

      var e;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Unconditionally fails, throwing an Error with the given message.
     * Messages are stripped in production builds.
     *
     * Returns `never` and can be used in expressions:
     * @example
     * let futureVar = fail('not implemented yet');
     */


    function p(t) {
      void 0 === t && (t = "Unexpected state"); // Log the failure in addition to throw an exception, just in case the
      // exception is swallowed.

      var e = "FIRESTORE (" + u + ") INTERNAL ASSERTION FAILED: " + t; // NOTE: We don't use FirestoreError here because these are internal failures
      // that cannot be handled by the user. (Also it would create a circular
      // dependency between the error and assert modules which doesn't work.)

      throw f(e), new Error(e)
      /**
      * Fails if the given assertion condition is false, throwing an Error with the
      * given message if it did.
      *
      * Messages are stripped in production builds.
      */
      ;
    }

    function d(t, e) {
      t || p();
    }
    /**
     * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
     * instance of `T` before casting.
     */


    function y(t, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
      return t;
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Generates `nBytes` of random bytes.
     *
     * If `nBytes < 0` , an error will be thrown.
     */


    function v(t) {
      // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
      var e = // eslint-disable-next-line @typescript-eslint/no-explicit-any
      "undefined" != typeof self && (self.crypto || self.msCrypto),
          n = new Uint8Array(t);
      if (e) e.getRandomValues(n);else // Falls back to Math.random
        for (var r = 0; r < t; r++) {
          n[r] = Math.floor(256 * Math.random());
        }
      return n;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var g =
    /** @class */
    function () {
      function t() {}

      return t.t = function () {
        for ( // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = "" // The largest byte value that is a multiple of `char.length`.
        ; n.length < 20;) {
          for (var r = v(40), i = 0; i < r.length; ++i) {
            // Only accept values that are [0, maxMultiple), this ensures they can
            // be evenly mapped to indices of `chars` via a modulo operation.
            n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
          }
        }

        return n;
      }, t;
    }();

    function m(t, e) {
      return t < e ? -1 : t > e ? 1 : 0;
    }
    /** Helper to compare arrays using isEqual(). */


    function w(t, e, n) {
      return t.length === e.length && t.every(function (t, r) {
        return n(t, e[r]);
      });
    }
    /**
     * Returns the immediate lexicographically-following string. This is useful to
     * construct an inclusive range for indexeddb iterators.
     */


    function b(t) {
      // Return the input string, with an additional NUL byte appended.
      return t + "\0";
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var _ =
    /**
         * Constructs a DatabaseInfo using the provided host, databaseId and
         * persistenceKey.
         *
         * @param databaseId The database to use.
         * @param persistenceKey A unique identifier for this Firestore's local
         * storage (used in conjunction with the databaseId).
         * @param host The Firestore backend host to connect to.
         * @param ssl Whether to use SSL when connecting.
         * @param forceLongPolling Whether to use the forceLongPolling option
         * when using WebChannel as the network transport.
         */
    function _(t, e, n, r, i) {
      this.s = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i;
    },
        I =
    /** @class */
    function () {
      function t(t, e) {
        this.projectId = t, this.database = e || "(default)";
      }

      return Object.defineProperty(t.prototype, "i", {
        get: function get() {
          return "(default)" === this.database;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.isEqual = function (e) {
        return e instanceof t && e.projectId === this.projectId && e.database === this.database;
      }, t.prototype.o = function (t) {
        return m(this.projectId, t.projectId) || m(this.database, t.database);
      }, t;
    }();
    /** The default database name for a project. */

    /** Represents the database ID a Firestore client is associated with. */

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    function E(t) {
      var e = 0;

      for (var n in t) {
        Object.prototype.hasOwnProperty.call(t, n) && e++;
      }

      return e;
    }

    function N(t, e) {
      for (var n in t) {
        Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
      }
    }

    function T(t) {
      for (var e in t) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
      }

      return !0;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * A map implementation that uses objects as keys. Objects must have an
     * associated equals function and must be immutable. Entries in the map are
     * stored together with the key being produced from the mapKeyFn. This map
     * automatically handles collisions of keys.
     */


    var A =
    /** @class */
    function () {
      function t(t, e) {
        this.h = t, this.u = e,
        /**
             * The inner map for a key -> value pair. Due to the possibility of
             * collisions we keep a list of entries that we do a linear search through
             * to find an actual match. Note that collisions should be rare, so we still
             * expect near constant time lookups in practice.
             */
        this.l = {}
        /** Get a value for this key, or undefined if it does not exist. */
        ;
      }

      return t.prototype.get = function (t) {
        var e = this.h(t),
            n = this.l[e];
        if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
          var o = i[r],
              s = o[0],
              u = o[1];
          if (this.u(s, t)) return u;
        }
      }, t.prototype.has = function (t) {
        return void 0 !== this.get(t);
      },
      /** Put this key and value in the map. */
      t.prototype.set = function (t, e) {
        var n = this.h(t),
            r = this.l[n];

        if (void 0 !== r) {
          for (var i = 0; i < r.length; i++) {
            if (this.u(r[i][0], t)) return void (r[i] = [t, e]);
          }

          r.push([t, e]);
        } else this.l[n] = [[t, e]];
      },
      /**
       * Remove this key from the map. Returns a boolean if anything was deleted.
       */
      t.prototype["delete"] = function (t) {
        var e = this.h(t),
            n = this.l[e];
        if (void 0 === n) return !1;

        for (var r = 0; r < n.length; r++) {
          if (this.u(n[r][0], t)) return 1 === n.length ? delete this.l[e] : n.splice(r, 1), !0;
        }

        return !1;
      }, t.prototype.forEach = function (t) {
        N(this.l, function (e, n) {
          for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r],
                s = o[0],
                u = o[1];
            t(s, u);
          }
        });
      }, t.prototype._ = function () {
        return T(this.l);
      }, t;
    }(),
        x = {
      // Causes are copied from:
      // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h

      /** Not an error; returned on success. */
      OK: "ok",

      /** The operation was cancelled (typically by the caller). */
      CANCELLED: "cancelled",

      /** Unknown error or an error from a different error domain. */
      UNKNOWN: "unknown",

      /**
       * Client specified an invalid argument. Note that this differs from
       * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
       * problematic regardless of the state of the system (e.g., a malformed file
       * name).
       */
      INVALID_ARGUMENT: "invalid-argument",

      /**
       * Deadline expired before operation could complete. For operations that
       * change the state of the system, this error may be returned even if the
       * operation has completed successfully. For example, a successful response
       * from a server could have been delayed long enough for the deadline to
       * expire.
       */
      DEADLINE_EXCEEDED: "deadline-exceeded",

      /** Some requested entity (e.g., file or directory) was not found. */
      NOT_FOUND: "not-found",

      /**
       * Some entity that we attempted to create (e.g., file or directory) already
       * exists.
       */
      ALREADY_EXISTS: "already-exists",

      /**
       * The caller does not have permission to execute the specified operation.
       * PERMISSION_DENIED must not be used for rejections caused by exhausting
       * some resource (use RESOURCE_EXHAUSTED instead for those errors).
       * PERMISSION_DENIED must not be used if the caller can not be identified
       * (use UNAUTHENTICATED instead for those errors).
       */
      PERMISSION_DENIED: "permission-denied",

      /**
       * The request does not have valid authentication credentials for the
       * operation.
       */
      UNAUTHENTICATED: "unauthenticated",

      /**
       * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
       * entire file system is out of space.
       */
      RESOURCE_EXHAUSTED: "resource-exhausted",

      /**
       * Operation was rejected because the system is not in a state required for
       * the operation's execution. For example, directory to be deleted may be
       * non-empty, an rmdir operation is applied to a non-directory, etc.
       *
       * A litmus test that may help a service implementor in deciding
       * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
       *  (a) Use UNAVAILABLE if the client can retry just the failing call.
       *  (b) Use ABORTED if the client should retry at a higher-level
       *      (e.g., restarting a read-modify-write sequence).
       *  (c) Use FAILED_PRECONDITION if the client should not retry until
       *      the system state has been explicitly fixed. E.g., if an "rmdir"
       *      fails because the directory is non-empty, FAILED_PRECONDITION
       *      should be returned since the client should not retry unless
       *      they have first fixed up the directory by deleting files from it.
       *  (d) Use FAILED_PRECONDITION if the client performs conditional
       *      REST Get/Update/Delete on a resource and the resource on the
       *      server does not match the condition. E.g., conflicting
       *      read-modify-write on the same resource.
       */
      FAILED_PRECONDITION: "failed-precondition",

      /**
       * The operation was aborted, typically due to a concurrency issue like
       * sequencer check failures, transaction aborts, etc.
       *
       * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
       * and UNAVAILABLE.
       */
      ABORTED: "aborted",

      /**
       * Operation was attempted past the valid range. E.g., seeking or reading
       * past end of file.
       *
       * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
       * if the system state changes. For example, a 32-bit file system will
       * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
       * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
       * an offset past the current file size.
       *
       * There is a fair bit of overlap between FAILED_PRECONDITION and
       * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
       * when it applies so that callers who are iterating through a space can
       * easily look for an OUT_OF_RANGE error to detect when they are done.
       */
      OUT_OF_RANGE: "out-of-range",

      /** Operation is not implemented or not supported/enabled in this service. */
      UNIMPLEMENTED: "unimplemented",

      /**
       * Internal errors. Means some invariants expected by underlying System has
       * been broken. If you see one of these errors, Something is very broken.
       */
      INTERNAL: "internal",

      /**
       * The service is currently unavailable. This is a most likely a transient
       * condition and may be corrected by retrying with a backoff.
       *
       * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
       * and UNAVAILABLE.
       */
      UNAVAILABLE: "unavailable",

      /** Unrecoverable data loss or corruption. */
      DATA_LOSS: "data-loss"
    },
        D =
    /** @class */
    function (t) {
      function n(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).code = e, r.message = n, r.name = "FirebaseError", // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        r.toString = function () {
          return r.name + ": [code=" + r.code + "]: " + r.message;
        }, r;
      }

      return e.__extends(n, t), n;
    }(Error),
        S =
    /** @class */
    function () {
      function t(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new D(x.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new D(x.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new D(x.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t); // This will break in the year 10,000.

        if (t >= 253402300800) throw new D(x.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
      }

      return t.now = function () {
        return t.fromMillis(Date.now());
      }, t.fromDate = function (e) {
        return t.fromMillis(e.getTime());
      }, t.fromMillis = function (e) {
        var n = Math.floor(e / 1e3);
        return new t(n, 1e6 * (e - 1e3 * n));
      }, t.prototype.toDate = function () {
        return new Date(this.toMillis());
      }, t.prototype.toMillis = function () {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
      }, t.prototype.T = function (t) {
        return this.seconds === t.seconds ? m(this.nanoseconds, t.nanoseconds) : m(this.seconds, t.seconds);
      }, t.prototype.isEqual = function (t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
      }, t.prototype.toString = function () {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
      }, t.prototype.valueOf = function () {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var t = this.seconds - -62135596800; // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.

        return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
      }, t;
    }(),
        P =
    /** @class */
    function () {
      function t(t) {
        this.timestamp = t;
      }

      return t.I = function (e) {
        return new t(e);
      }, t.min = function () {
        return new t(new S(0, 0));
      }, t.prototype.o = function (t) {
        return this.timestamp.T(t.timestamp);
      }, t.prototype.isEqual = function (t) {
        return this.timestamp.isEqual(t.timestamp);
      },
      /** Returns a number representation of the version for use in spec tests. */
      t.prototype.m = function () {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
      }, t.prototype.toString = function () {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
      }, t.prototype.A = function () {
        return this.timestamp;
      }, t;
    }(),
        k =
    /** @class */
    function () {
      function t(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && p(), void 0 === n ? n = t.length - e : n > t.length - e && p(), this.segments = t, this.offset = e, this.R = n;
      }

      return Object.defineProperty(t.prototype, "length", {
        get: function get() {
          return this.R;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.isEqual = function (e) {
        return 0 === t.P(this, e);
      }, t.prototype.child = function (e) {
        var n = this.segments.slice(this.offset, this.limit());
        return e instanceof t ? e.forEach(function (t) {
          n.push(t);
        }) : n.push(e), this.V(n);
      },
      /** The index of one past the last segment of the path. */
      t.prototype.limit = function () {
        return this.offset + this.length;
      }, t.prototype.g = function (t) {
        return t = void 0 === t ? 1 : t, this.V(this.segments, this.offset + t, this.length - t);
      }, t.prototype.p = function () {
        return this.V(this.segments, this.offset, this.length - 1);
      }, t.prototype.v = function () {
        return this.segments[this.offset];
      }, t.prototype.S = function () {
        return this.get(this.length - 1);
      }, t.prototype.get = function (t) {
        return this.segments[this.offset + t];
      }, t.prototype._ = function () {
        return 0 === this.length;
      }, t.prototype.D = function (t) {
        if (t.length < this.length) return !1;

        for (var e = 0; e < this.length; e++) {
          if (this.get(e) !== t.get(e)) return !1;
        }

        return !0;
      }, t.prototype.C = function (t) {
        if (this.length + 1 !== t.length) return !1;

        for (var e = 0; e < this.length; e++) {
          if (this.get(e) !== t.get(e)) return !1;
        }

        return !0;
      }, t.prototype.forEach = function (t) {
        for (var e = this.offset, n = this.limit(); e < n; e++) {
          t(this.segments[e]);
        }
      }, t.prototype.F = function () {
        return this.segments.slice(this.offset, this.limit());
      }, t.P = function (t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
          var i = t.get(r),
              o = e.get(r);
          if (i < o) return -1;
          if (i > o) return 1;
        }

        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
      }, t;
    }(),
        R =
    /** @class */
    function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return e.__extends(n, t), n.prototype.V = function (t, e, r) {
        return new n(t, e, r);
      }, n.prototype.N = function () {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.F().join("/");
      }, n.prototype.toString = function () {
        return this.N();
      },
      /**
       * Creates a resource path from the given slash-delimited string.
       */
      n.$ = function (t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        if (t.indexOf("//") >= 0) throw new D(x.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them."); // We may still have an empty segment at the beginning or end if they had a
        // leading or trailing slash (which we allow).

        return new n(t.split("/").filter(function (t) {
          return t.length > 0;
        }));
      }, n.k = function () {
        return new n([]);
      }, n;
    }(k),
        L = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
        O =
    /** @class */
    function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return e.__extends(n, t), n.prototype.V = function (t, e, r) {
        return new n(t, e, r);
      },
      /**
       * Returns true if the string could be used as a segment in a field path
       * without escaping.
       */
      n.M = function (t) {
        return L.test(t);
      }, n.prototype.N = function () {
        return this.F().map(function (t) {
          return t = t.replace("\\", "\\\\").replace("`", "\\`"), n.M(t) || (t = "`" + t + "`"), t;
        }).join(".");
      }, n.prototype.toString = function () {
        return this.N();
      },
      /**
       * Returns true if this field references the key of a document.
       */
      n.prototype.O = function () {
        return 1 === this.length && "__name__" === this.get(0);
      },
      /**
       * The field designating the key of a document.
       */
      n.L = function () {
        return new n(["__name__"]);
      },
      /**
       * Parses a field string from the given server-formatted string.
       *
       * - Splitting the empty string is not allowed (for now at least).
       * - Empty segments within the string (e.g. if there are two consecutive
       *   separators) are not allowed.
       *
       * TODO(b/37244157): we should make this more strict. Right now, it allows
       * non-identifier path components, even if they aren't escaped.
       */
      n.B = function (t) {
        for (var e = [], r = "", i = 0, o = function o() {
          if (0 === r.length) throw new D(x.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
          e.push(r), r = "";
        }, s = !1; i < t.length;) {
          var u = t[i];

          if ("\\" === u) {
            if (i + 1 === t.length) throw new D(x.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
            var a = t[i + 1];
            if ("\\" !== a && "." !== a && "`" !== a) throw new D(x.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
            r += a, i += 2;
          } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++);
        }

        if (o(), s) throw new D(x.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new n(e);
      }, n.k = function () {
        return new n([]);
      }, n;
    }(k),
        V =
    /** @class */
    function () {
      function t(t) {
        this.path = t;
      }

      return t.q = function (e) {
        return new t(R.$(e).g(5));
      },
      /** Returns true if the document is in the specified collectionId. */
      t.prototype.U = function (t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
      }, t.prototype.isEqual = function (t) {
        return null !== t && 0 === R.P(this.path, t.path);
      }, t.prototype.toString = function () {
        return this.path.toString();
      }, t.P = function (t, e) {
        return R.P(t.path, e.path);
      }, t.W = function (t) {
        return t.length % 2 == 0;
      },
      /**
       * Creates and returns a new document key with the given segments.
       *
       * @param segments The segments of the path to the document
       * @return A new instance of DocumentKey
       */
      t.j = function (e) {
        return new t(new R(e.slice()));
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Returns whether a variable is either undefined or null.
     */


    function U(t) {
      return null == t;
    }
    /** Returns whether the value represents -0. */


    function C(t) {
      // Detect if the value is -0.0. Based on polyfill from
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
      return -0 === t && 1 / t == -1 / 0;
    }
    /**
     * Returns whether a value is an integer and in the safe integer range
     * @param value The value to test for being an integer and in the safe range
     */


    function F(t) {
      return "number" == typeof t && Number.isInteger(t) && !C(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // Visible for testing


    var j = function j(t, e, n, r, i, o, s) {
      void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = o, this.endAt = s, this.K = null;
    };
    /**
     * Initializes a Target with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     *
     * NOTE: you should always construct `Target` from `Query.toTarget` instead of
     * using this factory method, because `Query` provides an implicit `orderBy`
     * property.
     */


    function M(t, e, n, r, i, o, s) {
      return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), new j(t, e, n, r, i, o, s);
    }

    function q(t) {
      var e = y(t);

      if (null === e.K) {
        var n = e.path.N();
        null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map(function (t) {
          return function (t) {
            // TODO(b/29183165): Technically, this won't be unique if two values have
            // the same description, such as the int 3 and the string "3". So we should
            // add the types in here somehow, too.
            return t.field.N() + t.op.toString() + Rt(t.value);
          }(t);
        }).join(","), n += "|ob:", n += e.orderBy.map(function (t) {
          return (e = t).field.N() + e.dir;
          var e;
        }).join(","), U(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", n += gn(e.startAt)), e.endAt && (n += "|ub:", n += gn(e.endAt)), e.K = n;
      }

      return e.K;
    }

    function B(t, e) {
      if (t.limit !== e.limit) return !1;
      if (t.orderBy.length !== e.orderBy.length) return !1;

      for (var n = 0; n < t.orderBy.length; n++) {
        if (!In(t.orderBy[n], e.orderBy[n])) return !1;
      }

      if (t.filters.length !== e.filters.length) return !1;

      for (var r = 0; r < t.filters.length; r++) {
        if (i = t.filters[r], o = e.filters[r], !(i instanceof hn && o instanceof hn && i.op === o.op && i.field.isEqual(o.field) && Dt(i.value, o.value))) return !1;
      }

      var i, o;
      return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!wn(t.startAt, e.startAt) && wn(t.endAt, e.endAt);
    }

    function G(t) {
      return V.W(t.path) && null === t.collectionGroup && 0 === t.filters.length;
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** Converts a Base64 encoded string to a binary string. */

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Immutable class that represents a "proto" byte string.
     *
     * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
     * sent on the wire. This class abstracts away this differentiation by holding
     * the proto byte string in a common class that must be converted into a string
     * before being sent as a proto.
     */


    var z =
    /** @class */
    function () {
      function t(t) {
        this.G = t;
      }

      return t.fromBase64String = function (e) {
        return new t(atob(e));
      }, t.fromUint8Array = function (e) {
        return new t(
        /**
        * Helper function to convert an Uint8array to a binary string.
        */
        function (t) {
          for (var e = "", n = 0; n < t.length; ++n) {
            e += String.fromCharCode(t[n]);
          }

          return e;
        }(e));
      }, t.prototype.toBase64 = function () {
        return t = this.G, btoa(t);
        /** Converts a binary string to a Base64 encoded string. */

        var t;
        /** True if and only if the Base64 conversion functions are available. */
      }, t.prototype.toUint8Array = function () {
        return function (t) {
          for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) {
            e[n] = t.charCodeAt(n);
          }

          return e;
        }(this.G);
      }, t.prototype.H = function () {
        return 2 * this.G.length;
      }, t.prototype.o = function (t) {
        return m(this.G, t.G);
      }, t.prototype.isEqual = function (t) {
        return this.G === t.G;
      }, t;
    }();

    z.Y = new z("");

    var W,
        Q,
        Y =
    /** @class */
    function () {
      function t(
      /** The target being listened to. */
      t,
      /**
       * The target ID to which the target corresponds; Assigned by the
       * LocalStore for user listens and by the SyncEngine for limbo watches.
       */
      e,
      /** The purpose of the target. */
      n,
      /**
       * The sequence number of the last transaction during which this target data
       * was modified.
       */
      r,
      /** The latest snapshot version seen for this target. */
      i
      /**
       * The maximum snapshot version at which the associated view
       * contained no limbo documents.
       */
      , o
      /**
       * An opaque, server-assigned token that allows watching a target to be
       * resumed after disconnecting without retransmitting all the data that
       * matches the target. The resume token essentially identifies a point in
       * time from which the server should resume sending results.
       */
      , s) {
        void 0 === i && (i = P.min()), void 0 === o && (o = P.min()), void 0 === s && (s = z.Y), this.target = t, this.targetId = e, this.J = n, this.sequenceNumber = r, this.X = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
      }
      /** Creates a new target data instance with an updated sequence number. */


      return t.prototype.Z = function (e) {
        return new t(this.target, this.targetId, this.J, e, this.X, this.lastLimboFreeSnapshotVersion, this.resumeToken);
      },
      /**
       * Creates a new target data instance with an updated resume token and
       * snapshot version.
       */
      t.prototype.tt = function (e, n) {
        return new t(this.target, this.targetId, this.J, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
      },
      /**
       * Creates a new target data instance with an updated last limbo free
       * snapshot version number.
       */
      t.prototype.et = function (e) {
        return new t(this.target, this.targetId, this.J, this.sequenceNumber, this.X, e, this.resumeToken);
      }, t;
    }(),
        K = // TODO(b/33078163): just use simplest form of existence filter for now
    function K(t) {
      this.count = t;
    };
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Determines whether an error code represents a permanent error when received
     * in response to a non-write operation.
     *
     * See isPermanentWriteError for classifying write errors.
     */


    function X(t) {
      switch (t) {
        case x.OK:
          return p();

        case x.CANCELLED:
        case x.UNKNOWN:
        case x.DEADLINE_EXCEEDED:
        case x.RESOURCE_EXHAUSTED:
        case x.INTERNAL:
        case x.UNAVAILABLE: // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.

        case x.UNAUTHENTICATED:
          return !1;

        case x.INVALID_ARGUMENT:
        case x.NOT_FOUND:
        case x.ALREADY_EXISTS:
        case x.PERMISSION_DENIED:
        case x.FAILED_PRECONDITION: // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.

        case x.ABORTED:
        case x.OUT_OF_RANGE:
        case x.UNIMPLEMENTED:
        case x.DATA_LOSS:
          return !0;

        default:
          return p();
      }
    }
    /**
     * Determines whether an error code represents a permanent error when received
     * in response to a write operation.
     *
     * Write operations must be handled specially because as of b/119437764, ABORTED
     * errors on the write stream should be retried too (even though ABORTED errors
     * are not generally retryable).
     *
     * Note that during the initial handshake on the write stream an ABORTED error
     * signals that we should discard our stream token (i.e. it is permanent). This
     * means a handshake error should be classified with isPermanentError, above.
     */

    /**
     * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
     * are not the same as HTTP status codes.
     *
     * @returns The Code equivalent to the given GRPC status code. Fails if there
     *     is no match.
     */


    function H(t) {
      if (void 0 === t) // This shouldn't normally happen, but in certain error cases (like trying
        // to send invalid proto messages) we may get an error with no GRPC code.
        return f("GRPC error has no .code"), x.UNKNOWN;

      switch (t) {
        case W.OK:
          return x.OK;

        case W.CANCELLED:
          return x.CANCELLED;

        case W.UNKNOWN:
          return x.UNKNOWN;

        case W.DEADLINE_EXCEEDED:
          return x.DEADLINE_EXCEEDED;

        case W.RESOURCE_EXHAUSTED:
          return x.RESOURCE_EXHAUSTED;

        case W.INTERNAL:
          return x.INTERNAL;

        case W.UNAVAILABLE:
          return x.UNAVAILABLE;

        case W.UNAUTHENTICATED:
          return x.UNAUTHENTICATED;

        case W.INVALID_ARGUMENT:
          return x.INVALID_ARGUMENT;

        case W.NOT_FOUND:
          return x.NOT_FOUND;

        case W.ALREADY_EXISTS:
          return x.ALREADY_EXISTS;

        case W.PERMISSION_DENIED:
          return x.PERMISSION_DENIED;

        case W.FAILED_PRECONDITION:
          return x.FAILED_PRECONDITION;

        case W.ABORTED:
          return x.ABORTED;

        case W.OUT_OF_RANGE:
          return x.OUT_OF_RANGE;

        case W.UNIMPLEMENTED:
          return x.UNIMPLEMENTED;

        case W.DATA_LOSS:
          return x.DATA_LOSS;

        default:
          return p();
      }
    }
    /**
     * Converts an HTTP response's error status to the equivalent error code.
     *
     * @param status An HTTP error response status ("FAILED_PRECONDITION",
     * "UNKNOWN", etc.)
     * @returns The equivalent Code. Non-matching responses are mapped to
     *     Code.UNKNOWN.
     */


    (Q = W || (W = {}))[Q.OK = 0] = "OK", Q[Q.CANCELLED = 1] = "CANCELLED", Q[Q.UNKNOWN = 2] = "UNKNOWN", Q[Q.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", Q[Q.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Q[Q.NOT_FOUND = 5] = "NOT_FOUND", Q[Q.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Q[Q.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", Q[Q.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Q[Q.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", Q[Q.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Q[Q.ABORTED = 10] = "ABORTED", Q[Q.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Q[Q.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", Q[Q.INTERNAL = 13] = "INTERNAL", Q[Q.UNAVAILABLE = 14] = "UNAVAILABLE", Q[Q.DATA_LOSS = 15] = "DATA_LOSS";
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // An immutable sorted map implementation, based on a Left-leaning Red-Black
    // tree.

    var $ =
    /** @class */
    function () {
      function t(t, e) {
        this.P = t, this.root = e || Z.EMPTY;
      } // Returns a copy of the map, with the specified key/value added or replaced.


      return t.prototype.nt = function (e, n) {
        return new t(this.P, this.root.nt(e, n, this.P).copy(null, null, Z.st, null, null));
      }, // Returns a copy of the map, with the specified key removed.
      t.prototype.remove = function (e) {
        return new t(this.P, this.root.remove(e, this.P).copy(null, null, Z.st, null, null));
      }, // Returns the value of the node with the given key, or null.
      t.prototype.get = function (t) {
        for (var e = this.root; !e._();) {
          var n = this.P(t, e.key);
          if (0 === n) return e.value;
          n < 0 ? e = e.left : n > 0 && (e = e.right);
        }

        return null;
      }, // Returns the index of the element in this sorted map, or -1 if it doesn't
      // exist.
      t.prototype.indexOf = function (t) {
        for ( // Number of nodes that were pruned when descending right
        var e = 0, n = this.root; !n._();) {
          var r = this.P(t, n.key);
          if (0 === r) return e + n.left.size;
          r < 0 ? n = n.left : ( // Count all nodes left of the node plus the node itself
          e += n.left.size + 1, n = n.right);
        } // Node not found


        return -1;
      }, t.prototype._ = function () {
        return this.root._();
      }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function get() {
          return this.root.size;
        },
        enumerable: !1,
        configurable: !0
      }), // Returns the minimum key in the map.
      t.prototype.it = function () {
        return this.root.it();
      }, // Returns the maximum key in the map.
      t.prototype.rt = function () {
        return this.root.rt();
      }, // Traverses the map in key order and calls the specified action function
      // for each key/value pair. If action returns true, traversal is aborted.
      // Returns the first truthy value returned by action, or the last falsey
      // value returned by action.
      t.prototype.ot = function (t) {
        return this.root.ot(t);
      }, t.prototype.forEach = function (t) {
        this.ot(function (e, n) {
          return t(e, n), !1;
        });
      }, t.prototype.toString = function () {
        var t = [];
        return this.ot(function (e, n) {
          return t.push(e + ":" + n), !1;
        }), "{" + t.join(", ") + "}";
      }, // Traverses the map in reverse key order and calls the specified action
      // function for each key/value pair. If action returns true, traversal is
      // aborted.
      // Returns the first truthy value returned by action, or the last falsey
      // value returned by action.
      t.prototype.ht = function (t) {
        return this.root.ht(t);
      }, // Returns an iterator over the SortedMap.
      t.prototype.at = function () {
        return new J(this.root, null, this.P, !1);
      }, t.prototype.ut = function (t) {
        return new J(this.root, t, this.P, !1);
      }, t.prototype.ct = function () {
        return new J(this.root, null, this.P, !0);
      }, t.prototype.lt = function (t) {
        return new J(this.root, t, this.P, !0);
      }, t;
    }(),
        J =
    /** @class */
    function () {
      function t(t, e, n, r) {
        this._t = r, this.ft = [];

        for (var i = 1; !t._();) {
          if (i = e ? n(t.key, e) : 1, // flip the comparison if we're going in reverse
          r && (i *= -1), i < 0) // This node is less than our start key. ignore it
            t = this._t ? t.left : t.right;else {
            if (0 === i) {
              // This node is exactly equal to our start key. Push it on the stack,
              // but stop iterating;
              this.ft.push(t);
              break;
            } // This node is greater than our start key, add it to the stack and move
            // to the next one


            this.ft.push(t), t = this._t ? t.right : t.left;
          }
        }
      }

      return t.prototype.dt = function () {
        var t = this.ft.pop(),
            e = {
          key: t.key,
          value: t.value
        };
        if (this._t) for (t = t.left; !t._();) {
          this.ft.push(t), t = t.right;
        } else for (t = t.right; !t._();) {
          this.ft.push(t), t = t.left;
        }
        return e;
      }, t.prototype.wt = function () {
        return this.ft.length > 0;
      }, t.prototype.Tt = function () {
        if (0 === this.ft.length) return null;
        var t = this.ft[this.ft.length - 1];
        return {
          key: t.key,
          value: t.value
        };
      }, t;
    }(),
        Z =
    /** @class */
    function () {
      function t(e, n, r, i, o) {
        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
      } // Returns a copy of the current node, optionally replacing pieces of it.


      return t.prototype.copy = function (e, n, r, i, o) {
        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
      }, t.prototype._ = function () {
        return !1;
      }, // Traverses the tree in key order and calls the specified action function
      // for each node. If action returns true, traversal is aborted.
      // Returns the first truthy value returned by action, or the last falsey
      // value returned by action.
      t.prototype.ot = function (t) {
        return this.left.ot(t) || t(this.key, this.value) || this.right.ot(t);
      }, // Traverses the tree in reverse key order and calls the specified action
      // function for each node. If action returns true, traversal is aborted.
      // Returns the first truthy value returned by action, or the last falsey
      // value returned by action.
      t.prototype.ht = function (t) {
        return this.right.ht(t) || t(this.key, this.value) || this.left.ht(t);
      }, // Returns the minimum node in the tree.
      t.prototype.min = function () {
        return this.left._() ? this : this.left.min();
      }, // Returns the maximum key in the tree.
      t.prototype.it = function () {
        return this.min().key;
      }, // Returns the maximum key in the tree.
      t.prototype.rt = function () {
        return this.right._() ? this.key : this.right.rt();
      }, // Returns new tree, with the key/value added.
      t.prototype.nt = function (t, e, n) {
        var r = this,
            i = n(t, r.key);
        return (r = i < 0 ? r.copy(null, null, null, r.left.nt(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.nt(t, e, n))).Et();
      }, t.prototype.It = function () {
        if (this.left._()) return t.EMPTY;
        var e = this;
        return e.left.At() || e.left.left.At() || (e = e.Rt()), (e = e.copy(null, null, null, e.left.It(), null)).Et();
      }, // Returns new tree, with the specified item removed.
      t.prototype.remove = function (e, n) {
        var r,
            i = this;
        if (n(e, i.key) < 0) i.left._() || i.left.At() || i.left.left.At() || (i = i.Rt()), i = i.copy(null, null, null, i.left.remove(e, n), null);else {
          if (i.left.At() && (i = i.Pt()), i.right._() || i.right.At() || i.right.left.At() || (i = i.Vt()), 0 === n(e, i.key)) {
            if (i.right._()) return t.EMPTY;
            r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.It());
          }

          i = i.copy(null, null, null, null, i.right.remove(e, n));
        }
        return i.Et();
      }, t.prototype.At = function () {
        return this.color;
      }, // Returns new tree after performing any needed rotations.
      t.prototype.Et = function () {
        var t = this;
        return t.right.At() && !t.left.At() && (t = t.gt()), t.left.At() && t.left.left.At() && (t = t.Pt()), t.left.At() && t.right.At() && (t = t.yt()), t;
      }, t.prototype.Rt = function () {
        var t = this.yt();
        return t.right.left.At() && (t = (t = (t = t.copy(null, null, null, null, t.right.Pt())).gt()).yt()), t;
      }, t.prototype.Vt = function () {
        var t = this.yt();
        return t.left.left.At() && (t = (t = t.Pt()).yt()), t;
      }, t.prototype.gt = function () {
        var e = this.copy(null, null, t.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null);
      }, t.prototype.Pt = function () {
        var e = this.copy(null, null, t.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e);
      }, t.prototype.yt = function () {
        var t = this.left.copy(null, null, !this.left.color, null, null),
            e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
      }, // For testing.
      t.prototype.pt = function () {
        var t = this.bt();
        return Math.pow(2, t) <= this.size + 1;
      }, // In a balanced RB tree, the black-depth (number of black nodes) from root to
      // leaves is equal on both sides.  This function verifies that or asserts.
      t.prototype.bt = function () {
        if (this.At() && this.left.At()) throw p();
        if (this.right.At()) throw p();
        var t = this.left.bt();
        if (t !== this.right.bt()) throw p();
        return t + (this.At() ? 0 : 1);
      }, t;
    }(); // end SortedMap
    // An iterator over an LLRBNode.
    // end LLRBNode
    // Empty node is shared between all LLRB trees.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any


    Z.EMPTY = null, Z.RED = !0, Z.st = !1, // end LLRBEmptyNode
    Z.EMPTY = new (
    /** @class */
    function () {
      function t() {
        this.size = 0;
      }

      return Object.defineProperty(t.prototype, "key", {
        get: function get() {
          throw p();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "value", {
        get: function get() {
          throw p();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "color", {
        get: function get() {
          throw p();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "left", {
        get: function get() {
          throw p();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "right", {
        get: function get() {
          throw p();
        },
        enumerable: !1,
        configurable: !0
      }), // Returns a copy of the current node.
      t.prototype.copy = function (t, e, n, r, i) {
        return this;
      }, // Returns a copy of the tree, with the specified key/value added.
      t.prototype.nt = function (t, e, n) {
        return new Z(t, e);
      }, // Returns a copy of the tree, with the specified key removed.
      t.prototype.remove = function (t, e) {
        return this;
      }, t.prototype._ = function () {
        return !0;
      }, t.prototype.ot = function (t) {
        return !1;
      }, t.prototype.ht = function (t) {
        return !1;
      }, t.prototype.it = function () {
        return null;
      }, t.prototype.rt = function () {
        return null;
      }, t.prototype.At = function () {
        return !1;
      }, // For testing.
      t.prototype.pt = function () {
        return !0;
      }, t.prototype.bt = function () {
        return 0;
      }, t;
    }())();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * SortedSet is an immutable (copy-on-write) collection that holds elements
     * in order specified by the provided comparator.
     *
     * NOTE: if provided comparator returns 0 for two elements, we consider them to
     * be equal!
     */

    var tt =
    /** @class */
    function () {
      function t(t) {
        this.P = t, this.data = new $(this.P);
      }

      return t.prototype.has = function (t) {
        return null !== this.data.get(t);
      }, t.prototype.first = function () {
        return this.data.it();
      }, t.prototype.last = function () {
        return this.data.rt();
      }, Object.defineProperty(t.prototype, "size", {
        get: function get() {
          return this.data.size;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.indexOf = function (t) {
        return this.data.indexOf(t);
      },
      /** Iterates elements in order defined by "comparator" */
      t.prototype.forEach = function (t) {
        this.data.ot(function (e, n) {
          return t(e), !1;
        });
      },
      /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */
      t.prototype.vt = function (t, e) {
        for (var n = this.data.ut(t[0]); n.wt();) {
          var r = n.dt();
          if (this.P(r.key, t[1]) >= 0) return;
          e(r.key);
        }
      },
      /**
       * Iterates over `elem`s such that: start <= elem until false is returned.
       */
      t.prototype.St = function (t, e) {
        var n;

        for (n = void 0 !== e ? this.data.ut(e) : this.data.at(); n.wt();) {
          if (!t(n.dt().key)) return;
        }
      },
      /** Finds the least element greater than or equal to `elem`. */
      t.prototype.Dt = function (t) {
        var e = this.data.ut(t);
        return e.wt() ? e.dt().key : null;
      }, t.prototype.at = function () {
        return new et(this.data.at());
      }, t.prototype.ut = function (t) {
        return new et(this.data.ut(t));
      },
      /** Inserts or updates an element */
      t.prototype.add = function (t) {
        return this.copy(this.data.remove(t).nt(t, !0));
      },
      /** Deletes an element */
      t.prototype["delete"] = function (t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
      }, t.prototype._ = function () {
        return this.data._();
      }, t.prototype.Ct = function (t) {
        var e = this; // Make sure `result` always refers to the larger one of the two sets.

        return e.size < t.size && (e = t, t = this), t.forEach(function (t) {
          e = e.add(t);
        }), e;
      }, t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;

        for (var n = this.data.at(), r = e.data.at(); n.wt();) {
          var i = n.dt().key,
              o = r.dt().key;
          if (0 !== this.P(i, o)) return !1;
        }

        return !0;
      }, t.prototype.F = function () {
        var t = [];
        return this.forEach(function (e) {
          t.push(e);
        }), t;
      }, t.prototype.toString = function () {
        var t = [];
        return this.forEach(function (e) {
          return t.push(e);
        }), "SortedSet(" + t.toString() + ")";
      }, t.prototype.copy = function (e) {
        var n = new t(this.P);
        return n.data = e, n;
      }, t;
    }(),
        et =
    /** @class */
    function () {
      function t(t) {
        this.Ft = t;
      }

      return t.prototype.dt = function () {
        return this.Ft.dt().key;
      }, t.prototype.wt = function () {
        return this.Ft.wt();
      }, t;
    }(),
        nt = new $(V.P);

    function rt() {
      return nt;
    }

    function it() {
      return rt();
    }

    var ot = new $(V.P);

    function st() {
      return ot;
    }

    var ut = new $(V.P),
        at = new tt(V.P);

    function ct() {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t[e] = arguments[e];
      }

      for (var n = at, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        n = n.add(o);
      }

      return n;
    }

    var ht = new tt(m);

    function ft() {
      return ht;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * DocumentSet is an immutable (copy-on-write) collection that holds documents
     * in order specified by the provided comparator. We always add a document key
     * comparator on top of what is provided to guarantee document equality based on
     * the key.
     */


    var lt =
    /** @class */
    function () {
      /** The default ordering is by key if the comparator is omitted */
      function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.P = t ? function (e, n) {
          return t(e, n) || V.P(e.key, n.key);
        } : function (t, e) {
          return V.P(t.key, e.key);
        }, this.Nt = st(), this.$t = new $(this.P)
        /**
        * Returns an empty copy of the existing DocumentSet, using the same
        * comparator.
        */
        ;
      }

      return t.kt = function (e) {
        return new t(e.P);
      }, t.prototype.has = function (t) {
        return null != this.Nt.get(t);
      }, t.prototype.get = function (t) {
        return this.Nt.get(t);
      }, t.prototype.first = function () {
        return this.$t.it();
      }, t.prototype.last = function () {
        return this.$t.rt();
      }, t.prototype._ = function () {
        return this.$t._();
      },
      /**
       * Returns the index of the provided key in the document set, or -1 if the
       * document key is not present in the set;
       */
      t.prototype.indexOf = function (t) {
        var e = this.Nt.get(t);
        return e ? this.$t.indexOf(e) : -1;
      }, Object.defineProperty(t.prototype, "size", {
        get: function get() {
          return this.$t.size;
        },
        enumerable: !1,
        configurable: !0
      }),
      /** Iterates documents in order defined by "comparator" */
      t.prototype.forEach = function (t) {
        this.$t.ot(function (e, n) {
          return t(e), !1;
        });
      },
      /** Inserts or updates a document with the same key */
      t.prototype.add = function (t) {
        // First remove the element if we have it.
        var e = this["delete"](t.key);
        return e.copy(e.Nt.nt(t.key, t), e.$t.nt(t, null));
      },
      /** Deletes a document with a given key */
      t.prototype["delete"] = function (t) {
        var e = this.get(t);
        return e ? this.copy(this.Nt.remove(t), this.$t.remove(e)) : this;
      }, t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;

        for (var n = this.$t.at(), r = e.$t.at(); n.wt();) {
          var i = n.dt().key,
              o = r.dt().key;
          if (!i.isEqual(o)) return !1;
        }

        return !0;
      }, t.prototype.toString = function () {
        var t = [];
        return this.forEach(function (e) {
          t.push(e.toString());
        }), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
      }, t.prototype.copy = function (e, n) {
        var r = new t();
        return r.P = this.P, r.Nt = e, r.$t = n, r;
      }, t;
    }(),
        pt =
    /** @class */
    function () {
      function t() {
        this.xt = new $(V.P);
      }

      return t.prototype.track = function (t) {
        var e = t.doc.key,
            n = this.xt.get(e);
        n ? // Merge the new change with the existing change.
        0
        /* Added */
        !== t.type && 3
        /* Metadata */
        === n.type ? this.xt = this.xt.nt(e, t) : 3
        /* Metadata */
        === t.type && 1
        /* Removed */
        !== n.type ? this.xt = this.xt.nt(e, {
          type: n.type,
          doc: t.doc
        }) : 2
        /* Modified */
        === t.type && 2
        /* Modified */
        === n.type ? this.xt = this.xt.nt(e, {
          type: 2
          /* Modified */
          ,
          doc: t.doc
        }) : 2
        /* Modified */
        === t.type && 0
        /* Added */
        === n.type ? this.xt = this.xt.nt(e, {
          type: 0
          /* Added */
          ,
          doc: t.doc
        }) : 1
        /* Removed */
        === t.type && 0
        /* Added */
        === n.type ? this.xt = this.xt.remove(e) : 1
        /* Removed */
        === t.type && 2
        /* Modified */
        === n.type ? this.xt = this.xt.nt(e, {
          type: 1
          /* Removed */
          ,
          doc: n.doc
        }) : 0
        /* Added */
        === t.type && 1
        /* Removed */
        === n.type ? this.xt = this.xt.nt(e, {
          type: 2
          /* Modified */
          ,
          doc: t.doc
        }) : // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        p() : this.xt = this.xt.nt(e, t);
      }, t.prototype.Mt = function () {
        var t = [];
        return this.xt.ot(function (e, n) {
          t.push(n);
        }), t;
      }, t;
    }(),
        dt =
    /** @class */
    function () {
      function t(t, e, n, r, i, o, s, u) {
        this.query = t, this.docs = e, this.Ot = n, this.docChanges = r, this.Lt = i, this.fromCache = o, this.Bt = s, this.qt = u
        /** Returns a view snapshot as if all documents in the snapshot were added. */
        ;
      }

      return t.Ut = function (e, n, r, i) {
        var o = [];
        return n.forEach(function (t) {
          o.push({
            type: 0
            /* Added */
            ,
            doc: t
          });
        }), new t(e, n, lt.kt(n), o, r, i,
        /* syncStateChanged= */
        !0,
        /* excludesMetadataChanges= */
        !1);
      }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function get() {
          return !this.Lt._();
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.isEqual = function (t) {
        if (!(this.fromCache === t.fromCache && this.Bt === t.Bt && this.Lt.isEqual(t.Lt) && on(this.query, t.query) && this.docs.isEqual(t.docs) && this.Ot.isEqual(t.Ot))) return !1;
        var e = this.docChanges,
            n = t.docChanges;
        if (e.length !== n.length) return !1;

        for (var r = 0; r < e.length; r++) {
          if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        }

        return !0;
      }, t;
    }(),
        yt =
    /** @class */
    function () {
      function t(
      /**
       * The snapshot version this event brings us up to, or MIN if not set.
       */
      t,
      /**
       * A map from target to changes to the target. See TargetChange.
       */
      e,
      /**
       * A set of targets that is known to be inconsistent. Listens for these
       * targets should be re-established without resume tokens.
       */
      n,
      /**
       * A set of which documents have changed or been deleted, along with the
       * doc's new values (if not deleted).
       */
      r,
      /**
       * A set of which document updates are due only to limbo resolution targets.
       */
      i) {
        this.X = t, this.Qt = e, this.Wt = n, this.jt = r, this.Kt = i;
      }
      /**
       * HACK: Views require RemoteEvents in order to determine whether the view is
       * CURRENT, but secondary tabs don't receive remote events. So this method is
       * used to create a synthesized RemoteEvent that can be used to apply a
       * CURRENT status change to a View, for queries executed in a different tab.
       */
      // PORTING NOTE: Multi-tab only


      return t.Gt = function (e, n) {
        var r = new Map();
        return r.set(e, vt.zt(e, n)), new t(P.min(), r, ft(), rt(), ct());
      }, t;
    }(),
        vt =
    /** @class */
    function () {
      function t(
      /**
       * An opaque, server-assigned token that allows watching a query to be resumed
       * after disconnecting without retransmitting all the data that matches the
       * query. The resume token essentially identifies a point in time from which
       * the server should resume sending results.
       */
      t,
      /**
       * The "current" (synced) status of this target. Note that "current"
       * has special meaning in the RPC protocol that implies that a target is
       * both up-to-date and consistent with the rest of the watch stream.
       */
      e,
      /**
       * The set of documents that were newly assigned to this target as part of
       * this remote event.
       */
      n,
      /**
       * The set of documents that were already assigned to this target but received
       * an update during this remote event.
       */
      r,
      /**
       * The set of documents that were removed from this target as part of this
       * remote event.
       */
      i) {
        this.resumeToken = t, this.Ht = e, this.Yt = n, this.Jt = r, this.Xt = i
        /**
        * This method is used to create a synthesized TargetChanges that can be used to
        * apply a CURRENT status change to a View (for queries executed in a different
        * tab) or for new queries (to raise snapshots with correct CURRENT status).
        */
        ;
      }

      return t.zt = function (e, n) {
        return new t(z.Y, n, ct(), ct(), ct());
      }, t;
    }(),
        gt = function gt(
    /** The new document applies to all of these targets. */
    t,
    /** The new document is removed from all of these targets. */
    e,
    /** The key of the document for this change. */
    n,
    /**
         * The new document or NoDocument if it was deleted. Is null if the
         * document went out of view without the server sending a new document.
         */
    r) {
      this.Zt = t, this.removedTargetIds = e, this.key = n, this.te = r;
    },
        mt = function mt(t, e) {
      this.targetId = t, this.ee = e;
    },
        wt = function wt(
    /** What kind of change occurred to the watch target. */
    t,
    /** The target IDs that were added/removed/set. */
    e,
    /**
         * An opaque, server-assigned token that allows watching a target to be
         * resumed after disconnecting without retransmitting all the data that
         * matches the target. The resume token essentially identifies a point in
         * time from which the server should resume sending results.
         */
    n
    /** An RPC error indicating why the watch failed. */
    , r) {
      void 0 === n && (n = z.Y), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r;
    },
        bt =
    /** @class */
    function () {
      function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.ne = 0,
        /**
             * Keeps track of the document changes since the last raised snapshot.
             *
             * These changes are continuously updated as we receive document updates and
             * always reflect the current set of changes against the last issued snapshot.
             */
        this.se = Et(),
        /** See public getters for explanations of these fields. */
        this.ie = z.Y, this.re = !1,
        /**
             * Whether this target state should be included in the next snapshot. We
             * initialize to true so that newly-added targets are included in the next
             * RemoteEvent.
             */
        this.oe = !0;
      }

      return Object.defineProperty(t.prototype, "Ht", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function get() {
          return this.re;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */
        get: function get() {
          return this.ie;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "he", {
        /** Whether this target has pending target adds or target removes. */
        get: function get() {
          return 0 !== this.ne;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "ae", {
        /** Whether we have modified any state that should trigger a snapshot. */
        get: function get() {
          return this.oe;
        },
        enumerable: !1,
        configurable: !0
      }),
      /**
       * Applies the resume token to the TargetChange, but only when it has a new
       * value. Empty resumeTokens are discarded.
       */
      t.prototype.ue = function (t) {
        t.H() > 0 && (this.oe = !0, this.ie = t);
      },
      /**
       * Creates a target change from the current set of changes.
       *
       * To reset the document changes after raising this snapshot, call
       * `clearPendingChanges()`.
       */
      t.prototype.ce = function () {
        var t = ct(),
            e = ct(),
            n = ct();
        return this.se.forEach(function (r, i) {
          switch (i) {
            case 0
            /* Added */
            :
              t = t.add(r);
              break;

            case 2
            /* Modified */
            :
              e = e.add(r);
              break;

            case 1
            /* Removed */
            :
              n = n.add(r);
              break;

            default:
              p();
          }
        }), new vt(this.ie, this.re, t, e, n);
      },
      /**
       * Resets the document changes and sets `hasPendingChanges` to false.
       */
      t.prototype.le = function () {
        this.oe = !1, this.se = Et();
      }, t.prototype._e = function (t, e) {
        this.oe = !0, this.se = this.se.nt(t, e);
      }, t.prototype.fe = function (t) {
        this.oe = !0, this.se = this.se.remove(t);
      }, t.prototype.de = function () {
        this.ne += 1;
      }, t.prototype.we = function () {
        this.ne -= 1;
      }, t.prototype.Te = function () {
        this.oe = !0, this.re = !0;
      }, t;
    }(),
        _t =
    /** @class */
    function () {
      function t(t) {
        this.Ee = t,
        /** The internal state of all tracked targets. */
        this.Ie = new Map(),
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.me = rt(),
        /** A mapping of document keys to their set of target IDs. */
        this.Ae = It(),
        /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
        this.Re = new tt(m)
        /**
        * Processes and adds the DocumentWatchChange to the current set of changes.
        */
        ;
      }

      return t.prototype.Pe = function (t) {
        for (var e = 0, n = t.Zt; e < n.length; e++) {
          var r = n[e];
          t.te instanceof tn ? this.Ve(r, t.te) : t.te instanceof en && this.ge(r, t.key, t.te);
        }

        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
          var s = o[i];
          this.ge(s, t.key, t.te);
        }
      },
      /** Processes and adds the WatchTargetChange to the current set of changes. */
      t.prototype.ye = function (t) {
        var e = this;
        this.pe(t, function (n) {
          var r = e.be(n);

          switch (t.state) {
            case 0
            /* NoChange */
            :
              e.ve(n) && r.ue(t.resumeToken);
              break;

            case 1
            /* Added */
            :
              // We need to decrement the number of pending acks needed from watch
              // for this targetId.
              r.we(), r.he || // We have a freshly added target, so we need to reset any state
              // that we had previously. This can happen e.g. when remove and add
              // back a target for existence filter mismatches.
              r.le(), r.ue(t.resumeToken);
              break;

            case 2
            /* Removed */
            :
              // We need to keep track of removed targets to we can post-filter and
              // remove any target changes.
              // We need to decrement the number of pending acks needed from watch
              // for this targetId.
              r.we(), r.he || e.removeTarget(n);
              break;

            case 3
            /* Current */
            :
              e.ve(n) && (r.Te(), r.ue(t.resumeToken));
              break;

            case 4
            /* Reset */
            :
              e.ve(n) && ( // Reset the target and synthesizes removes for all existing
              // documents. The backend will re-add any documents that still
              // match the target before it sends the next global snapshot.
              e.Se(n), r.ue(t.resumeToken));
              break;

            default:
              p();
          }
        });
      },
      /**
       * Iterates over all targetIds that the watch change applies to: either the
       * targetIds explicitly listed in the change or the targetIds of all currently
       * active targets.
       */
      t.prototype.pe = function (t, e) {
        var n = this;
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Ie.forEach(function (t, r) {
          n.ve(r) && e(r);
        });
      },
      /**
       * Handles existence filters and synthesizes deletes for filter mismatches.
       * Targets that are invalidated by filter mismatches are added to
       * `pendingTargetResets`.
       */
      t.prototype.De = function (t) {
        var e = t.targetId,
            n = t.ee.count,
            r = this.Ce(e);

        if (r) {
          var i = r.target;
          if (G(i)) {
            if (0 === n) {
              // The existence filter told us the document does not exist. We deduce
              // that this document does not exist and apply a deleted document to
              // our updates. Without applying this deleted document there might be
              // another query that will raise this document as part of a snapshot
              // until it is resolved, essentially exposing inconsistency between
              // queries.
              var o = new V(i.path);
              this.ge(e, o, new en(o, P.min()));
            } else d(1 === n);
          } else this.Fe(e) !== n && ( // Existence filter mismatch: We reset the mapping and raise a new
          // snapshot with `isFromCache:true`.
          this.Se(e), this.Re = this.Re.add(e));
        }
      },
      /**
       * Converts the currently accumulated state into a remote event at the
       * provided snapshot version. Resets the accumulated changes before returning.
       */
      t.prototype.Ne = function (t) {
        var e = this,
            n = new Map();
        this.Ie.forEach(function (r, i) {
          var o = e.Ce(i);

          if (o) {
            if (r.Ht && G(o.target)) {
              // Document queries for document that don't exist can produce an empty
              // result set. To update our local cache, we synthesize a document
              // delete if we have not previously received the document. This
              // resolves the limbo state of the document, removing it from
              // limboDocumentRefs.
              // TODO(dimond): Ideally we would have an explicit lookup target
              // instead resulting in an explicit delete message and we could
              // remove this special logic.
              var s = new V(o.target.path);
              null !== e.me.get(s) || e.$e(i, s) || e.ge(i, s, new en(s, t));
            }

            r.ae && (n.set(i, r.ce()), r.le());
          }
        });
        var r = ct(); // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.

        this.Ae.forEach(function (t, n) {
          var i = !0;
          n.St(function (t) {
            var n = e.Ce(t);
            return !n || 2
            /* LimboResolution */
            === n.J || (i = !1, !1);
          }), i && (r = r.add(t));
        });
        var i = new yt(t, n, this.Re, this.me, r);
        return this.me = rt(), this.Ae = It(), this.Re = new tt(m), i;
      },
      /**
       * Adds the provided document to the internal list of document updates and
       * its document key to the given target's mapping.
       */
      // Visible for testing.
      t.prototype.Ve = function (t, e) {
        if (this.ve(t)) {
          var n = this.$e(t, e.key) ? 2
          /* Modified */
          : 0
          /* Added */
          ;
          this.be(t)._e(e.key, n), this.me = this.me.nt(e.key, e), this.Ae = this.Ae.nt(e.key, this.ke(e.key).add(t));
        }
      },
      /**
       * Removes the provided document from the target mapping. If the
       * document no longer matches the target, but the document's state is still
       * known (e.g. we know that the document was deleted or we received the change
       * that caused the filter mismatch), the new document can be provided
       * to update the remote document cache.
       */
      // Visible for testing.
      t.prototype.ge = function (t, e, n) {
        if (this.ve(t)) {
          var r = this.be(t);
          this.$e(t, e) ? r._e(e, 1
          /* Removed */
          ) : // The document may have entered and left the target before we raised a
          // snapshot, so we can just ignore the change.
          r.fe(e), this.Ae = this.Ae.nt(e, this.ke(e)["delete"](t)), n && (this.me = this.me.nt(e, n));
        }
      }, t.prototype.removeTarget = function (t) {
        this.Ie["delete"](t);
      },
      /**
       * Returns the current count of documents in the target. This includes both
       * the number of documents that the LocalStore considers to be part of the
       * target as well as any accumulated changes.
       */
      t.prototype.Fe = function (t) {
        var e = this.be(t).ce();
        return this.Ee.xe(t).size + e.Yt.size - e.Xt.size;
      },
      /**
       * Increment the number of acks needed from watch before we can consider the
       * server to be 'in-sync' with the client's active targets.
       */
      t.prototype.de = function (t) {
        this.be(t).de();
      }, t.prototype.be = function (t) {
        var e = this.Ie.get(t);
        return e || (e = new bt(), this.Ie.set(t, e)), e;
      }, t.prototype.ke = function (t) {
        var e = this.Ae.get(t);
        return e || (e = new tt(m), this.Ae = this.Ae.nt(t, e)), e;
      },
      /**
       * Verifies that the user is still interested in this target (by calling
       * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
       * from watch.
       */
      t.prototype.ve = function (t) {
        var e = null !== this.Ce(t);
        return e || h("WatchChangeAggregator", "Detected inactive target", t), e;
      },
      /**
       * Returns the TargetData for an active target (i.e. a target that the user
       * is still interested in that has no outstanding target change requests).
       */
      t.prototype.Ce = function (t) {
        var e = this.Ie.get(t);
        return e && e.he ? null : this.Ee.Me(t);
      },
      /**
       * Resets the state of a Watch target to its initial state (e.g. sets
       * 'current' to false, clears the resume token and removes its target mapping
       * from all documents).
       */
      t.prototype.Se = function (t) {
        var e = this;
        this.Ie.set(t, new bt()), this.Ee.xe(t).forEach(function (n) {
          e.ge(t, n,
          /*updatedDocument=*/
          null);
        });
      },
      /**
       * Returns whether the LocalStore considers the document to be part of the
       * specified target.
       */
      t.prototype.$e = function (t, e) {
        return this.Ee.xe(t).has(e);
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
     * duplicate events for the same doc.
     */


    function It() {
      return new $(V.P);
    }

    function Et() {
      return new $(V.P);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Represents a locally-applied ServerTimestamp.
     *
     * Server Timestamps are backed by MapValues that contain an internal field
     * `__type__` with a value of `server_timestamp`. The previous value and local
     * write time are stored in its `__previous_value__` and `__local_write_time__`
     * fields respectively.
     *
     * Notes:
     * - ServerTimestampValue instances are created as the result of applying a
     *   TransformMutation (see TransformMutation.applyTo()). They can only exist in
     *   the local view of a document. Therefore they do not need to be parsed or
     *   serialized.
     * - When evaluated locally (e.g. for snapshot.data()), they by default
     *   evaluate to `null`. This behavior can be configured by passing custom
     *   FieldValueOptions to value().
     * - With respect to other ServerTimestampValues, they sort by their
     *   localWriteTime.
     */


    function Nt(t) {
      var e, n;
      return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
    }
    /**
     * Creates a new ServerTimestamp proto value (using the internal format).
     */

    /**
     * Returns the local time at which this timestamp was first set.
     */


    function Tt(t) {
      var e = Lt(t.mapValue.fields.__local_write_time__.timestampValue);
      return new S(e.seconds, e.nanos);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // A RegExp matching ISO 8601 UTC timestamps with optional fraction.


    var At = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
    /** Extracts the backend's type order for the provided value. */

    function xt(t) {
      return "nullValue" in t ? 0
      /* NullValue */
      : "booleanValue" in t ? 1
      /* BooleanValue */
      : "integerValue" in t || "doubleValue" in t ? 2
      /* NumberValue */
      : "timestampValue" in t ? 3
      /* TimestampValue */
      : "stringValue" in t ? 5
      /* StringValue */
      : "bytesValue" in t ? 6
      /* BlobValue */
      : "referenceValue" in t ? 7
      /* RefValue */
      : "geoPointValue" in t ? 8
      /* GeoPointValue */
      : "arrayValue" in t ? 9
      /* ArrayValue */
      : "mapValue" in t ? Nt(t) ? 4
      /* ServerTimestampValue */
      : 10
      /* ObjectValue */
      : p();
    }
    /** Tests `left` and `right` for equality based on the backend semantics. */


    function Dt(t, e) {
      var n = xt(t);
      if (n !== xt(e)) return !1;

      switch (n) {
        case 0
        /* NullValue */
        :
          return !0;

        case 1
        /* BooleanValue */
        :
          return t.booleanValue === e.booleanValue;

        case 4
        /* ServerTimestampValue */
        :
          return Tt(t).isEqual(Tt(e));

        case 3
        /* TimestampValue */
        :
          return function (t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) // Use string equality for ISO 8601 timestamps
              return t.timestampValue === e.timestampValue;
            var n = Lt(t.timestampValue),
                r = Lt(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
          }(t, e);

        case 5
        /* StringValue */
        :
          return t.stringValue === e.stringValue;

        case 6
        /* BlobValue */
        :
          return function (t, e) {
            return Vt(t.bytesValue).isEqual(Vt(e.bytesValue));
          }(t, e);

        case 7
        /* RefValue */
        :
          return t.referenceValue === e.referenceValue;

        case 8
        /* GeoPointValue */
        :
          return function (t, e) {
            return Ot(t.geoPointValue.latitude) === Ot(e.geoPointValue.latitude) && Ot(t.geoPointValue.longitude) === Ot(e.geoPointValue.longitude);
          }(t, e);

        case 2
        /* NumberValue */
        :
          return function (t, e) {
            if ("integerValue" in t && "integerValue" in e) return Ot(t.integerValue) === Ot(e.integerValue);

            if ("doubleValue" in t && "doubleValue" in e) {
              var n = Ot(t.doubleValue),
                  r = Ot(e.doubleValue);
              return n === r ? C(n) === C(r) : isNaN(n) && isNaN(r);
            }

            return !1;
          }(t, e);

        case 9
        /* ArrayValue */
        :
          return w(t.arrayValue.values || [], e.arrayValue.values || [], Dt);

        case 10
        /* ObjectValue */
        :
          return function (t, e) {
            var n = t.mapValue.fields || {},
                r = e.mapValue.fields || {};
            if (E(n) !== E(r)) return !1;

            for (var i in n) {
              if (n.hasOwnProperty(i) && (void 0 === r[i] || !Dt(n[i], r[i]))) return !1;
            }

            return !0;
          }(t, e);

        default:
          return p();
      }
    }

    function St(t, e) {
      return void 0 !== (t.values || []).find(function (t) {
        return Dt(t, e);
      });
    }

    function Pt(t, e) {
      var n = xt(t),
          r = xt(e);
      if (n !== r) return m(n, r);

      switch (n) {
        case 0
        /* NullValue */
        :
          return 0;

        case 1
        /* BooleanValue */
        :
          return m(t.booleanValue, e.booleanValue);

        case 2
        /* NumberValue */
        :
          return function (t, e) {
            var n = Ot(t.integerValue || t.doubleValue),
                r = Ot(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
          }(t, e);

        case 3
        /* TimestampValue */
        :
          return kt(t.timestampValue, e.timestampValue);

        case 4
        /* ServerTimestampValue */
        :
          return kt(Tt(t), Tt(e));

        case 5
        /* StringValue */
        :
          return m(t.stringValue, e.stringValue);

        case 6
        /* BlobValue */
        :
          return function (t, e) {
            var n = Vt(t),
                r = Vt(e);
            return n.o(r);
          }(t.bytesValue, e.bytesValue);

        case 7
        /* RefValue */
        :
          return function (t, e) {
            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
              var o = m(n[i], r[i]);
              if (0 !== o) return o;
            }

            return m(n.length, r.length);
          }(t.referenceValue, e.referenceValue);

        case 8
        /* GeoPointValue */
        :
          return function (t, e) {
            var n = m(Ot(t.latitude), Ot(e.latitude));
            return 0 !== n ? n : m(Ot(t.longitude), Ot(e.longitude));
          }(t.geoPointValue, e.geoPointValue);

        case 9
        /* ArrayValue */
        :
          return function (t, e) {
            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
              var o = Pt(n[i], r[i]);
              if (o) return o;
            }

            return m(n.length, r.length);
          }(t.arrayValue, e.arrayValue);

        case 10
        /* ObjectValue */
        :
          return function (t, e) {
            var n = t.fields || {},
                r = Object.keys(n),
                i = e.fields || {},
                o = Object.keys(i); // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.

            r.sort(), o.sort();

            for (var s = 0; s < r.length && s < o.length; ++s) {
              var u = m(r[s], o[s]);
              if (0 !== u) return u;
              var a = Pt(n[r[s]], i[o[s]]);
              if (0 !== a) return a;
            }

            return m(r.length, o.length);
          }(t.mapValue, e.mapValue);

        default:
          throw p();
      }
    }

    function kt(t, e) {
      if ("string" == typeof t && "string" == typeof e && t.length === e.length) return m(t, e);
      var n = Lt(t),
          r = Lt(e),
          i = m(n.seconds, r.seconds);
      return 0 !== i ? i : m(n.nanos, r.nanos);
    }

    function Rt(t) {
      return function t(e) {
        return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function (t) {
          var e = Lt(t);
          return "time(" + e.seconds + "," + e.nanos + ")";
        }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? Vt(e.bytesValue).toBase64() : "referenceValue" in e ? (r = e.referenceValue, V.q(r).toString()) : "geoPointValue" in e ? "geo(" + (n = e.geoPointValue).latitude + "," + n.longitude + ")" : "arrayValue" in e ? function (e) {
          for (var n = "[", r = !0, i = 0, o = e.values || []; i < o.length; i++) {
            var s = o[i];
            r ? r = !1 : n += ",", n += t(s);
          }

          return n + "]";
        }(e.arrayValue) : "mapValue" in e ? function (e) {
          for ( // Iteration order in JavaScript is not guaranteed. To ensure that we generate
          // matching canonical IDs for identical maps, we need to sort the keys.
          var n = "{", r = !0, i = 0, o = Object.keys(e.fields || {}).sort(); i < o.length; i++) {
            var s = o[i];
            r ? r = !1 : n += ",", n += s + ":" + t(e.fields[s]);
          }

          return n + "}";
        }(e.mapValue) : p();
        var n, r;
      }(t);
    }

    function Lt(t) {
      // The json interface (for the browser) will return an iso timestamp string,
      // while the proto js library (for node) will return a
      // google.protobuf.Timestamp instance.
      if (d(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var e = 0,
            n = At.exec(t);

        if (d(!!n), n[1]) {
          // Pad the fraction out to 9 digits (nanos).
          var r = n[1];
          r = (r + "000000000").substr(0, 9), e = Number(r);
        } // Parse the date to get the seconds.


        var i = new Date(t);
        return {
          seconds: Math.floor(i.getTime() / 1e3),
          nanos: e
        };
      }

      return {
        seconds: Ot(t.seconds),
        nanos: Ot(t.nanos)
      };
    }
    /**
     * Converts the possible Proto types for numbers into a JavaScript number.
     * Returns 0 if the value is not numeric.
     */


    function Ot(t) {
      // TODO(bjornick): Handle int64 greater than 53 bits.
      return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
    }
    /** Converts the possible Proto types for Blobs into a ByteString. */


    function Vt(t) {
      return "string" == typeof t ? z.fromBase64String(t) : z.fromUint8Array(t);
    }
    /** Returns a reference value for the provided database and key. */


    function Ut(t, e) {
      return {
        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.N()
      };
    }
    /** Returns true if `value` is an IntegerValue . */


    function Ct(t) {
      return !!t && "integerValue" in t;
    }
    /** Returns true if `value` is a DoubleValue. */

    /** Returns true if `value` is an ArrayValue. */


    function Ft(t) {
      return !!t && "arrayValue" in t;
    }
    /** Returns true if `value` is a NullValue. */


    function jt(t) {
      return !!t && "nullValue" in t;
    }
    /** Returns true if `value` is NaN. */


    function Mt(t) {
      return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
    }
    /** Returns true if `value` is a MapValue. */


    function qt(t) {
      return !!t && "mapValue" in t;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var Bt = {
      asc: "ASCENDING",
      desc: "DESCENDING"
    },
        Gt = {
      "<": "LESS_THAN",
      "<=": "LESS_THAN_OR_EQUAL",
      ">": "GREATER_THAN",
      ">=": "GREATER_THAN_OR_EQUAL",
      "==": "EQUAL",
      "array-contains": "ARRAY_CONTAINS",
      "in": "IN",
      "array-contains-any": "ARRAY_CONTAINS_ANY"
    },
        zt = function zt(t, e) {
      this.s = t, this.Oe = e;
    };
    /**
     * This class generates JsonObject values for the Datastore API suitable for
     * sending to either GRPC stub methods or via the JSON/HTTP REST API.
     *
     * The serializer supports both Protobuf.js and Proto3 JSON formats. By
     * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
     * format.
     *
     * For a description of the Proto3 JSON format check
     * https://developers.google.com/protocol-buffers/docs/proto3#json
     *
     * TODO(klimt): We can remove the databaseId argument if we keep the full
     * resource name in documents.
     */

    /**
     * Returns an IntegerValue for `value`.
     */


    function Wt(t) {
      return {
        integerValue: "" + t
      };
    }
    /**
     * Returns an DoubleValue for `value` that is encoded based the serializer's
     * `useProto3Json` setting.
     */


    function Qt(t, e) {
      if (t.Oe) {
        if (isNaN(e)) return {
          doubleValue: "NaN"
        };
        if (e === 1 / 0) return {
          doubleValue: "Infinity"
        };
        if (e === -1 / 0) return {
          doubleValue: "-Infinity"
        };
      }

      return {
        doubleValue: C(e) ? "-0" : e
      };
    }
    /**
     * Returns a value for a number that's appropriate to put into a proto.
     * The return value is an IntegerValue if it can safely represent the value,
     * otherwise a DoubleValue is returned.
     */


    function Yt(t, e) {
      return F(e) ? Wt(e) : Qt(t, e);
    }
    /**
     * Returns a value for a Date that's appropriate to put into a proto.
     */


    function Kt(t, e) {
      return t.Oe ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
      };
    }
    /**
     * Returns a value for bytes that's appropriate to put in a proto.
     *
     * Visible for testing.
     */


    function Xt(t, e) {
      return t.Oe ? e.toBase64() : e.toUint8Array();
    }
    /**
     * Returns a ByteString based on the proto string value.
     */


    function Ht(t, e) {
      return Kt(t, e.A());
    }

    function $t(t) {
      return d(!!t), P.I(function (t) {
        var e = Lt(t);
        return new S(e.seconds, e.nanos);
      }(t));
    }

    function Jt(t, e) {
      return function (t) {
        return new R(["projects", t.projectId, "databases", t.database]);
      }(t).child("documents").child(e).N();
    }

    function Zt(t) {
      var e = R.$(t);
      return d(me(e)), e;
    }

    function te(t, e) {
      return Jt(t.s, e.path);
    }

    function ee(t, e) {
      var n = Zt(e);
      return d(n.get(1) === t.s.projectId), d(!n.get(3) && !t.s.database || n.get(3) === t.s.database), new V(oe(n));
    }

    function ne(t, e) {
      return Jt(t.s, e);
    }

    function re(t) {
      var e = Zt(t); // In v1beta1 queries for collections at the root did not have a trailing
      // "/documents". In v1 all resource paths contain "/documents". Preserve the
      // ability to read the v1beta1 form for compatibility with queries persisted
      // in the local target cache.

      return 4 === e.length ? R.k() : oe(e);
    }

    function ie(t) {
      return new R(["projects", t.s.projectId, "databases", t.s.database]).N();
    }

    function oe(t) {
      return d(t.length > 4 && "documents" === t.get(4)), t.g(5)
      /** Creates an api.Document from key and fields (but no create/update time) */
      ;
    }

    function se(t, e, n) {
      return {
        name: te(t, e),
        fields: n.proto.mapValue.fields
      };
    }

    function ue(t, e) {
      var n;
      if (e instanceof Be) n = {
        update: se(t, e.key, e.value)
      };else if (e instanceof Ke) n = {
        "delete": te(t, e.key)
      };else if (e instanceof Ge) n = {
        update: se(t, e.key, e.data),
        updateMask: ge(e.Le)
      };else if (e instanceof We) n = {
        transform: {
          document: te(t, e.key),
          fieldTransforms: e.fieldTransforms.map(function (t) {
            return function (t, e) {
              var n = e.transform;
              if (n instanceof Ee) return {
                fieldPath: e.field.N(),
                setToServerValue: "REQUEST_TIME"
              };
              if (n instanceof Ne) return {
                fieldPath: e.field.N(),
                appendMissingElements: {
                  values: n.elements
                }
              };
              if (n instanceof Ae) return {
                fieldPath: e.field.N(),
                removeAllFromArray: {
                  values: n.elements
                }
              };
              if (n instanceof De) return {
                fieldPath: e.field.N(),
                increment: n.Be
              };
              throw p();
            }(0, t);
          })
        }
      };else {
        if (!(e instanceof Xe)) return p();
        n = {
          verify: te(t, e.key)
        };
      }
      return e.Ue.qe || (n.currentDocument = function (t, e) {
        return void 0 !== e.updateTime ? {
          updateTime: Ht(t, e.updateTime)
        } : void 0 !== e.exists ? {
          exists: e.exists
        } : p();
      }(t, e.Ue)), n;
    }

    function ae(t, e) {
      var n = e.currentDocument ? function (t) {
        return void 0 !== t.updateTime ? Oe.updateTime($t(t.updateTime)) : void 0 !== t.exists ? Oe.exists(t.exists) : Oe.Qe();
      }(e.currentDocument) : Oe.Qe();

      if (e.update) {
        e.update.name;
        var r = ee(t, e.update.name),
            i = new He({
          mapValue: {
            fields: e.update.fields
          }
        });

        if (e.updateMask) {
          var o = function (t) {
            var e = t.fieldPaths || [];
            return new ke(e.map(function (t) {
              return O.B(t);
            }));
          }(e.updateMask);

          return new Ge(r, i, o, n);
        }

        return new Be(r, i, n);
      }

      if (e["delete"]) {
        var s = ee(t, e["delete"]);
        return new Ke(s, n);
      }

      if (e.transform) {
        var u = ee(t, e.transform.document),
            a = e.transform.fieldTransforms.map(function (e) {
          return function (t, e) {
            var n = null;
            if ("setToServerValue" in e) d("REQUEST_TIME" === e.setToServerValue), n = new Ee();else if ("appendMissingElements" in e) {
              var r = e.appendMissingElements.values || [];
              n = new Ne(r);
            } else if ("removeAllFromArray" in e) {
              var i = e.removeAllFromArray.values || [];
              n = new Ae(i);
            } else "increment" in e ? n = new De(t, e.increment) : p();
            var o = O.B(e.fieldPath);
            return new Re(o, n);
          }(t, e);
        });
        return d(!0 === n.exists), new We(u, a);
      }

      if (e.verify) {
        var c = ee(t, e.verify);
        return new Xe(c, n);
      }

      return p();
    }

    function ce(t, e) {
      return {
        documents: [ne(t, e.path)]
      };
    }

    function he(t, e) {
      // Dissect the path into parent, collectionId, and optional key filter.
      var n = {
        structuredQuery: {}
      },
          r = e.path;
      null !== e.collectionGroup ? (n.parent = ne(t, r), n.structuredQuery.from = [{
        collectionId: e.collectionGroup,
        allDescendants: !0
      }]) : (n.parent = ne(t, r.p()), n.structuredQuery.from = [{
        collectionId: r.S()
      }]);

      var i = function (t) {
        if (0 !== t.length) {
          var e = t.map(function (t) {
            return t instanceof hn ? // visible for testing
            function (t) {
              if ("=="
              /* EQUAL */
              === t.op) {
                if (Mt(t.value)) return {
                  unaryFilter: {
                    field: pe(t.field),
                    op: "IS_NAN"
                  }
                };
                if (jt(t.value)) return {
                  unaryFilter: {
                    field: pe(t.field),
                    op: "IS_NULL"
                  }
                };
              }

              return {
                fieldFilter: {
                  field: pe(t.field),
                  op: (e = t.op, Gt[e]),
                  value: t.value
                }
              }; // visible for testing

              var e;
            }(t) : p();
          });
          return 1 === e.length ? e[0] : {
            compositeFilter: {
              op: "AND",
              filters: e
            }
          };
        }
      }(e.filters);

      i && (n.structuredQuery.where = i);

      var o = function (t) {
        if (0 !== t.length) return t.map(function (t) {
          return {
            field: pe((e = t).field),
            direction: (n = e.dir, Bt[n])
          }; // visible for testing

          var e, n;
        });
      }(e.orderBy);

      o && (n.structuredQuery.orderBy = o);

      var s = function (t, e) {
        return t.Oe || U(e) ? e : {
          value: e
        };
      }(t, e.limit);

      return null !== s && (n.structuredQuery.limit = s), e.startAt && (n.structuredQuery.startAt = fe(e.startAt)), e.endAt && (n.structuredQuery.endAt = fe(e.endAt)), n;
    }

    function fe(t) {
      return {
        before: t.before,
        values: t.position
      };
    }

    function le(t) {
      var e = !!t.before,
          n = t.values || [];
      return new vn(n, e);
    } // visible for testing


    function pe(t) {
      return {
        fieldPath: t.N()
      };
    }

    function de(t) {
      return O.B(t.fieldPath);
    }

    function ye(t) {
      return hn.create(de(t.fieldFilter.field), function (t) {
        switch (t) {
          case "EQUAL":
            return "=="
            /* EQUAL */
            ;

          case "GREATER_THAN":
            return ">"
            /* GREATER_THAN */
            ;

          case "GREATER_THAN_OR_EQUAL":
            return ">="
            /* GREATER_THAN_OR_EQUAL */
            ;

          case "LESS_THAN":
            return "<"
            /* LESS_THAN */
            ;

          case "LESS_THAN_OR_EQUAL":
            return "<="
            /* LESS_THAN_OR_EQUAL */
            ;

          case "ARRAY_CONTAINS":
            return "array-contains"
            /* ARRAY_CONTAINS */
            ;

          case "IN":
            return "in"
            /* IN */
            ;

          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any"
            /* ARRAY_CONTAINS_ANY */
            ;

          case "OPERATOR_UNSPECIFIED":
          default:
            return p();
        }
      }(t.fieldFilter.op), t.fieldFilter.value);
    }

    function ve(t) {
      switch (t.unaryFilter.op) {
        case "IS_NAN":
          var e = de(t.unaryFilter.field);
          return hn.create(e, "=="
          /* EQUAL */
          , {
            doubleValue: NaN
          });

        case "IS_NULL":
          var n = de(t.unaryFilter.field);
          return hn.create(n, "=="
          /* EQUAL */
          , {
            nullValue: "NULL_VALUE"
          });

        case "OPERATOR_UNSPECIFIED":
        default:
          return p();
      }
    }

    function ge(t) {
      var e = [];
      return t.fields.forEach(function (t) {
        return e.push(t.N());
      }), {
        fieldPaths: e
      };
    }

    function me(t) {
      // Resource names have at least 4 components (project ID, database ID)
      return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
    }
    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** Represents a transform within a TransformMutation. */


    var we = function we() {
      // Make sure that the structural type of `TransformOperation` is unique.
      // See https://github.com/microsoft/TypeScript/issues/5451
      this.je = void 0;
    };
    /**
     * Computes the local transform result against the provided `previousValue`,
     * optionally using the provided localWriteTime.
     */


    function be(t, e, n) {
      return t instanceof Ee ? function (t, e) {
        var n = {
          fields: {
            __type__: {
              stringValue: "server_timestamp"
            },
            __local_write_time__: {
              timestampValue: {
                seconds: t.seconds,
                nanos: t.nanoseconds
              }
            }
          }
        };
        return e && (n.fields.__previous_value__ = e), {
          mapValue: n
        };
      }(n, e) : t instanceof Ne ? Te(t, e) : t instanceof Ae ? xe(t, e) : function (t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var n = Ie(t, e),
            r = Se(n) + Se(t.Be);
        return Ct(n) && Ct(t.Be) ? Wt(r) : Qt(t.serializer, r);
      }(t, e);
    }
    /**
     * Computes a final transform result after the transform has been acknowledged
     * by the server, potentially using the server-provided transformResult.
     */


    function _e(t, e, n) {
      // The server just sends null as the transform result for array operations,
      // so we have to calculate a result the same as we do for local
      // applications.
      return t instanceof Ne ? Te(t, e) : t instanceof Ae ? xe(t, e) : n;
    }
    /**
     * If this transform operation is not idempotent, returns the base value to
     * persist for this transform. If a base value is returned, the transform
     * operation is always applied to this base value, even if document has
     * already been updated.
     *
     * Base values provide consistent behavior for non-idempotent transforms and
     * allow us to return the same latency-compensated value even if the backend
     * has already applied the transform operation. The base value is null for
     * idempotent transforms, as they can be re-played even if the backend has
     * already applied them.
     *
     * @return a base value to store along with the mutation, or null for
     * idempotent transforms.
     */


    function Ie(t, e) {
      return t instanceof De ? Ct(n = e) || function (t) {
        return !!t && "doubleValue" in t;
      }(n) ? e : {
        integerValue: 0
      } : null;
      var n;
    }
    /** Transforms a value into a server-generated timestamp. */


    var Ee =
    /** @class */
    function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return e.__extends(n, t), n;
    }(we),
        Ne =
    /** @class */
    function (t) {
      function n(e) {
        var n = this;
        return (n = t.call(this) || this).elements = e, n;
      }

      return e.__extends(n, t), n;
    }(we);
    /** Transforms an array value via a union operation. */


    function Te(t, e) {
      for (var n = Pe(e), r = function r(t) {
        n.some(function (e) {
          return Dt(e, t);
        }) || n.push(t);
      }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
      }

      return {
        arrayValue: {
          values: n
        }
      };
    }
    /** Transforms an array value via a remove operation. */


    var Ae =
    /** @class */
    function (t) {
      function n(e) {
        var n = this;
        return (n = t.call(this) || this).elements = e, n;
      }

      return e.__extends(n, t), n;
    }(we);

    function xe(t, e) {
      for (var n = Pe(e), r = function r(t) {
        n = n.filter(function (e) {
          return !Dt(e, t);
        });
      }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
      }

      return {
        arrayValue: {
          values: n
        }
      };
    }
    /**
     * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
     * transforms. Converts all field values to integers or doubles, but unlike the
     * backend does not cap integer values at 2^63. Instead, JavaScript number
     * arithmetic is used and precision loss can occur for values greater than 2^53.
     */


    var De =
    /** @class */
    function (t) {
      function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).serializer = e, r.Be = n, r;
      }

      return e.__extends(n, t), n;
    }(we);

    function Se(t) {
      return Ot(t.integerValue || t.doubleValue);
    }

    function Pe(t) {
      return Ft(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Provides a set of fields that can be used to partially patch a document.
     * FieldMask is used in conjunction with ObjectValue.
     * Examples:
     *   foo - Overwrites foo entirely with the provided value. If foo is not
     *         present in the companion ObjectValue, the field is deleted.
     *   foo.bar - Overwrites only the field bar of the object foo.
     *             If foo is not an object, foo is replaced with an object
     *             containing foo
     */


    var ke =
    /** @class */
    function () {
      function t(t) {
        this.fields = t, // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(O.P)
        /**
        * Verifies that `fieldPath` is included by at least one field in this field
        * mask.
        *
        * This is an O(n) operation, where `n` is the size of the field mask.
        */
        ;
      }

      return t.prototype.Ke = function (t) {
        for (var e = 0, n = this.fields; e < n.length; e++) {
          if (n[e].D(t)) return !0;
        }

        return !1;
      }, t.prototype.isEqual = function (t) {
        return w(this.fields, t.fields, function (t, e) {
          return t.isEqual(e);
        });
      }, t;
    }(),
        Re = function Re(t, e) {
      this.field = t, this.transform = e;
    };
    /** A field path and the TransformOperation to perform upon it. */

    /** The result of successfully applying a mutation to the backend. */


    var Le = function Le(
    /**
         * The version at which the mutation was committed:
         *
         * - For most operations, this is the updateTime in the WriteResult.
         * - For deletes, the commitTime of the WriteResponse (because deletes are
         *   not stored and have no updateTime).
         *
         * Note that these versions can be different: No-op writes will not change
         * the updateTime even though the commitTime advances.
         */
    t,
    /**
         * The resulting fields returned from the backend after a
         * TransformMutation has been committed. Contains one FieldValue for each
         * FieldTransform that was in the mutation.
         *
         * Will be null if the mutation was not a TransformMutation.
         */
    e) {
      this.version = t, this.transformResults = e;
    },
        Oe =
    /** @class */
    function () {
      function t(t, e) {
        this.updateTime = t, this.exists = e
        /** Creates a new empty Precondition. */
        ;
      }

      return t.Qe = function () {
        return new t();
      },
      /** Creates a new Precondition with an exists flag. */
      t.exists = function (e) {
        return new t(void 0, e);
      },
      /** Creates a new Precondition based on a version a document exists at. */
      t.updateTime = function (e) {
        return new t(e);
      }, Object.defineProperty(t.prototype, "qe", {
        /** Returns whether this Precondition is empty. */
        get: function get() {
          return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.isEqual = function (t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
      }, t;
    }();
    /**
     * Encodes a precondition for a mutation. This follows the model that the
     * backend accepts with the special case of an explicit "empty" precondition
     * (meaning no precondition).
     */

    /**
     * Returns true if the preconditions is valid for the given document
     * (or null if no document is available).
     */


    function Ve(t, e) {
      return void 0 !== t.updateTime ? e instanceof tn && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof tn;
    }
    /**
     * A mutation describes a self-contained change to a document. Mutations can
     * create, replace, delete, and update subsets of documents.
     *
     * Mutations not only act on the value of the document but also its version.
     *
     * For local mutations (mutations that haven't been committed yet), we preserve
     * the existing version for Set, Patch, and Transform mutations. For Delete
     * mutations, we reset the version to 0.
     *
     * Here's the expected transition table.
     *
     * MUTATION           APPLIED TO            RESULTS IN
     *
     * SetMutation        Document(v3)          Document(v3)
     * SetMutation        NoDocument(v3)        Document(v0)
     * SetMutation        null                  Document(v0)
     * PatchMutation      Document(v3)          Document(v3)
     * PatchMutation      NoDocument(v3)        NoDocument(v3)
     * PatchMutation      null                  null
     * TransformMutation  Document(v3)          Document(v3)
     * TransformMutation  NoDocument(v3)        NoDocument(v3)
     * TransformMutation  null                  null
     * DeleteMutation     Document(v3)          NoDocument(v0)
     * DeleteMutation     NoDocument(v3)        NoDocument(v0)
     * DeleteMutation     null                  NoDocument(v0)
     *
     * For acknowledged mutations, we use the updateTime of the WriteResponse as
     * the resulting version for Set, Patch, and Transform mutations. As deletes
     * have no explicit update time, we use the commitTime of the WriteResponse for
     * Delete mutations.
     *
     * If a mutation is acknowledged by the backend but fails the precondition check
     * locally, we return an `UnknownDocument` and rely on Watch to send us the
     * updated version.
     *
     * Note that TransformMutations don't create Documents (in the case of being
     * applied to a NoDocument), even though they would on the backend. This is
     * because the client always combines the TransformMutation with a SetMutation
     * or PatchMutation and we only want to apply the transform if the prior
     * mutation resulted in a Document (always true for a SetMutation, but not
     * necessarily for a PatchMutation).
     *
     * ## Subclassing Notes
     *
     * Subclasses of Mutation need to implement applyToRemoteDocument() and
     * applyToLocalView() to implement the actual behavior of applying the mutation
     * to some source document.
     */


    var Ue = function Ue() {};
    /**
     * Applies this mutation to the given MaybeDocument or null for the purposes
     * of computing a new remote document. If the input document doesn't match the
     * expected state (e.g. it is null or outdated), an `UnknownDocument` can be
     * returned.
     *
     * @param mutation The mutation to apply.
     * @param maybeDoc The document to mutate. The input document can be null if
     *     the client has no knowledge of the pre-mutation state of the document.
     * @param mutationResult The result of applying the mutation from the backend.
     * @return The mutated document. The returned document may be an
     *     UnknownDocument if the mutation could not be applied to the locally
     *     cached base document.
     */


    function Ce(t, e, n) {
      return t instanceof Be ? function (t, e, n) {
        // Unlike applySetMutationToLocalView, if we're applying a mutation to a
        // remote document the server has accepted the mutation so the precondition
        // must have held.
        return new tn(t.key, n.version, t.value, {
          hasCommittedMutations: !0
        });
      }(t, 0, n) : t instanceof Ge ? function (t, e, n) {
        if (!Ve(t.Ue, e)) // Since the mutation was not rejected, we know that the  precondition
          // matched on the backend. We therefore must not have the expected version
          // of the document in our cache and return an UnknownDocument with the
          // known updateTime.
          return new nn(t.key, n.version);
        var r = ze(t, e);
        return new tn(t.key, n.version, r, {
          hasCommittedMutations: !0
        });
      }(t, e, n) : t instanceof We ? function (t, e, n) {
        if (d(null != n.transformResults), !Ve(t.Ue, e)) // Since the mutation was not rejected, we know that the  precondition
          // matched on the backend. We therefore must not have the expected version
          // of the document in our cache and return an UnknownDocument with the
          // known updateTime.
          return new nn(t.key, n.version);

        var r = Qe(t, e),
            i =
        /**
        * Creates a list of "transform results" (a transform result is a field value
        * representing the result of applying a transform) for use after a
        * TransformMutation has been acknowledged by the server.
        *
        * @param fieldTransforms The field transforms to apply the result to.
        * @param baseDoc The document prior to applying this mutation batch.
        * @param serverTransformResults The transform results received by the server.
        * @return The transform results list.
        */
        function (t, e, n) {
          var r = [];
          d(t.length === n.length);

          for (var i = 0; i < n.length; i++) {
            var o = t[i],
                s = o.transform,
                u = null;
            e instanceof tn && (u = e.field(o.field)), r.push(_e(s, u, n[i]));
          }

          return r;
        }(t.fieldTransforms, e, n.transformResults),
            o = n.version,
            s = Ye(t, r.data(), i);

        return new tn(t.key, o, s, {
          hasCommittedMutations: !0
        });
      }(t, e, n) : function (t, e, n) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return new en(t.key, n.version, {
          hasCommittedMutations: !0
        });
      }(t, 0, n);
    }
    /**
     * Applies this mutation to the given MaybeDocument or null for the purposes
     * of computing the new local view of a document. Both the input and returned
     * documents can be null.
     *
     * @param mutation The mutation to apply.
     * @param maybeDoc The document to mutate. The input document can be null if
     *     the client has no knowledge of the pre-mutation state of the document.
     * @param baseDoc The state of the document prior to this mutation batch. The
     *     input document can be null if the client has no knowledge of the
     *     pre-mutation state of the document.
     * @param localWriteTime A timestamp indicating the local write time of the
     *     batch this mutation is a part of.
     * @return The mutated document. The returned document may be null, but only
     *     if maybeDoc was null and the mutation would not create a new document.
     */


    function Fe(t, e, n, r) {
      return t instanceof Be ? function (t, e) {
        if (!Ve(t.Ue, e)) return e;
        var n = qe(e);
        return new tn(t.key, n, t.value, {
          Ge: !0
        });
      }(t, e) : t instanceof Ge ? function (t, e) {
        if (!Ve(t.Ue, e)) return e;
        var n = qe(e),
            r = ze(t, e);
        return new tn(t.key, n, r, {
          Ge: !0
        });
      }(t, e) : t instanceof We ? function (t, e, n, r) {
        if (!Ve(t.Ue, e)) return e;

        var i = Qe(t, e),
            o = function (t, e, n, r) {
          for (var i = [], o = 0, s = t; o < s.length; o++) {
            var u = s[o],
                a = u.transform,
                c = null;
            n instanceof tn && (c = n.field(u.field)), null === c && r instanceof tn && ( // If the current document does not contain a value for the mutated
            // field, use the value that existed before applying this mutation
            // batch. This solves an edge case where a PatchMutation clears the
            // values in a nested map before the TransformMutation is applied.
            c = r.field(u.field)), i.push(be(a, c, e));
          }

          return i;
        }(t.fieldTransforms, n, e, r),
            s = Ye(t, i.data(), o);

        return new tn(t.key, i.version, s, {
          Ge: !0
        });
      }(t, e, r, n) : function (t, e) {
        return Ve(t.Ue, e) ? new en(t.key, P.min()) : e;
      }(t, e);
    }
    /**
     * If this mutation is not idempotent, returns the base value to persist with
     * this mutation. If a base value is returned, the mutation is always applied
     * to this base value, even if document has already been updated.
     *
     * The base value is a sparse object that consists of only the document
     * fields for which this mutation contains a non-idempotent transformation
     * (e.g. a numeric increment). The provided value guarantees consistent
     * behavior for non-idempotent transforms and allow us to return the same
     * latency-compensated value even if the backend has already applied the
     * mutation. The base value is null for idempotent mutations, as they can be
     * re-played even if the backend has already applied them.
     *
     * @return a base value to store along with the mutation, or null for
     * idempotent mutations.
     */


    function je(t, e) {
      return t instanceof We ? function (t, e) {
        for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
          var o = i[r],
              s = e instanceof tn ? e.field(o.field) : void 0,
              u = Ie(o.transform, s || null);
          null != u && (n = null == n ? new $e().set(o.field, u) : n.set(o.field, u));
        }

        return n ? n.ze() : null;
      }(t, e) : null;
    }

    function Me(t, e) {
      return t.type === e.type && !!t.key.isEqual(e.key) && !!t.Ue.isEqual(e.Ue) && (0
      /* Set */
      === t.type ? t.value.isEqual(e.value) : 1
      /* Patch */
      === t.type ? t.data.isEqual(e.data) && t.Le.isEqual(e.Le) : 2
      /* Transform */
      !== t.type || w(t.fieldTransforms, t.fieldTransforms, function (t, e) {
        return function (t, e) {
          return t.field.isEqual(e.field) && function (t, e) {
            return t instanceof Ne && e instanceof Ne || t instanceof Ae && e instanceof Ae ? w(t.elements, e.elements, Dt) : t instanceof De && e instanceof De ? Dt(t.Be, e.Be) : t instanceof Ee && e instanceof Ee;
          }(t.transform, e.transform);
        }(t, e);
      }));
    }
    /**
     * Returns the version from the given document for use as the result of a
     * mutation. Mutations are defined to return the version of the base document
     * only if it is an existing document. Deleted and unknown documents have a
     * post-mutation version of SnapshotVersion.min().
     */


    function qe(t) {
      return t instanceof tn ? t.version : P.min();
    }
    /**
     * A mutation that creates or replaces the document at the given key with the
     * object value contents.
     */


    var Be =
    /** @class */
    function (t) {
      function n(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).key = e, i.value = n, i.Ue = r, i.type = 0
        /* Set */
        , i;
      }

      return e.__extends(n, t), n;
    }(Ue),
        Ge =
    /** @class */
    function (t) {
      function n(e, n, r, i) {
        var o = this;
        return (o = t.call(this) || this).key = e, o.data = n, o.Le = r, o.Ue = i, o.type = 1
        /* Patch */
        , o;
      }

      return e.__extends(n, t), n;
    }(Ue);

    function ze(t, e) {
      return function (t, e) {
        var n = new $e(e);
        return t.Le.fields.forEach(function (e) {
          if (!e._()) {
            var r = t.data.field(e);
            null !== r ? n.set(e, r) : n["delete"](e);
          }
        }), n.ze();
      }(t, e instanceof tn ? e.data() : He.empty());
    }

    var We =
    /** @class */
    function (t) {
      function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.fieldTransforms = n, r.type = 2
        /* Transform */
        , // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        r.Ue = Oe.exists(!0), r;
      }

      return e.__extends(n, t), n;
    }(Ue);

    function Qe(t, e) {
      return e;
    }

    function Ye(t, e, n) {
      for (var r = new $e(e), i = 0; i < t.fieldTransforms.length; i++) {
        var o = t.fieldTransforms[i];
        r.set(o.field, n[i]);
      }

      return r.ze();
    }
    /** A mutation that deletes the document at the given key. */


    var Ke =
    /** @class */
    function (t) {
      function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.Ue = n, r.type = 3
        /* Delete */
        , r;
      }

      return e.__extends(n, t), n;
    }(Ue),
        Xe =
    /** @class */
    function (t) {
      function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.Ue = n, r.type = 4
        /* Verify */
        , r;
      }

      return e.__extends(n, t), n;
    }(Ue),
        He =
    /** @class */
    function () {
      function t(t) {
        this.proto = t;
      }

      return t.empty = function () {
        return new t({
          mapValue: {}
        });
      },
      /**
       * Returns the value at the given path or null.
       *
       * @param path the path to search
       * @return The value at the path or if there it doesn't exist.
       */
      t.prototype.field = function (t) {
        if (t._()) return this.proto;

        for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
          if (!e.mapValue.fields) return null;
          if (!qt(e = e.mapValue.fields[t.get(n)])) return null;
        }

        return (e = (e.mapValue.fields || {})[t.S()]) || null;
      }, t.prototype.isEqual = function (t) {
        return Dt(this.proto, t.proto);
      }, t;
    }(),
        $e =
    /** @class */
    function () {
      /**
       * @param baseObject The object to mutate.
       */
      function t(t) {
        void 0 === t && (t = He.empty()), this.He = t,
        /** A map that contains the accumulated changes in this builder. */
        this.Ye = new Map();
      }
      /**
       * Sets the field to the provided value.
       *
       * @param path The field path to set.
       * @param value The value to set.
       * @return The current Builder instance.
       */


      return t.prototype.set = function (t, e) {
        return this.Je(t, e), this;
      },
      /**
       * Removes the field at the specified path. If there is no field at the
       * specified path, nothing is changed.
       *
       * @param path The field path to remove.
       * @return The current Builder instance.
       */
      t.prototype["delete"] = function (t) {
        return this.Je(t, null), this;
      },
      /**
       * Adds `value` to the overlay map at `path`. Creates nested map entries if
       * needed.
       */
      t.prototype.Je = function (t, e) {
        for (var n = this.Ye, r = 0; r < t.length - 1; ++r) {
          var i = t.get(r),
              o = n.get(i);
          o instanceof Map ? // Re-use a previously created map
          n = o : o && 10
          /* ObjectValue */
          === xt(o) ? ( // Convert the existing Protobuf MapValue into a map
          o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : ( // Create an empty map to represent the current nesting level
          o = new Map(), n.set(i, o), n = o);
        }

        n.set(t.S(), e);
      },
      /** Returns an ObjectValue with all mutations applied. */
      t.prototype.ze = function () {
        var t = this.Xe(O.k(), this.Ye);
        return null != t ? new He(t) : this.He;
      },
      /**
       * Applies any overlays from `currentOverlays` that exist at `currentPath`
       * and returns the merged data at `currentPath` (or null if there were no
       * changes).
       *
       * @param currentPath The path at the current nesting level. Can be set to
       * FieldValue.emptyPath() to represent the root.
       * @param currentOverlays The overlays at the current nesting level in the
       * same format as `overlayMap`.
       * @return The merged data at `currentPath` or null if no modifications
       * were applied.
       */
      t.prototype.Xe = function (t, e) {
        var n = this,
            r = !1,
            i = this.He.field(t),
            o = qt(i) ? // If there is already data at the current path, base our
        Object.assign({}, i.mapValue.fields) : {};
        return e.forEach(function (e, i) {
          if (e instanceof Map) {
            var s = n.Xe(t.child(i), e);
            null != s && (o[i] = s, r = !0);
          } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
        }), r ? {
          mapValue: {
            fields: o
          }
        } : null;
      }, t;
    }();
    /**
     * Returns a FieldMask built from all fields in a MapValue.
     */


    function Je(t) {
      var e = [];
      return N(t.fields || {}, function (t, n) {
        var r = new O([t]);

        if (qt(n)) {
          var i = Je(n.mapValue).fields;
          if (0 === i.length) // Preserve the empty map by adding it to the FieldMask.
            e.push(r);else // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (var o = 0, s = i; o < s.length; o++) {
              var u = s[o];
              e.push(r.child(u));
            }
        } else // For nested and non-empty ObjectValues, add the FieldPath of the leaf
          // nodes.
          e.push(r);
      }), new ke(e)
      /**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */

      /**
      * The result of a lookup for a given path may be an existing document or a
      * marker that this document does not exist at a given version.
      */
      ;
    }

    var Ze = function Ze(t, e) {
      this.key = t, this.version = e;
    },
        tn =
    /** @class */
    function (t) {
      function n(e, n, r, i) {
        var o = this;
        return (o = t.call(this, e, n) || this).Ze = r, o.Ge = !!i.Ge, o.hasCommittedMutations = !!i.hasCommittedMutations, o;
      }

      return e.__extends(n, t), n.prototype.field = function (t) {
        return this.Ze.field(t);
      }, n.prototype.data = function () {
        return this.Ze;
      }, n.prototype.tn = function () {
        return this.Ze.proto;
      }, n.prototype.isEqual = function (t) {
        return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.Ge === t.Ge && this.hasCommittedMutations === t.hasCommittedMutations && this.Ze.isEqual(t.Ze);
      }, n.prototype.toString = function () {
        return "Document(" + this.key + ", " + this.version + ", " + this.Ze.toString() + ", {hasLocalMutations: " + this.Ge + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
      }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function get() {
          return this.Ge || this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
      }), n;
    }(Ze),
        en =
    /** @class */
    function (t) {
      function n(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), i;
      }

      return e.__extends(n, t), n.prototype.toString = function () {
        return "NoDocument(" + this.key + ", " + this.version + ")";
      }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function get() {
          return this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype.isEqual = function (t) {
        return t instanceof n && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
      }, n;
    }(Ze),
        nn =
    /** @class */
    function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return e.__extends(n, t), n.prototype.toString = function () {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
      }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function get() {
          return !0;
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype.isEqual = function (t) {
        return t instanceof n && t.version.isEqual(this.version) && t.key.isEqual(this.key);
      }, n;
    }(Ze),
        rn =
    /** @class */
    function () {
      /**
       * Initializes a Query with a path and optional additional query constraints.
       * Path must currently be empty if this is a collection group query.
       */
      function t(t, e, n, r, i, o
      /* First */
      , s, u) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.en = n, this.filters = r, this.limit = i, this.nn = o, this.startAt = s, this.endAt = u, this.sn = null, // The corresponding `Target` of this `Query` instance.
        this.rn = null, this.startAt && this.on(this.startAt), this.endAt && this.on(this.endAt);
      }

      return t.hn = function (e) {
        return new t(e);
      }, Object.defineProperty(t.prototype, "orderBy", {
        get: function get() {
          if (null === this.sn) {
            this.sn = [];
            var t = this.an(),
                e = this.un();
            if (null !== t && null === e) // In order to implicitly add key ordering, we must also add the
              // inequality filter field for it to be a valid query.
              // Note that the default inequality field and key ordering is ascending.
              t.O() || this.sn.push(new bn(t)), this.sn.push(new bn(O.L(), "asc"
              /* ASCENDING */
              ));else {
              for (var n = !1, r = 0, i = this.en; r < i.length; r++) {
                var o = i[r];
                this.sn.push(o), o.field.O() && (n = !0);
              }

              if (!n) {
                // The order of the implicit key ordering always matches the last
                // explicit order by
                var s = this.en.length > 0 ? this.en[this.en.length - 1].dir : "asc"
                /* ASCENDING */
                ;
                this.sn.push(new bn(O.L(), s));
              }
            }
          }

          return this.sn;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.cn = function (e) {
        var n = this.filters.concat([e]);
        return new t(this.path, this.collectionGroup, this.en.slice(), n, this.limit, this.nn, this.startAt, this.endAt);
      }, t.prototype.ln = function (e) {
        // TODO(dimond): validate that orderBy does not list the same key twice.
        var n = this.en.concat([e]);
        return new t(this.path, this.collectionGroup, n, this.filters.slice(), this.limit, this.nn, this.startAt, this.endAt);
      }, t.prototype._n = function (e) {
        return new t(this.path, this.collectionGroup, this.en.slice(), this.filters.slice(), e, "F"
        /* First */
        , this.startAt, this.endAt);
      }, t.prototype.fn = function (e) {
        return new t(this.path, this.collectionGroup, this.en.slice(), this.filters.slice(), e, "L"
        /* Last */
        , this.startAt, this.endAt);
      }, t.prototype.dn = function (e) {
        return new t(this.path, this.collectionGroup, this.en.slice(), this.filters.slice(), this.limit, this.nn, e, this.endAt);
      }, t.prototype.wn = function (e) {
        return new t(this.path, this.collectionGroup, this.en.slice(), this.filters.slice(), this.limit, this.nn, this.startAt, e);
      },
      /**
       * Helper to convert a collection group query into a collection query at a
       * specific path. This is used when executing collection group queries, since
       * we have to split the query into a set of collection queries at multiple
       * paths.
       */
      t.prototype.Tn = function (e) {
        return new t(e,
        /*collectionGroup=*/
        null, this.en.slice(), this.filters.slice(), this.limit, this.nn, this.startAt, this.endAt);
      },
      /**
       * Returns true if this query does not specify any query constraints that
       * could remove results.
       */
      t.prototype.En = function () {
        return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.en.length || 1 === this.en.length && this.en[0].field.O());
      }, t.prototype.In = function () {
        return !U(this.limit) && "F"
        /* First */
        === this.nn;
      }, t.prototype.mn = function () {
        return !U(this.limit) && "L"
        /* Last */
        === this.nn;
      }, t.prototype.un = function () {
        return this.en.length > 0 ? this.en[0].field : null;
      }, t.prototype.an = function () {
        for (var t = 0, e = this.filters; t < e.length; t++) {
          var n = e[t];
          if (n instanceof hn && n.An()) return n.field;
        }

        return null;
      }, // Checks if any of the provided Operators are included in the query and
      // returns the first one that is, or null if none are.
      t.prototype.Rn = function (t) {
        for (var e = 0, n = this.filters; e < n.length; e++) {
          var r = n[e];
          if (r instanceof hn && t.indexOf(r.op) >= 0) return r.op;
        }

        return null;
      }, t.prototype.Pn = function () {
        return G(this.We());
      }, t.prototype.Vn = function () {
        return null !== this.collectionGroup;
      },
      /**
       * Converts this `Query` instance to it's corresponding `Target`
       * representation.
       */
      t.prototype.We = function () {
        if (!this.rn) if ("F"
        /* First */
        === this.nn) this.rn = M(this.path, this.collectionGroup, this.orderBy, this.filters, this.limit, this.startAt, this.endAt);else {
          for ( // Flip the orderBy directions since we want the last results
          var t = [], e = 0, n = this.orderBy; e < n.length; e++) {
            var r = n[e],
                i = "desc"
            /* DESCENDING */
            === r.dir ? "asc"
            /* ASCENDING */
            : "desc"
            /* DESCENDING */
            ;
            t.push(new bn(r.field, i));
          } // We need to swap the cursors to match the now-flipped query ordering.


          var o = this.endAt ? new vn(this.endAt.position, !this.endAt.before) : null,
              s = this.startAt ? new vn(this.startAt.position, !this.startAt.before) : null; // Now return as a LimitType.First query.

          this.rn = M(this.path, this.collectionGroup, t, this.filters, this.limit, o, s);
        }
        return this.rn;
      }, t.prototype.on = function (t) {}, t;
    }();
    /**
     * Represents a document in Firestore with a key, version, data and whether the
     * data has local mutations applied to it.
     */


    function on(t, e) {
      return B(t.We(), e.We()) && t.nn === e.nn;
    } // TODO(b/29183165): This is used to get a unique string from a query to, for
    // example, use as a dictionary key, but the implementation is subject to
    // collisions. Make it collision-free.


    function sn(t) {
      return q(t.We()) + "|lt:" + t.nn;
    }

    function un(t) {
      return "Query(target=" + function (t) {
        var e = t.path.N();
        return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), t.filters.length > 0 && (e += ", filters: [" + t.filters.map(function (t) {
          return (e = t).field.N() + " " + e.op + " " + Rt(e.value);
          /** Returns a debug description for `filter`. */

          var e;
          /** Filter that matches on key fields (i.e. '__name__'). */
        }).join(", ") + "]"), U(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map(function (t) {
          return (e = t).field.N() + " (" + e.dir + ")";
          var e;
        }).join(", ") + "]"), t.startAt && (e += ", startAt: " + gn(t.startAt)), t.endAt && (e += ", endAt: " + gn(t.endAt)), "Target(" + e + ")";
      }(t.We()) + "; limitType=" + t.nn + ")";
    }
    /** Returns whether `doc` matches the constraints of `query`. */


    function an(t, e) {
      return function (t, e) {
        var n = e.key.path;
        return null !== t.collectionGroup ? e.key.U(t.collectionGroup) && t.path.D(n) : V.W(t.path) ? t.path.isEqual(n) : t.path.C(n);
      }(t, e) && function (t, e) {
        for (var n = 0, r = t.en; n < r.length; n++) {
          var i = r[n]; // order by key always matches

          if (!i.field.O() && null === e.field(i.field)) return !1;
        }

        return !0;
      }(t, e) && function (t, e) {
        for (var n = 0, r = t.filters; n < r.length; n++) {
          if (!r[n].matches(e)) return !1;
        }

        return !0;
      }(t, e) && function (t, e) {
        return !(t.startAt && !mn(t.startAt, t.orderBy, e)) && (!t.endAt || !mn(t.endAt, t.orderBy, e));
      }(t, e);
    }

    function cn(t) {
      return function (e, n) {
        for (var r = !1, i = 0, o = t.orderBy; i < o.length; i++) {
          var s = o[i],
              u = _n(s, e, n);

          if (0 !== u) return u;
          r = r || s.field.O();
        }

        return 0;
      };
    }

    var hn =
    /** @class */
    function (t) {
      function n(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).field = e, i.op = n, i.value = r, i;
      }
      /**
       * Creates a filter based on the provided arguments.
       */


      return e.__extends(n, t), n.create = function (t, e, r) {
        if (t.O()) return "in"
        /* IN */
        === e ? new ln(t, r) : new fn(t, e, r);

        if (jt(r)) {
          if ("=="
          /* EQUAL */
          !== e) throw new D(x.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
          return new n(t, e, r);
        }

        if (Mt(r)) {
          if ("=="
          /* EQUAL */
          !== e) throw new D(x.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
          return new n(t, e, r);
        }

        return "array-contains"
        /* ARRAY_CONTAINS */
        === e ? new pn(t, r) : "in"
        /* IN */
        === e ? new dn(t, r) : "array-contains-any"
        /* ARRAY_CONTAINS_ANY */
        === e ? new yn(t, r) : new n(t, e, r);
      }, n.prototype.matches = function (t) {
        var e = t.field(this.field); // Only compare types with matching backend order (such as double and int).

        return null !== e && xt(this.value) === xt(e) && this.gn(Pt(e, this.value));
      }, n.prototype.gn = function (t) {
        switch (this.op) {
          case "<"
          /* LESS_THAN */
          :
            return t < 0;

          case "<="
          /* LESS_THAN_OR_EQUAL */
          :
            return t <= 0;

          case "=="
          /* EQUAL */
          :
            return 0 === t;

          case ">"
          /* GREATER_THAN */
          :
            return t > 0;

          case ">="
          /* GREATER_THAN_OR_EQUAL */
          :
            return t >= 0;

          default:
            return p();
        }
      }, n.prototype.An = function () {
        return ["<"
        /* LESS_THAN */
        , "<="
        /* LESS_THAN_OR_EQUAL */
        , ">"
        /* GREATER_THAN */
        , ">="
        /* GREATER_THAN_OR_EQUAL */
        ].indexOf(this.op) >= 0;
      }, n;
    }(function () {});

    var fn =
    /** @class */
    function (t) {
      function n(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n, r) || this).key = V.q(r.referenceValue), i;
      }

      return e.__extends(n, t), n.prototype.matches = function (t) {
        var e = V.P(t.key, this.key);
        return this.gn(e);
      }, n;
    }(hn),
        ln =
    /** @class */
    function (t) {
      function n(e, n) {
        var r = this;
        return (r = t.call(this, e, "in"
        /* IN */
        , n) || this).keys = (n.arrayValue.values || []).map(function (t) {
          return V.q(t.referenceValue);
        }), r;
      }

      return e.__extends(n, t), n.prototype.matches = function (t) {
        return this.keys.some(function (e) {
          return e.isEqual(t.key);
        });
      }, n;
    }(hn),
        pn =
    /** @class */
    function (t) {
      function n(e, n) {
        return t.call(this, e, "array-contains"
        /* ARRAY_CONTAINS */
        , n) || this;
      }

      return e.__extends(n, t), n.prototype.matches = function (t) {
        var e = t.field(this.field);
        return Ft(e) && St(e.arrayValue, this.value);
      }, n;
    }(hn),
        dn =
    /** @class */
    function (t) {
      function n(e, n) {
        return t.call(this, e, "in"
        /* IN */
        , n) || this;
      }

      return e.__extends(n, t), n.prototype.matches = function (t) {
        var e = t.field(this.field);
        return null !== e && St(this.value.arrayValue, e);
      }, n;
    }(hn),
        yn =
    /** @class */
    function (t) {
      function n(e, n) {
        return t.call(this, e, "array-contains-any"
        /* ARRAY_CONTAINS_ANY */
        , n) || this;
      }

      return e.__extends(n, t), n.prototype.matches = function (t) {
        var e = this,
            n = t.field(this.field);
        return !(!Ft(n) || !n.arrayValue.values) && n.arrayValue.values.some(function (t) {
          return St(e.value.arrayValue, t);
        });
      }, n;
    }(hn),
        vn = function vn(t, e) {
      this.position = t, this.before = e;
    };
    /** Filter that matches on key fields within an array. */


    function gn(t) {
      // TODO(b/29183165): Make this collision robust.
      return (t.before ? "b" : "a") + ":" + t.position.map(function (t) {
        return Rt(t);
      }).join(",");
    }
    /**
     * Returns true if a document sorts before a bound using the provided sort
     * order.
     */


    function mn(t, e, n) {
      for (var r = 0, i = 0; i < t.position.length; i++) {
        var o = e[i],
            s = t.position[i];
        if (r = o.field.O() ? V.P(V.q(s.referenceValue), n.key) : Pt(s, n.field(o.field)), "desc"
        /* DESCENDING */
        === o.dir && (r *= -1), 0 !== r) break;
      }

      return t.before ? r <= 0 : r < 0;
    }

    function wn(t, e) {
      if (null === t) return null === e;
      if (null === e) return !1;
      if (t.before !== e.before || t.position.length !== e.position.length) return !1;

      for (var n = 0; n < t.position.length; n++) {
        if (!Dt(t.position[n], e.position[n])) return !1;
      }

      return !0;
    }
    /**
     * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
     */


    var bn = function bn(t, e
    /* ASCENDING */
    ) {
      void 0 === e && (e = "asc"), this.field = t, this.dir = e;
    };

    function _n(t, e, n) {
      var r = t.field.O() ? V.P(e.key, n.key) : function (t, e, n) {
        var r = e.field(t),
            i = n.field(t);
        return null !== r && null !== i ? Pt(r, i) : p();
      }(t.field, e, n);

      switch (t.dir) {
        case "asc"
        /* ASCENDING */
        :
          return r;

        case "desc"
        /* DESCENDING */
        :
          return -1 * r;

        default:
          return p();
      }
    }

    function In(t, e) {
      return t.dir === e.dir && t.field.isEqual(e.field);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * A batch of mutations that will be sent as one unit to the backend.
     */


    var En =
    /** @class */
    function () {
      /**
       * @param batchId The unique ID of this mutation batch.
       * @param localWriteTime The original write time of this mutation.
       * @param baseMutations Mutations that are used to populate the base
       * values when this mutation is applied locally. This can be used to locally
       * overwrite values that are persisted in the remote document cache. Base
       * mutations are never sent to the backend.
       * @param mutations The user-provided mutations in this mutation batch.
       * User-provided mutations are applied both locally and remotely on the
       * backend.
       */
      function t(t, e, n, r) {
        this.batchId = t, this.yn = e, this.baseMutations = n, this.mutations = r
        /**
        * Applies all the mutations in this MutationBatch to the specified document
        * to create a new remote document
        *
        * @param docKey The key of the document to apply mutations to.
        * @param maybeDoc The document to apply mutations to.
        * @param batchResult The result of applying the MutationBatch to the
        * backend.
        */
        ;
      }

      return t.prototype.pn = function (t, e, n) {
        for (var r = n.bn, i = 0; i < this.mutations.length; i++) {
          var o = this.mutations[i];
          o.key.isEqual(t) && (e = Ce(o, e, r[i]));
        }

        return e;
      },
      /**
       * Computes the local view of a document given all the mutations in this
       * batch.
       *
       * @param docKey The key of the document to apply mutations to.
       * @param maybeDoc The document to apply mutations to.
       */
      t.prototype.vn = function (t, e) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var n = 0, r = this.baseMutations; n < r.length; n++) {
          var i = r[n];
          i.key.isEqual(t) && (e = Fe(i, e, e, this.yn));
        } // Second, apply all user-provided mutations.


        for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
          var a = u[s];
          a.key.isEqual(t) && (e = Fe(a, e, o, this.yn));
        }

        return e;
      },
      /**
       * Computes the local view for all provided documents given the mutations in
       * this batch.
       */
      t.prototype.Sn = function (t) {
        var e = this,
            n = t; // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).

        return this.mutations.forEach(function (r) {
          var i = e.vn(r.key, t.get(r.key));
          i && (n = n.nt(r.key, i));
        }), n;
      }, t.prototype.keys = function () {
        return this.mutations.reduce(function (t, e) {
          return t.add(e.key);
        }, ct());
      }, t.prototype.isEqual = function (t) {
        return this.batchId === t.batchId && w(this.mutations, t.mutations, function (t, e) {
          return Me(t, e);
        }) && w(this.baseMutations, t.baseMutations, function (t, e) {
          return Me(t, e);
        });
      }, t;
    }(),
        Nn =
    /** @class */
    function () {
      function t(t, e, n,
      /**
       * A pre-computed mapping from each mutated document to the resulting
       * version.
       */
      r) {
        this.batch = t, this.Dn = e, this.bn = n, this.Cn = r
        /**
        * Creates a new MutationBatchResult for the given batch and results. There
        * must be one result for each mutation in the batch. This static factory
        * caches a document=>version mapping (docVersions).
        */
        ;
      }

      return t.from = function (e, n, r) {
        d(e.mutations.length === r.length);

        for (var i = ut, o = e.mutations, s = 0; s < o.length; s++) {
          i = i.nt(o[s].key, r[s].version);
        }

        return new t(e, n, r, i);
      }, t;
    }(),
        Tn =
    /** @class */
    function () {
      function t(t) {
        var e = this; // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.

        this.Fn = null, this.Nn = null, // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.$n = !1, // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.kn = !1, t(function (t) {
          e.$n = !0, e.result = t, e.Fn && // value should be defined unless T is Void, but we can't express
          // that in the type system.
          e.Fn(t);
        }, function (t) {
          e.$n = !0, e.error = t, e.Nn && e.Nn(t);
        });
      }

      return t.prototype["catch"] = function (t) {
        return this.next(void 0, t);
      }, t.prototype.next = function (e, n) {
        var r = this;
        return this.kn && p(), this.kn = !0, this.$n ? this.error ? this.xn(n, this.error) : this.Mn(e, this.result) : new t(function (t, i) {
          r.Fn = function (n) {
            r.Mn(e, n).next(t, i);
          }, r.Nn = function (e) {
            r.xn(n, e).next(t, i);
          };
        });
      }, t.prototype.On = function () {
        var t = this;
        return new Promise(function (e, n) {
          t.next(e, n);
        });
      }, t.prototype.Ln = function (e) {
        try {
          var n = e();
          return n instanceof t ? n : t.resolve(n);
        } catch (e) {
          return t.reject(e);
        }
      }, t.prototype.Mn = function (e, n) {
        return e ? this.Ln(function () {
          return e(n);
        }) : t.resolve(n);
      }, t.prototype.xn = function (e, n) {
        return e ? this.Ln(function () {
          return e(n);
        }) : t.reject(n);
      }, t.resolve = function (e) {
        return new t(function (t, n) {
          t(e);
        });
      }, t.reject = function (e) {
        return new t(function (t, n) {
          n(e);
        });
      }, t.Bn = function ( // Accept all Promise types in waitFor().
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      e) {
        return new t(function (t, n) {
          var r = 0,
              i = 0,
              o = !1;
          e.forEach(function (e) {
            ++r, e.next(function () {
              ++i, o && i === r && t();
            }, function (t) {
              return n(t);
            });
          }), o = !0, i === r && t();
        });
      },
      /**
       * Given an array of predicate functions that asynchronously evaluate to a
       * boolean, implements a short-circuiting `or` between the results. Predicates
       * will be evaluated until one of them returns `true`, then stop. The final
       * result will be whether any of them returned `true`.
       */
      t.qn = function (e) {
        for (var n = t.resolve(!1), r = function r(e) {
          n = n.next(function (n) {
            return n ? t.resolve(n) : e();
          });
        }, i = 0, o = e; i < o.length; i++) {
          r(o[i]);
        }

        return n;
      }, t.forEach = function (t, e) {
        var n = this,
            r = [];
        return t.forEach(function (t, i) {
          r.push(e.call(n, t, i));
        }), this.Bn(r);
      }, t;
    }(),
        An =
    /** @class */
    function () {
      function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.Un = new A(function (t) {
          return t.toString();
        }, function (t, e) {
          return t.isEqual(e);
        }), this.Qn = !1;
      }

      return Object.defineProperty(t.prototype, "readTime", {
        get: function get() {
          return this.Wn;
        },
        set: function set(t) {
          this.Wn = t;
        },
        enumerable: !1,
        configurable: !0
      }),
      /**
       * Buffers a `RemoteDocumentCache.addEntry()` call.
       *
       * You can only modify documents that have already been retrieved via
       * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
       */
      t.prototype.jn = function (t, e) {
        this.Kn(), this.readTime = e, this.Un.set(t.key, t);
      },
      /**
       * Buffers a `RemoteDocumentCache.removeEntry()` call.
       *
       * You can only remove documents that have already been retrieved via
       * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
       */
      t.prototype.Gn = function (t, e) {
        this.Kn(), e && (this.readTime = e), this.Un.set(t, null);
      },
      /**
       * Looks up an entry in the cache. The buffered changes will first be checked,
       * and if no buffered change applies, this will forward to
       * `RemoteDocumentCache.getEntry()`.
       *
       * @param transaction The transaction in which to perform any persistence
       *     operations.
       * @param documentKey The key of the entry to look up.
       * @return The cached Document or NoDocument entry, or null if we have nothing
       * cached.
       */
      t.prototype.zn = function (t, e) {
        this.Kn();
        var n = this.Un.get(e);
        return void 0 !== n ? Tn.resolve(n) : this.Hn(t, e);
      },
      /**
       * Looks up several entries in the cache, forwarding to
       * `RemoteDocumentCache.getEntry()`.
       *
       * @param transaction The transaction in which to perform any persistence
       *     operations.
       * @param documentKeys The keys of the entries to look up.
       * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
       *     entry cannot be found, the corresponding key will be mapped to a null
       *     value.
       */
      t.prototype.getEntries = function (t, e) {
        return this.Yn(t, e);
      },
      /**
       * Applies buffered changes to the underlying RemoteDocumentCache, using
       * the provided transaction.
       */
      t.prototype.apply = function (t) {
        return this.Kn(), this.Qn = !0, this.Jn(t);
      },
      /** Helper to assert this.changes is not null  */
      t.prototype.Kn = function () {}, t;
    }(),
        xn = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
        Dn =
    /** @class */
    function () {
      function t() {
        this.Xn = [];
      }

      return t.prototype.Zn = function (t) {
        this.Xn.push(t);
      }, t.prototype.ts = function () {
        this.Xn.forEach(function (t) {
          return t();
        });
      }, t;
    }(),
        Sn =
    /** @class */
    function () {
      function t(t, e, n) {
        this.es = t, this.ns = e, this.ss = n
        /**
        * Get the local view of the document identified by `key`.
        *
        * @return Local view of the document or null if we don't have any cached
        * state for it.
        */
        ;
      }

      return t.prototype.rs = function (t, e) {
        var n = this;
        return this.ns.os(t, e).next(function (r) {
          return n.hs(t, e, r);
        });
      },
      /** Internal version of `getDocument` that allows reusing batches. */
      t.prototype.hs = function (t, e, n) {
        return this.es.zn(t, e).next(function (t) {
          for (var r = 0, i = n; r < i.length; r++) {
            t = i[r].vn(e, t);
          }

          return t;
        });
      }, // Returns the view of the given `docs` as they would appear after applying
      // all mutations in the given `batches`.
      t.prototype.as = function (t, e, n) {
        var r = it();
        return e.forEach(function (t, e) {
          for (var i = 0, o = n; i < o.length; i++) {
            e = o[i].vn(t, e);
          }

          r = r.nt(t, e);
        }), r;
      },
      /**
       * Gets the local view of the documents identified by `keys`.
       *
       * If we don't have cached state for a document in `keys`, a NoDocument will
       * be stored for that key in the resulting set.
       */
      t.prototype.us = function (t, e) {
        var n = this;
        return this.es.getEntries(t, e).next(function (e) {
          return n.cs(t, e);
        });
      },
      /**
       * Similar to `getDocuments`, but creates the local view from the given
       * `baseDocs` without retrieving documents from the local store.
       */
      t.prototype.cs = function (t, e) {
        var n = this;
        return this.ns.ls(t, e).next(function (r) {
          var i = n.as(t, e, r),
              o = rt();
          return i.forEach(function (t, e) {
            // TODO(http://b/32275378): Don't conflate missing / deleted.
            e || (e = new en(t, P.min())), o = o.nt(t, e);
          }), o;
        });
      },
      /**
       * Performs a query against the local view of all documents.
       *
       * @param transaction The persistence transaction.
       * @param query The query to match documents against.
       * @param sinceReadTime If not set to SnapshotVersion.min(), return only
       *     documents that have been read since this snapshot version (exclusive).
       */
      t.prototype._s = function (t, e, n) {
        return e.Pn() ? this.fs(t, e.path) : e.Vn() ? this.ds(t, e, n) : this.ws(t, e, n);
      }, t.prototype.fs = function (t, e) {
        // Just do a simple document lookup.
        return this.rs(t, new V(e)).next(function (t) {
          var e = st();
          return t instanceof tn && (e = e.nt(t.key, t)), e;
        });
      }, t.prototype.ds = function (t, e, n) {
        var r = this,
            i = e.collectionGroup,
            o = st();
        return this.ss.Ts(t, i).next(function (s) {
          return Tn.forEach(s, function (s) {
            var u = e.Tn(s.child(i));
            return r.ws(t, u, n).next(function (t) {
              t.forEach(function (t, e) {
                o = o.nt(t, e);
              });
            });
          }).next(function () {
            return o;
          });
        });
      }, t.prototype.ws = function (t, e, n) {
        var r,
            i,
            o = this; // Query the remote documents and overlay mutations.

        return this.es._s(t, e, n).next(function (n) {
          return r = n, o.ns.Es(t, e);
        }).next(function (e) {
          return i = e, o.Is(t, i, r).next(function (t) {
            r = t;

            for (var e = 0, n = i; e < n.length; e++) {
              for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
                var a = u[s],
                    c = a.key,
                    h = r.get(c),
                    f = Fe(a, h, h, o.yn);
                r = f instanceof tn ? r.nt(c, f) : r.remove(c);
              }
            }
          });
        }).next(function () {
          // Finally, filter out any documents that don't actually match
          // the query.
          return r.forEach(function (t, n) {
            an(e, n) || (r = r.remove(t));
          }), r;
        });
      }, t.prototype.Is = function (t, e, n) {
        for (var r = ct(), i = 0, o = e; i < o.length; i++) {
          for (var s = 0, u = o[i].mutations; s < u.length; s++) {
            var a = u[s];
            a instanceof Ge && null === n.get(a.key) && (r = r.add(a.key));
          }
        }

        var c = n;
        return this.es.getEntries(t, r).next(function (t) {
          return t.forEach(function (t, e) {
            null !== e && e instanceof tn && (c = c.nt(t, e));
          }), c;
        });
      }, t;
    }(),
        Pn =
    /** @class */
    function () {
      function t(t, e, n, r) {
        this.targetId = t, this.fromCache = e, this.ms = n, this.As = r;
      }

      return t.Rs = function (e, n) {
        for (var r = ct(), i = ct(), o = 0, s = n.docChanges; o < s.length; o++) {
          var u = s[o];

          switch (u.type) {
            case 0
            /* Added */
            :
              r = r.add(u.doc.key);
              break;

            case 1
            /* Removed */
            :
              i = i.add(u.doc.key);
            // do nothing
          }
        }

        return new t(e, n.fromCache, r, i);
      }, t;
    }(),
        kn =
    /** @class */
    function () {
      function t(t, e) {
        var n = this;
        this.previousValue = t, e && (e.Ps = function (t) {
          return n.Vs(t);
        }, this.gs = function (t) {
          return e.ys(t);
        });
      }

      return t.prototype.Vs = function (t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
      }, t.prototype.next = function () {
        var t = ++this.previousValue;
        return this.gs && this.gs(t), t;
      }, t;
    }();
    /** The result of applying a mutation batch to the backend. */


    kn.ps = -1;
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    var Rn = function Rn() {
      var t = this;
      this.promise = new Promise(function (e, n) {
        t.resolve = e, t.reject = n;
      });
    },
        Ln =
    /** @class */
    function () {
      function t(
      /**
       * The AsyncQueue to run backoff operations on.
       */
      t,
      /**
       * The ID to use when scheduling backoff operations on the AsyncQueue.
       */
      e,
      /**
       * The initial delay (used as the base delay on the first retry attempt).
       * Note that jitter will still be applied, so the actual delay could be as
       * little as 0.5*initialDelayMs.
       */
      n
      /**
       * The multiplier to use to determine the extended base delay after each
       * attempt.
       */
      , r
      /**
       * The maximum base delay after which no further backoff is performed.
       * Note that jitter will still be applied, so the actual delay could be as
       * much as 1.5*maxDelayMs.
       */
      , i) {
        void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), this.bs = t, this.vs = e, this.Ss = n, this.Ds = r, this.Cs = i, this.Fs = 0, this.Ns = null,
        /** The last backoff attempt, as epoch milliseconds. */
        this.$s = Date.now(), this.reset();
      }
      /**
       * Resets the backoff delay.
       *
       * The very next backoffAndWait() will have no delay. If it is called again
       * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
       * subsequent ones will increase according to the backoffFactor.
       */


      return t.prototype.reset = function () {
        this.Fs = 0;
      },
      /**
       * Resets the backoff delay to the maximum delay (e.g. for use after a
       * RESOURCE_EXHAUSTED error).
       */
      t.prototype.ks = function () {
        this.Fs = this.Cs;
      },
      /**
       * Returns a promise that resolves after currentDelayMs, and increases the
       * delay for any subsequent attempts. If there was a pending backoff operation
       * already, it will be canceled.
       */
      t.prototype.xs = function (t) {
        var e = this; // Cancel any pending backoff operation.

        this.cancel(); // First schedule using the current base (which may be 0 and should be
        // honored as such).

        var n = Math.floor(this.Fs + this.Ms()),
            r = Math.max(0, Date.now() - this.$s),
            i = Math.max(0, n - r); // Guard against lastAttemptTime being in the future due to a clock change.

        i > 0 && h("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.Fs + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.Ns = this.bs.Os(this.vs, i, function () {
          return e.$s = Date.now(), t();
        }), // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.Fs *= this.Ds, this.Fs < this.Ss && (this.Fs = this.Ss), this.Fs > this.Cs && (this.Fs = this.Cs);
      }, t.prototype.Ls = function () {
        null !== this.Ns && (this.Ns.Bs(), this.Ns = null);
      }, t.prototype.cancel = function () {
        null !== this.Ns && (this.Ns.cancel(), this.Ns = null);
      },
      /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
      t.prototype.Ms = function () {
        return (Math.random() - .5) * this.Fs;
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * A helper for running delayed tasks following an exponential backoff curve
     * between attempts.
     *
     * Each delay is made up of a "base" delay which follows the exponential
     * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
     * base delay. This prevents clients from accidentally synchronizing their
     * delays causing spikes of load to the backend.
     */

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Encodes a resource path into a IndexedDb-compatible string form.
     */


    function On(t) {
      for (var e = "", n = 0; n < t.length; n++) {
        e.length > 0 && (e = Un(e)), e = Vn(t.get(n), e);
      }

      return Un(e);
    }
    /** Encodes a single segment of a resource path into the given result */


    function Vn(t, e) {
      for (var n = e, r = t.length, i = 0; i < r; i++) {
        var o = t.charAt(i);

        switch (o) {
          case "\0":
            n += "";
            break;

          case "":
            n += "";
            break;

          default:
            n += o;
        }
      }

      return n;
    }
    /** Encodes a path separator into the given result */


    function Un(t) {
      return t + "";
    }
    /**
     * Decodes the given IndexedDb-compatible string form of a resource path into
     * a ResourcePath instance. Note that this method is not suitable for use with
     * decoding resource names from the server; those are One Platform format
     * strings.
     */


    function Cn(t) {
      // Event the empty path must encode as a path of at least length 2. A path
      // with exactly 2 must be the empty path.
      var e = t.length;
      if (d(e >= 2), 2 === e) return d("" === t.charAt(0) && "" === t.charAt(1)), R.k(); // Escape characters cannot exist past the second-to-last position in the
      // source value.

      for (var n = e - 2, r = [], i = "", o = 0; o < e;) {
        // The last two characters of a valid encoded path must be a separator, so
        // there must be an end to this segment.
        var s = t.indexOf("", o);

        switch ((s < 0 || s > n) && p(), t.charAt(s + 1)) {
          case "":
            var u = t.substring(o, s),
                a = void 0;
            0 === i.length ? // Avoid copying for the common case of a segment that excludes \0
            // and \001
            a = u : (a = i += u, i = ""), r.push(a);
            break;

          case "":
            i += t.substring(o, s), i += "\0";
            break;

          case "":
            // The escape character can be used in the output to encode itself.
            i += t.substring(o, s + 1);
            break;

          default:
            p();
        }

        o = s + 2;
      }

      return new R(r);
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * An in-memory implementation of IndexManager.
     */


    var Fn =
    /** @class */
    function () {
      function t() {
        this.qs = new jn();
      }

      return t.prototype.Us = function (t, e) {
        return this.qs.add(e), Tn.resolve();
      }, t.prototype.Ts = function (t, e) {
        return Tn.resolve(this.qs.getEntries(e));
      }, t;
    }(),
        jn =
    /** @class */
    function () {
      function t() {
        this.index = {};
      } // Returns false if the entry already existed.


      return t.prototype.add = function (t) {
        var e = t.S(),
            n = t.p(),
            r = this.index[e] || new tt(R.P),
            i = !r.has(n);
        return this.index[e] = r.add(n), i;
      }, t.prototype.has = function (t) {
        var e = t.S(),
            n = t.p(),
            r = this.index[e];
        return r && r.has(n);
      }, t.prototype.getEntries = function (t) {
        return (this.index[t] || new tt(R.P)).F();
      }, t;
    }(),
        Mn =
    /** @class */
    function () {
      function t() {
        /**
         * An in-memory copy of the index entries we've already written since the SDK
         * launched. Used to avoid re-writing the same entry repeatedly.
         *
         * This is *NOT* a complete cache of what's in persistence and so can never be used to
         * satisfy reads.
         */
        this.Qs = new jn();
      }
      /**
       * Adds a new entry to the collection parent index.
       *
       * Repeated calls for the same collectionPath should be avoided within a
       * transaction as IndexedDbIndexManager only caches writes once a transaction
       * has been committed.
       */


      return t.prototype.Us = function (t, e) {
        var n = this;

        if (!this.Qs.has(e)) {
          var r = e.S(),
              i = e.p();
          t.Zn(function () {
            // Add the collection to the in memory cache only if the transaction was
            // successfully committed.
            n.Qs.add(e);
          });
          var o = {
            collectionId: r,
            parent: On(i)
          };
          return qn(t).put(o);
        }

        return Tn.resolve();
      }, t.prototype.Ts = function (t, e) {
        var n = [],
            r = IDBKeyRange.bound([e, ""], [b(e), ""],
        /*lowerOpen=*/
        !1,
        /*upperOpen=*/
        !0);
        return qn(t).Ws(r).next(function (t) {
          for (var r = 0, i = t; r < i.length; r++) {
            var o = i[r]; // This collectionId guard shouldn't be necessary (and isn't as long
            // as we're running in a real browser), but there's a bug in
            // indexeddbshim that breaks our range in our tests running in node:
            // https://github.com/axemclion/IndexedDBShim/issues/334

            if (o.collectionId !== e) break;
            n.push(Cn(o.parent));
          }

          return n;
        });
      }, t;
    }();
    /**
     * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
     * Also used for in-memory caching by IndexedDbIndexManager and initial index population
     * in indexeddb_schema.ts
     */

    /**
     * Helper to get a typed SimpleDbStore for the collectionParents
     * document store.
     */


    function qn(t) {
      return hr.js(t, Vr.store);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** Serializer for values stored in the LocalStore. */


    var Bn = function Bn(t) {
      this.Ks = t;
    };
    /** Decodes a remote document from storage locally to a Document. */


    function Gn(t, e) {
      if (e.document) return function (t, e, n) {
        var r = ee(t, e.name),
            i = $t(e.updateTime),
            o = new He({
          mapValue: {
            fields: e.fields
          }
        });
        return new tn(r, i, o, {
          hasCommittedMutations: !!n
        });
      }(t.Ks, e.document, !!e.hasCommittedMutations);

      if (e.noDocument) {
        var n = V.j(e.noDocument.path),
            r = Kn(e.noDocument.readTime);
        return new en(n, r, {
          hasCommittedMutations: !!e.hasCommittedMutations
        });
      }

      if (e.unknownDocument) {
        var i = V.j(e.unknownDocument.path),
            o = Kn(e.unknownDocument.version);
        return new nn(i, o);
      }

      return p();
    }
    /** Encodes a document for storage locally. */


    function zn(t, e, n) {
      var r = Wn(n),
          i = e.key.path.p().F();

      if (e instanceof tn) {
        var o = function (t, e) {
          return {
            name: te(t, e.key),
            fields: e.tn().mapValue.fields,
            updateTime: Kt(t, e.version.A())
          };
        }(t.Ks, e),
            s = e.hasCommittedMutations;

        return new Pr(
        /* unknownDocument= */
        null,
        /* noDocument= */
        null, o, s, r, i);
      }

      if (e instanceof en) {
        var u = e.key.path.F(),
            a = Yn(e.version),
            c = e.hasCommittedMutations;
        return new Pr(
        /* unknownDocument= */
        null, new Dr(u, a),
        /* document= */
        null, c, r, i);
      }

      if (e instanceof nn) {
        var h = e.key.path.F(),
            f = Yn(e.version);
        return new Pr(new Sr(h, f),
        /* noDocument= */
        null,
        /* document= */
        null,
        /* hasCommittedMutations= */
        !0, r, i);
      }

      return p();
    }

    function Wn(t) {
      var e = t.A();
      return [e.seconds, e.nanoseconds];
    }

    function Qn(t) {
      var e = new S(t[0], t[1]);
      return P.I(e);
    }

    function Yn(t) {
      var e = t.A();
      return new Er(e.seconds, e.nanoseconds);
    }

    function Kn(t) {
      var e = new S(t.seconds, t.nanoseconds);
      return P.I(e);
    }
    /** Encodes a batch of mutations into a DbMutationBatch for local storage. */

    /** Decodes a DbMutationBatch into a MutationBatch */


    function Xn(t, e) {
      var n = (e.baseMutations || []).map(function (e) {
        return ae(t.Ks, e);
      }),
          r = e.mutations.map(function (e) {
        return ae(t.Ks, e);
      }),
          i = S.fromMillis(e.localWriteTimeMs);
      return new En(e.batchId, i, n, r);
    }
    /** Decodes a DbTarget into TargetData */


    function Hn(t) {
      var e,
          n = Kn(t.readTime),
          r = void 0 !== t.lastLimboFreeSnapshotVersion ? Kn(t.lastLimboFreeSnapshotVersion) : P.min();
      return e = void 0 !== t.query.documents ? function (t) {
        d(1 === t.documents.length);
        var e = t.documents[0];
        return rn.hn(re(e)).We();
      }(t.query) : function (t) {
        var e = re(t.parent),
            n = t.structuredQuery,
            r = n.from ? n.from.length : 0,
            i = null;

        if (r > 0) {
          d(1 === r);
          var o = n.from[0];
          o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
        }

        var s = [];
        n.where && (s = function t(e) {
          return e ? void 0 !== e.unaryFilter ? [ve(e)] : void 0 !== e.fieldFilter ? [ye(e)] : void 0 !== e.compositeFilter ? e.compositeFilter.filters.map(function (e) {
            return t(e);
          }).reduce(function (t, e) {
            return t.concat(e);
          }) : p() : [];
        }(n.where));
        var u = [];
        n.orderBy && (u = n.orderBy.map(function (t) {
          return new bn(de((e = t).field), // visible for testing
          function (t) {
            switch (t) {
              case "ASCENDING":
                return "asc"
                /* ASCENDING */
                ;

              case "DESCENDING":
                return "desc"
                /* DESCENDING */
                ;

              default:
                return;
            }
          }(e.direction));
          var e;
        }));
        var a = null;
        n.limit && (a = function (t) {
          var e;
          return U(e = "object" == typeof t ? t.value : t) ? null : e;
        }(n.limit));
        var c = null;
        n.startAt && (c = le(n.startAt));
        var h = null;
        return n.endAt && (h = le(n.endAt)), new rn(e, i, u, s, a, "F"
        /* First */
        , c, h).We();
      }(t.query), new Y(e, t.targetId, 0
      /* Listen */
      , t.lastListenSequenceNumber, n, r, z.fromBase64String(t.resumeToken))
      /** Encodes TargetData into a DbTarget for storage locally. */
      ;
    }

    function $n(t, e) {
      var n,
          r = Yn(e.X),
          i = Yn(e.lastLimboFreeSnapshotVersion);
      n = G(e.target) ? ce(t.Ks, e.target) : he(t.Ks, e.target); // We can't store the resumeToken as a ByteString in IndexedDb, so we
      // convert it to a base64 string for storage.

      var o = e.resumeToken.toBase64(); // lastListenSequenceNumber is always 0 until we do real GC.

      return new Rr(e.targetId, q(e.target), r, o, e.sequenceNumber, i, n);
    }
    /**
     * A helper function for figuring out what kind of query has been stored.
     */

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var Jn =
    /** @class */
    function () {
      /**
       * @param {LocalSerializer} serializer The document serializer.
       * @param {IndexManager} indexManager The query indexes that need to be maintained.
       */
      function t(t, e) {
        this.serializer = t, this.ss = e
        /**
        * Adds the supplied entries to the cache.
        *
        * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
        * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
        */
        ;
      }

      return t.prototype.jn = function (t, e, n) {
        return tr(t).put(er(e), n);
      },
      /**
       * Removes a document from the cache.
       *
       * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
       * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
       */
      t.prototype.Gn = function (t, e) {
        var n = tr(t),
            r = er(e);
        return n["delete"](r);
      },
      /**
       * Updates the current cache size.
       *
       * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
       * cache's metadata.
       */
      t.prototype.updateMetadata = function (t, e) {
        var n = this;
        return this.getMetadata(t).next(function (r) {
          return r.byteSize += e, n.Gs(t, r);
        });
      }, t.prototype.zn = function (t, e) {
        var n = this;
        return tr(t).get(er(e)).next(function (t) {
          return n.zs(t);
        });
      },
      /**
       * Looks up an entry in the cache.
       *
       * @param documentKey The key of the entry to look up.
       * @return The cached MaybeDocument entry and its size, or null if we have nothing cached.
       */
      t.prototype.Hs = function (t, e) {
        var n = this;
        return tr(t).get(er(e)).next(function (t) {
          var e = n.zs(t);
          return e ? {
            Ys: e,
            size: nr(t)
          } : null;
        });
      }, t.prototype.getEntries = function (t, e) {
        var n = this,
            r = it();
        return this.Js(t, e, function (t, e) {
          var i = n.zs(e);
          r = r.nt(t, i);
        }).next(function () {
          return r;
        });
      },
      /**
       * Looks up several entries in the cache.
       *
       * @param documentKeys The set of keys entries to look up.
       * @return A map of MaybeDocuments indexed by key (if a document cannot be
       *     found, the key will be mapped to null) and a map of sizes indexed by
       *     key (zero if the key cannot be found).
       */
      t.prototype.Xs = function (t, e) {
        var n = this,
            r = it(),
            i = new $(V.P);
        return this.Js(t, e, function (t, e) {
          var o = n.zs(e);
          o ? (r = r.nt(t, o), i = i.nt(t, nr(e))) : (r = r.nt(t, null), i = i.nt(t, 0));
        }).next(function () {
          return {
            Zs: r,
            ti: i
          };
        });
      }, t.prototype.Js = function (t, e, n) {
        if (e._()) return Tn.resolve();
        var r = IDBKeyRange.bound(e.first().path.F(), e.last().path.F()),
            i = e.at(),
            o = i.dt();
        return tr(t).ei({
          range: r
        }, function (t, e, r) {
          // Go through keys not found in cache.
          for (var s = V.j(t); o && V.P(o, s) < 0;) {
            n(o, null), o = i.dt();
          }

          o && o.isEqual(s) && ( // Key found in cache.
          n(o, e), o = i.wt() ? i.dt() : null), // Skip to the next key (if there is one).
          o ? r.ni(o.path.F()) : r.done();
        }).next(function () {
          // The rest of the keys are not in the cache. One case where `iterate`
          // above won't go through them is when the cache is empty.
          for (; o;) {
            n(o, null), o = i.wt() ? i.dt() : null;
          }
        });
      }, t.prototype._s = function (t, e, n) {
        var r = this,
            i = st(),
            o = e.path.length + 1,
            s = {};

        if (n.isEqual(P.min())) {
          // Documents are ordered by key, so we can use a prefix scan to narrow
          // down the documents we need to match the query against.
          var u = e.path.F();
          s.range = IDBKeyRange.lowerBound(u);
        } else {
          // Execute an index-free query and filter by read time. This is safe
          // since all document changes to queries that have a
          // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
          var a = e.path.F(),
              c = Wn(n);
          s.range = IDBKeyRange.lowerBound([a, c],
          /* open= */
          !0), s.index = Pr.collectionReadTimeIndex;
        }

        return tr(t).ei(s, function (t, n, s) {
          // The query is actually returning any path that starts with the query
          // path prefix which may include documents in subcollections. For
          // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
          // shouldn't match it. Fix this by discarding rows with document keys
          // more than one segment longer than the query path.
          if (t.length === o) {
            var u = Gn(r.serializer, n);
            e.path.D(u.key.path) ? u instanceof tn && an(e, u) && (i = i.nt(u.key, u)) : s.done();
          }
        }).next(function () {
          return i;
        });
      },
      /**
       * Returns the set of documents that have changed since the specified read
       * time.
       */
      // PORTING NOTE: This is only used for multi-tab synchronization.
      t.prototype.si = function (t, e) {
        var n = this,
            r = rt(),
            i = Wn(e),
            o = tr(t),
            s = IDBKeyRange.lowerBound(i, !0);
        return o.ei({
          index: Pr.readTimeIndex,
          range: s
        }, function (t, e) {
          // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
          // the documents directly since we want to keep sentinel deletes.
          var o = Gn(n.serializer, e);
          r = r.nt(o.key, o), i = e.readTime;
        }).next(function () {
          return {
            ii: r,
            readTime: Qn(i)
          };
        });
      },
      /**
       * Returns the read time of the most recently read document in the cache, or
       * SnapshotVersion.min() if not available.
       */
      // PORTING NOTE: This is only used for multi-tab synchronization.
      t.prototype.ri = function (t) {
        var e = tr(t),
            n = P.min(); // If there are no existing entries, we return SnapshotVersion.min().

        return e.ei({
          index: Pr.readTimeIndex,
          reverse: !0
        }, function (t, e, r) {
          e.readTime && (n = Qn(e.readTime)), r.done();
        }).next(function () {
          return n;
        });
      }, t.prototype.oi = function (e) {
        return new t.hi(this, !!e && e.ai);
      }, t.prototype.ui = function (t) {
        return this.getMetadata(t).next(function (t) {
          return t.byteSize;
        });
      }, t.prototype.getMetadata = function (t) {
        return Zn(t).get(kr.key).next(function (t) {
          return d(!!t), t;
        });
      }, t.prototype.Gs = function (t, e) {
        return Zn(t).put(kr.key, e);
      },
      /**
       * Decodes `remoteDoc` and returns the document (or null, if the document
       * corresponds to the format used for sentinel deletes).
       */
      t.prototype.zs = function (t) {
        if (t) {
          var e = Gn(this.serializer, t);
          return e instanceof en && e.version.isEqual(P.min()) ? null : e;
        }

        return null;
      }, t;
    }();
    /**
     * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
     *
     * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
     * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
     * when we apply the changes.
     */


    function Zn(t) {
      return hr.js(t, kr.store);
    }
    /**
     * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
     */


    function tr(t) {
      return hr.js(t, Pr.store);
    }

    function er(t) {
      return t.path.F();
    }
    /**
     * Retrusn an approximate size for the given document.
     */


    function nr(t) {
      var e;
      if (t.document) e = t.document;else if (t.unknownDocument) e = t.unknownDocument;else {
        if (!t.noDocument) throw p();
        e = t.noDocument;
      }
      return JSON.stringify(e).length;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** Offset to ensure non-overlapping target ids. */


    Jn.hi =
    /** @class */
    function (t) {
      /**
       * @param documentCache The IndexedDbRemoteDocumentCache to apply the changes to.
       * @param trackRemovals Whether to create sentinel deletes that can be tracked by
       * `getNewDocumentChanges()`.
       */
      function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).ci = e, r.ai = n, // A map of document sizes prior to applying the changes in this buffer.
        r.li = new A(function (t) {
          return t.toString();
        }, function (t, e) {
          return t.isEqual(e);
        }), r;
      }

      return e.__extends(n, t), n.prototype.Jn = function (t) {
        var e = this,
            n = [],
            r = 0,
            i = new tt(function (t, e) {
          return m(t.N(), e.N());
        });
        return this.Un.forEach(function (o, s) {
          var u = e.li.get(o);

          if (s) {
            var a = zn(e.ci.serializer, s, e.readTime);
            i = i.add(o.path.p());
            var c = nr(a);
            r += c - u, n.push(e.ci.jn(t, o, a));
          } else if (r -= u, e.ai) {
            // In order to track removals, we store a "sentinel delete" in the
            // RemoteDocumentCache. This entry is represented by a NoDocument
            // with a version of 0 and ignored by `maybeDecodeDocument()` but
            // preserved in `getNewDocumentChanges()`.
            var h = zn(e.ci.serializer, new en(o, P.min()), e.readTime);
            n.push(e.ci.jn(t, o, h));
          } else n.push(e.ci.Gn(t, o));
        }), i.forEach(function (r) {
          n.push(e.ci.ss.Us(t, r));
        }), n.push(this.ci.updateMetadata(t, r)), Tn.Bn(n);
      }, n.prototype.Hn = function (t, e) {
        var n = this; // Record the size of everything we load from the cache so we can compute a delta later.

        return this.ci.Hs(t, e).next(function (t) {
          return null === t ? (n.li.set(e, 0), null) : (n.li.set(e, t.size), t.Ys);
        });
      }, n.prototype.Yn = function (t, e) {
        var n = this; // Record the size of everything we load from the cache so we can compute
        // a delta later.

        return this.ci.Xs(t, e).next(function (t) {
          var e = t.Zs; // Note: `getAllFromCache` returns two maps instead of a single map from
          // keys to `DocumentSizeEntry`s. This is to allow returning the
          // `NullableMaybeDocumentMap` directly, without a conversion.

          return t.ti.forEach(function (t, e) {
            n.li.set(t, e);
          }), e;
        });
      }, n;
    }(An);
    /**
     * Generates monotonically increasing target IDs for sending targets to the
     * watch stream.
     *
     * The client constructs two generators, one for the target cache, and one for
     * for the sync engine (to generate limbo documents targets). These
     * generators produce non-overlapping IDs (by using even and odd IDs
     * respectively).
     *
     * By separating the target ID space, the query cache can generate target IDs
     * that persist across client restarts, while sync engine can independently
     * generate in-memory target IDs that are transient and can be reused after a
     * restart.
     */


    var rr =
    /** @class */
    function () {
      function t(t) {
        this._i = t;
      }

      return t.prototype.next = function () {
        return this._i += 2, this._i;
      }, t.fi = function () {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new t(0);
      }, t.di = function () {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(-1);
      }, t;
    }(),
        ir =
    /** @class */
    function () {
      function t(t, e) {
        this.wi = t, this.serializer = e;
      } // PORTING NOTE: We don't cache global metadata for the target cache, since
      // some of it (in particular `highestTargetId`) can be modified by secondary
      // tabs. We could perhaps be more granular (and e.g. still cache
      // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
      // to IndexedDb whenever we need to read metadata. We can revisit if it turns
      // out to have a meaningful performance impact.


      return t.prototype.Ti = function (t) {
        var e = this;
        return this.Ei(t).next(function (n) {
          var r = new rr(n.highestTargetId);
          return n.highestTargetId = r.next(), e.Ii(t, n).next(function () {
            return n.highestTargetId;
          });
        });
      }, t.prototype.mi = function (t) {
        return this.Ei(t).next(function (t) {
          return P.I(new S(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
        });
      }, t.prototype.Ai = function (t) {
        return this.Ei(t).next(function (t) {
          return t.highestListenSequenceNumber;
        });
      }, t.prototype.Ri = function (t, e, n) {
        var r = this;
        return this.Ei(t).next(function (i) {
          return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.A()), e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.Ii(t, i);
        });
      }, t.prototype.Pi = function (t, e) {
        var n = this;
        return this.Vi(t, e).next(function () {
          return n.Ei(t).next(function (r) {
            return r.targetCount += 1, n.gi(e, r), n.Ii(t, r);
          });
        });
      }, t.prototype.yi = function (t, e) {
        return this.Vi(t, e);
      }, t.prototype.pi = function (t, e) {
        var n = this;
        return this.bi(t, e.targetId).next(function () {
          return or(t)["delete"](e.targetId);
        }).next(function () {
          return n.Ei(t);
        }).next(function (e) {
          return d(e.targetCount > 0), e.targetCount -= 1, n.Ii(t, e);
        });
      },
      /**
       * Drops any targets with sequence number less than or equal to the upper bound, excepting those
       * present in `activeTargetIds`. Document associations for the removed targets are also removed.
       * Returns the number of targets removed.
       */
      t.prototype.vi = function (t, e, n) {
        var r = this,
            i = 0,
            o = [];
        return or(t).ei(function (s, u) {
          var a = Hn(u);
          a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r.pi(t, a)));
        }).next(function () {
          return Tn.Bn(o);
        }).next(function () {
          return i;
        });
      },
      /**
       * Call provided function with each `TargetData` that we have cached.
       */
      t.prototype.pe = function (t, e) {
        return or(t).ei(function (t, n) {
          var r = Hn(n);
          e(r);
        });
      }, t.prototype.Ei = function (t) {
        return sr(t).get(Or.key).next(function (t) {
          return d(null !== t), t;
        });
      }, t.prototype.Ii = function (t, e) {
        return sr(t).put(Or.key, e);
      }, t.prototype.Vi = function (t, e) {
        return or(t).put($n(this.serializer, e));
      },
      /**
       * In-place updates the provided metadata to account for values in the given
       * TargetData. Saving is done separately. Returns true if there were any
       * changes to the metadata.
       */
      t.prototype.gi = function (t, e) {
        var n = !1;
        return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n;
      }, t.prototype.Si = function (t) {
        return this.Ei(t).next(function (t) {
          return t.targetCount;
        });
      }, t.prototype.Di = function (t, e) {
        // Iterating by the canonicalId may yield more than one result because
        // canonicalId values are not required to be unique per target. This query
        // depends on the queryTargets index to be efficient.
        var n = q(e),
            r = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]),
            i = null;
        return or(t).ei({
          range: r,
          index: Rr.queryTargetsIndexName
        }, function (t, n, r) {
          var o = Hn(n); // After finding a potential match, check that the target is
          // actually equal to the requested target.

          B(e, o.target) && (i = o, r.done());
        }).next(function () {
          return i;
        });
      }, t.prototype.Ci = function (t, e, n) {
        var r = this,
            i = [],
            o = ur(t); // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.

        return e.forEach(function (e) {
          var s = On(e.path);
          i.push(o.put(new Lr(n, s))), i.push(r.wi.Fi(t, n, e));
        }), Tn.Bn(i);
      }, t.prototype.Ni = function (t, e, n) {
        var r = this,
            i = ur(t); // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.

        return Tn.forEach(e, function (e) {
          var o = On(e.path);
          return Tn.Bn([i["delete"]([n, o]), r.wi.$i(t, n, e)]);
        });
      }, t.prototype.bi = function (t, e) {
        var n = ur(t),
            r = IDBKeyRange.bound([e], [e + 1],
        /*lowerOpen=*/
        !1,
        /*upperOpen=*/
        !0);
        return n["delete"](r);
      }, t.prototype.ki = function (t, e) {
        var n = IDBKeyRange.bound([e], [e + 1],
        /*lowerOpen=*/
        !1,
        /*upperOpen=*/
        !0),
            r = ur(t),
            i = ct();
        return r.ei({
          range: n,
          xi: !0
        }, function (t, e, n) {
          var r = Cn(t[1]),
              o = new V(r);
          i = i.add(o);
        }).next(function () {
          return i;
        });
      }, t.prototype.Mi = function (t, e) {
        var n = On(e.path),
            r = IDBKeyRange.bound([n], [b(n)],
        /*lowerOpen=*/
        !1,
        /*upperOpen=*/
        !0),
            i = 0;
        return ur(t).ei({
          index: Lr.documentTargetsIndex,
          xi: !0,
          range: r
        }, function (t, e, n) {
          var r = t[0]; // Having a sentinel row for a document does not count as containing that document;
          // For the target cache, containing the document means the document is part of some
          // target.

          t[1];
          0 !== r && (i++, n.done());
        }).next(function () {
          return i > 0;
        });
      },
      /**
       * Looks up a TargetData entry by target ID.
       *
       * @param targetId The target ID of the TargetData entry to look up.
       * @return The cached TargetData entry, or null if the cache has no entry for
       * the target.
       */
      // PORTING NOTE: Multi-tab only.
      t.prototype.Me = function (t, e) {
        return or(t).get(e).next(function (t) {
          return t ? Hn(t) : null;
        });
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Helper to get a typed SimpleDbStore for the queries object store.
     */


    function or(t) {
      return hr.js(t, Rr.store);
    }
    /**
     * Helper to get a typed SimpleDbStore for the target globals object store.
     */


    function sr(t) {
      return hr.js(t, Or.store);
    }
    /**
     * Helper to get a typed SimpleDbStore for the document target object store.
     */


    function ur(t) {
      return hr.js(t, Lr.store);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var ar = "Failed to obtain exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",
        cr =
    /** @class */
    function (t) {
      function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).Oi = e, r.Li = n, r;
      }

      return e.__extends(n, t), n;
    }(Dn),
        hr =
    /** @class */
    function () {
      function t(
      /**
       * Whether to synchronize the in-memory state of multiple tabs and share
       * access to local persistence.
       */
      e, n, r, i, o, s, u, a, c,
      /**
       * If set to true, forcefully obtains database access. Existing tabs will
       * no longer be able to access IndexedDB.
       */
      h) {
        if (this.allowTabSynchronization = e, this.persistenceKey = n, this.clientId = r, this.bs = o, this.window = s, this.document = u, this.Bi = c, this.qi = h, this.Ui = null, this.Qi = !1, this.isPrimary = !1, this.networkEnabled = !0,
        /** Our window.unload handler, if registered. */
        this.Wi = null, this.inForeground = !1,
        /** Our 'visibilitychange' listener if registered. */
        this.ji = null,
        /** The client metadata refresh task. */
        this.Ki = null,
        /** The last time we garbage collected the client metadata object store. */
        this.Gi = Number.NEGATIVE_INFINITY,
        /** A listener to notify on primary state changes. */
        this.zi = function (t) {
          return Promise.resolve();
        }, !t.Hi()) throw new D(x.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
        this.wi = new pr(this, i), this.Yi = n + t.Ji, this.serializer = new Bn(a), this.Xi = new ir(this.wi, this.serializer), this.ss = new Mn(), this.es = new Jn(this.serializer, this.ss), this.window && this.window.localStorage ? this.Zi = this.window.localStorage : (this.Zi = null, !1 === h && f("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
      }

      return t.js = function (t, e) {
        if (t instanceof cr) return jr.js(t.Oi, e);
        throw p();
      },
      /**
       * Attempt to start IndexedDb persistence.
       *
       * @return {Promise<void>} Whether persistence was enabled.
       */
      t.prototype.start = function () {
        var t = this;
        return jr.tr(this.Yi, _r, new Ir(this.serializer)).then(function (e) {
          return t.er = e, t.nr();
        }).then(function () {
          if (!t.isPrimary && !t.allowTabSynchronization) // Fail `start()` if `synchronizeTabs` is disabled and we cannot
            // obtain the primary lease.
            throw new D(x.FAILED_PRECONDITION, ar);
          return t.sr(), t.ir(), t.rr(), t.runTransaction("getHighestListenSequenceNumber", "readonly", function (e) {
            return t.Xi.Ai(e);
          });
        }).then(function (e) {
          t.Ui = new kn(e, t.Bi);
        }).then(function () {
          t.Qi = !0;
        })["catch"](function (e) {
          return t.er && t.er.close(), Promise.reject(e);
        });
      },
      /**
       * Registers a listener that gets called when the primary state of the
       * instance changes. Upon registering, this listener is invoked immediately
       * with the current primary state.
       *
       * PORTING NOTE: This is only used for Web multi-tab.
       */
      t.prototype.or = function (t) {
        var n = this;
        return this.zi = function (r) {
          return e.__awaiter(n, void 0, void 0, function () {
            return e.__generator(this, function (e) {
              return this.hr ? [2
              /*return*/
              , t(r)] : [2
              /*return*/
              ];
            });
          });
        }, t(this.isPrimary);
      },
      /**
       * Registers a listener that gets called when the database receives a
       * version change event indicating that it has deleted.
       *
       * PORTING NOTE: This is only used for Web multi-tab.
       */
      t.prototype.ar = function (t) {
        var n = this;
        this.er.ur(function (r) {
          return e.__awaiter(n, void 0, void 0, function () {
            return e.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return null === r.newVersion ? [4
                  /*yield*/
                  , t()] : [3
                  /*break*/
                  , 2];

                case 1:
                  e.sent(), e.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        });
      },
      /**
       * Adjusts the current network state in the client's metadata, potentially
       * affecting the primary lease.
       *
       * PORTING NOTE: This is only used for Web multi-tab.
       */
      t.prototype.cr = function (t) {
        var n = this;
        this.networkEnabled !== t && (this.networkEnabled = t, // Schedule a primary lease refresh for immediate execution. The eventual
        // lease update will be propagated via `primaryStateListener`.
        this.bs.lr(function () {
          return e.__awaiter(n, void 0, void 0, function () {
            return e.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.hr ? [4
                  /*yield*/
                  , this.nr()] : [3
                  /*break*/
                  , 2];

                case 1:
                  t.sent(), t.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }));
      },
      /**
       * Updates the client metadata in IndexedDb and attempts to either obtain or
       * extend the primary lease for the local client. Asynchronously notifies the
       * primary state listener if the client either newly obtained or released its
       * primary lease.
       */
      t.prototype.nr = function () {
        var t = this;
        return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", function (e) {
          return lr(e).put(new Cr(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next(function () {
            if (t.isPrimary) return t._r(e).next(function (e) {
              e || (t.isPrimary = !1, t.bs.dr(function () {
                return t.zi(!1);
              }));
            });
          }).next(function () {
            return t.wr(e);
          }).next(function (n) {
            return t.isPrimary && !n ? t.Tr(e).next(function () {
              return !1;
            }) : !!n && t.Er(e).next(function () {
              return !0;
            });
          });
        })["catch"](function (e) {
          if (Br(e)) // Proceed with the existing state. Any subsequent access to
            // IndexedDB will verify the lease.
            return h("IndexedDbPersistence", "Failed to extend owner lease: ", e), t.isPrimary;
          if (!t.allowTabSynchronization) throw e;
          return h("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e),
          /* isPrimary= */
          !1;
        }).then(function (e) {
          t.isPrimary !== e && t.bs.dr(function () {
            return t.zi(e);
          }), t.isPrimary = e;
        });
      }, t.prototype._r = function (t) {
        var e = this;
        return fr(t).get(Nr.key).next(function (t) {
          return Tn.resolve(e.Ir(t));
        });
      }, t.prototype.mr = function (t) {
        return lr(t)["delete"](this.clientId);
      },
      /**
       * If the garbage collection threshold has passed, prunes the
       * RemoteDocumentChanges and the ClientMetadata store based on the last update
       * time of all clients.
       */
      t.prototype.Ar = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r,
              i,
              o,
              s = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return !this.isPrimary || this.Rr(this.Gi, 18e5) ? [3
                /*break*/
                , 2] : (this.Gi = Date.now(), [4
                /*yield*/
                , this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function (e) {
                  var n = t.js(e, Cr.store);
                  return n.Ws().next(function (t) {
                    var e = s.Pr(t, 18e5),
                        r = t.filter(function (t) {
                      return -1 === e.indexOf(t);
                    }); // Delete metadata for clients that are no longer considered active.

                    return Tn.forEach(r, function (t) {
                      return n["delete"](t.clientId);
                    }).next(function () {
                      return r;
                    });
                  });
                })["catch"](function () {
                  return [];
                })]);

              case 1:
                // Delete potential leftover entries that may continue to mark the
                // inactive clients as zombied in LocalStorage.
                // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
                // the client atomically, but we can't. So we opt to delete the IndexedDb
                // entries first to avoid potentially reviving a zombied client.
                if (n = e.sent(), this.Zi) for (r = 0, i = n; r < i.length; r++) {
                  o = i[r], this.Zi.removeItem(this.Vr(o.clientId));
                }
                e.label = 2;

              case 2:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Schedules a recurring timer to update the client metadata and to either
       * extend or acquire the primary lease if the client is eligible.
       */
      t.prototype.rr = function () {
        var t = this;
        this.Ki = this.bs.Os("client_metadata_refresh"
        /* ClientMetadataRefresh */
        , 4e3, function () {
          return t.nr().then(function () {
            return t.Ar();
          }).then(function () {
            return t.rr();
          });
        });
      },
      /** Checks whether `client` is the local client. */
      t.prototype.Ir = function (t) {
        return !!t && t.ownerId === this.clientId;
      },
      /**
       * Evaluate the state of all active clients and determine whether the local
       * client is or can act as the holder of the primary lease. Returns whether
       * the client is eligible for the lease, but does not actually acquire it.
       * May return 'false' even if there is no active leaseholder and another
       * (foreground) client should become leaseholder instead.
       */
      t.prototype.wr = function (t) {
        var e = this;
        return this.qi ? Tn.resolve(!0) : fr(t).get(Nr.key).next(function (n) {
          // A client is eligible for the primary lease if:
          // - its network is enabled and the client's tab is in the foreground.
          // - its network is enabled and no other client's tab is in the
          //   foreground.
          // - every clients network is disabled and the client's tab is in the
          //   foreground.
          // - every clients network is disabled and no other client's tab is in
          //   the foreground.
          // - the `forceOwningTab` setting was passed in.
          if (null !== n && e.Rr(n.leaseTimestampMs, 5e3) && !e.gr(n.ownerId)) {
            if (e.Ir(n) && e.networkEnabled) return !0;

            if (!e.Ir(n)) {
              if (!n.allowTabSynchronization) // Fail the `canActAsPrimary` check if the current leaseholder has
                // not opted into multi-tab synchronization. If this happens at
                // client startup, we reject the Promise returned by
                // `enablePersistence()` and the user can continue to use Firestore
                // with in-memory persistence.
                // If this fails during a lease refresh, we will instead block the
                // AsyncQueue from executing further operations. Note that this is
                // acceptable since mixing & matching different `synchronizeTabs`
                // settings is not supported.
                // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                // no longer be turned off.
                throw new D(x.FAILED_PRECONDITION, ar);
              return !1;
            }
          }

          return !(!e.networkEnabled || !e.inForeground) || lr(t).Ws().next(function (t) {
            return void 0 === e.Pr(t, 5e3).find(function (t) {
              if (e.clientId !== t.clientId) {
                var n = !e.networkEnabled && t.networkEnabled,
                    r = !e.inForeground && t.inForeground,
                    i = e.networkEnabled === t.networkEnabled;
                if (n || r && i) return !0;
              }

              return !1;
            });
          });
        }).next(function (t) {
          return e.isPrimary !== t && h("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t;
        });
      }, t.prototype.yr = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                // The shutdown() operations are idempotent and can be called even when
                // start() aborted (e.g. because it couldn't acquire the persistence lease).
                return this.Qi = !1, this.pr(), this.Ki && (this.Ki.cancel(), this.Ki = null), this.br(), this.vr(), [4
                /*yield*/
                , this.runTransaction("shutdown", "readwrite", function (e) {
                  return t.Tr(e).next(function () {
                    return t.mr(e);
                  });
                })["catch"](function (t) {
                  h("IndexedDbPersistence", "Proceeding with shutdown despite failure: ", t);
                })];

              case 1:
                // The shutdown() operations are idempotent and can be called even when
                // start() aborted (e.g. because it couldn't acquire the persistence lease).
                return e.sent(), this.er.close(), // Remove the entry marking the client as zombied from LocalStorage since
                // we successfully deleted its metadata from IndexedDb.
                this.Sr(), [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Returns clients that are not zombied and have an updateTime within the
       * provided threshold.
       */
      t.prototype.Pr = function (t, e) {
        var n = this;
        return t.filter(function (t) {
          return n.Rr(t.updateTimeMs, e) && !n.gr(t.clientId);
        });
      },
      /**
       * Returns the IDs of the clients that are currently active. If multi-tab
       * is not supported, returns an array that only contains the local client's
       * ID.
       *
       * PORTING NOTE: This is only used for Web multi-tab.
       */
      t.prototype.Dr = function () {
        var t = this;
        return this.runTransaction("getActiveClients", "readonly", function (e) {
          return lr(e).Ws().next(function (e) {
            return t.Pr(e, 18e5).map(function (t) {
              return t.clientId;
            });
          });
        });
      }, t.clearPersistence = function (n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var r;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return t.Hi() ? (r = n + t.Ji, [4
                /*yield*/
                , jr["delete"](r)]) : [2
                /*return*/
                , Promise.resolve()];

              case 1:
                return e.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }, Object.defineProperty(t.prototype, "hr", {
        get: function get() {
          return this.Qi;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.Cr = function (t) {
        return yr.Fr(t, this.serializer, this.ss, this.wi);
      }, t.prototype.Nr = function () {
        return this.Xi;
      }, t.prototype.$r = function () {
        return this.es;
      }, t.prototype.kr = function () {
        return this.ss;
      }, t.prototype.runTransaction = function (t, e, n) {
        var r = this;
        h("IndexedDbPersistence", "Starting transaction:", t);
        var i,
            o = "readonly" === e ? "readonly" : "readwrite"; // Do all transactions as readwrite against all object stores, since we
        // are the only reader/writer.

        return this.er.runTransaction(o, Fr, function (o) {
          return i = new cr(o, r.Ui ? r.Ui.next() : kn.ps), "readwrite-primary" === e ? r._r(i).next(function (t) {
            return !!t || r.wr(i);
          }).next(function (e) {
            if (!e) throw f("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, r.bs.dr(function () {
              return r.zi(!1);
            }), new D(x.FAILED_PRECONDITION, xn);
            return n(i);
          }).next(function (t) {
            return r.Er(i).next(function () {
              return t;
            });
          }) : r.xr(i).next(function () {
            return n(i);
          });
        }).then(function (t) {
          return i.ts(), t;
        });
      },
      /**
       * Verifies that the current tab is the primary leaseholder or alternatively
       * that the leaseholder has opted into multi-tab synchronization.
       */
      // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
      // be turned off.
      t.prototype.xr = function (t) {
        var e = this;
        return fr(t).get(Nr.key).next(function (t) {
          if (null !== t && e.Rr(t.leaseTimestampMs, 5e3) && !e.gr(t.ownerId) && !e.Ir(t) && !(e.qi || e.allowTabSynchronization && t.allowTabSynchronization)) throw new D(x.FAILED_PRECONDITION, ar);
        });
      },
      /**
       * Obtains or extends the new primary lease for the local client. This
       * method does not verify that the client is eligible for this lease.
       */
      t.prototype.Er = function (t) {
        var e = new Nr(this.clientId, this.allowTabSynchronization, Date.now());
        return fr(t).put(Nr.key, e);
      }, t.Hi = function () {
        return jr.Hi();
      },
      /**
       * Generates a string used as a prefix when storing data in IndexedDB and
       * LocalStorage.
       */
      t.Mr = function (t) {
        // Use two different prefix formats:
        //   * firestore / persistenceKey / projectID . databaseID / ...
        //   * firestore / persistenceKey / projectID / ...
        // projectIDs are DNS-compatible names and cannot contain dots
        // so there's no danger of collisions.
        var e = t.s.projectId;
        return t.s.i || (e += "." + t.s.database), "firestore/" + t.persistenceKey + "/" + e + "/";
      },
      /** Checks the primary lease and removes it if we are the current primary. */
      t.prototype.Tr = function (t) {
        var e = this,
            n = fr(t);
        return n.get(Nr.key).next(function (t) {
          return e.Ir(t) ? (h("IndexedDbPersistence", "Releasing primary lease."), n["delete"](Nr.key)) : Tn.resolve();
        });
      },
      /** Verifies that `updateTimeMs` is within `maxAgeMs`. */
      t.prototype.Rr = function (t, e) {
        var n = Date.now();
        return !(t < n - e || t > n && (f("Detected an update time that is in the future: " + t + " > " + n), 1));
      }, t.prototype.sr = function () {
        var t = this;
        null !== this.document && "function" == typeof this.document.addEventListener && (this.ji = function () {
          t.bs.lr(function () {
            return t.inForeground = "visible" === t.document.visibilityState, t.nr();
          });
        }, this.document.addEventListener("visibilitychange", this.ji), this.inForeground = "visible" === this.document.visibilityState);
      }, t.prototype.br = function () {
        this.ji && (this.document.removeEventListener("visibilitychange", this.ji), this.ji = null);
      },
      /**
       * Attaches a window.unload handler that will synchronously write our
       * clientId to a "zombie client id" location in LocalStorage. This can be used
       * by tabs trying to acquire the primary lease to determine that the lease
       * is no longer valid even if the timestamp is recent. This is particularly
       * important for the refresh case (so the tab correctly re-acquires the
       * primary lease). LocalStorage is used for this rather than IndexedDb because
       * it is a synchronous API and so can be used reliably from  an unload
       * handler.
       */
      t.prototype.ir = function () {
        var t,
            e = this;
        "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.Wi = function () {
          // Note: In theory, this should be scheduled on the AsyncQueue since it
          // accesses internal state. We execute this code directly during shutdown
          // to make sure it gets a chance to run.
          e.pr(), e.bs.lr(function () {
            return e.yr();
          });
        }, this.window.addEventListener("unload", this.Wi));
      }, t.prototype.vr = function () {
        this.Wi && (this.window.removeEventListener("unload", this.Wi), this.Wi = null);
      },
      /**
       * Returns whether a client is "zombied" based on its LocalStorage entry.
       * Clients become zombied when their tab closes without running all of the
       * cleanup logic in `shutdown()`.
       */
      t.prototype.gr = function (t) {
        var e;

        try {
          var n = null !== (null === (e = this.Zi) || void 0 === e ? void 0 : e.getItem(this.Vr(t)));
          return h("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), n;
        } catch (t) {
          // Gracefully handle if LocalStorage isn't working.
          return f("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
        }
      },
      /**
       * Record client as zombied (a client that had its tab closed). Zombied
       * clients are ignored during primary tab selection.
       */
      t.prototype.pr = function () {
        if (this.Zi) try {
          this.Zi.setItem(this.Vr(this.clientId), String(Date.now()));
        } catch (t) {
          // Gracefully handle if LocalStorage isn't available / working.
          f("Failed to set zombie client id.", t);
        }
      },
      /** Removes the zombied client entry if it exists. */
      t.prototype.Sr = function () {
        if (this.Zi) try {
          this.Zi.removeItem(this.Vr(this.clientId));
        } catch (t) {// Ignore
        }
      }, t.prototype.Vr = function (t) {
        return "firestore_zombie_" + this.persistenceKey + "_" + t;
      }, t;
    }();
    /**
     * Oldest acceptable age in milliseconds for client metadata before the client
     * is considered inactive and its associated data is garbage collected.
     */

    /**
     * The name of the main (and currently only) IndexedDB database. this name is
     * appended to the prefix provided to the IndexedDbPersistence constructor.
     */

    /**
     * Helper to get a typed SimpleDbStore for the primary client object store.
     */


    function fr(t) {
      return hr.js(t, Nr.store);
    }
    /**
     * Helper to get a typed SimpleDbStore for the client metadata object store.
     */


    function lr(t) {
      return hr.js(t, Cr.store);
    }
    /** Provides LRU functionality for IndexedDB persistence. */


    hr.Ji = "main";

    var pr =
    /** @class */
    function () {
      function t(t, e) {
        this.db = t, this.Or = new ri(this, e);
      }

      return t.prototype.Lr = function (t) {
        var e = this.Br(t);
        return this.db.Nr().Si(t).next(function (t) {
          return e.next(function (e) {
            return t + e;
          });
        });
      }, t.prototype.Br = function (t) {
        var e = 0;
        return this.qr(t, function (t) {
          e++;
        }).next(function () {
          return e;
        });
      }, t.prototype.pe = function (t, e) {
        return this.db.Nr().pe(t, e);
      }, t.prototype.qr = function (t, e) {
        return this.Ur(t, function (t, n) {
          return e(n);
        });
      }, t.prototype.Fi = function (t, e, n) {
        return dr(t, n);
      }, t.prototype.$i = function (t, e, n) {
        return dr(t, n);
      }, t.prototype.vi = function (t, e, n) {
        return this.db.Nr().vi(t, e, n);
      }, t.prototype.Qr = function (t, e) {
        return dr(t, e);
      },
      /**
       * Returns true if anything would prevent this document from being garbage
       * collected, given that the document in question is not present in any
       * targets and has a sequence number less than or equal to the upper bound for
       * the collection run.
       */
      t.prototype.Wr = function (t, e) {
        /** Returns true if any mutation queue contains the given document. */
        return function (t, e) {
          var n = !1;
          return br(t).jr(function (r) {
            return vr(t, r, e).next(function (t) {
              return t && (n = !0), Tn.resolve(!t);
            });
          }).next(function () {
            return n;
          });
        }(t, e);
      }, t.prototype.Kr = function (t, e) {
        var n = this,
            r = this.db.$r().oi(),
            i = [],
            o = 0;
        return this.Ur(t, function (s, u) {
          if (u <= e) {
            var a = n.Wr(t, s).next(function (e) {
              if (!e) // Our size accounting requires us to read all documents before
                // removing them.
                return o++, r.zn(t, s).next(function () {
                  return r.Gn(s), ur(t)["delete"]([0, On(s.path)]);
                });
            });
            i.push(a);
          }
        }).next(function () {
          return Tn.Bn(i);
        }).next(function () {
          return r.apply(t);
        }).next(function () {
          return o;
        });
      }, t.prototype.removeTarget = function (t, e) {
        var n = e.Z(t.Li);
        return this.db.Nr().yi(t, n);
      }, t.prototype.Gr = function (t, e) {
        return dr(t, e);
      },
      /**
       * Call provided function for each document in the cache that is 'orphaned'. Orphaned
       * means not a part of any target, so the only entry in the target-document index for
       * that document will be the sentinel row (targetId 0), which will also have the sequence
       * number for the last time the document was accessed.
       */
      t.prototype.Ur = function (t, e) {
        var n,
            r = ur(t),
            i = kn.ps;
        return r.ei({
          index: Lr.documentTargetsIndex
        }, function (t, r) {
          var o = t[0],
              s = (t[1], r.path),
              u = r.sequenceNumber;
          0 === o ? ( // if nextToReport is valid, report it, this is a new key so the
          // last one must not be a member of any targets.
          i !== kn.ps && e(new V(Cn(n)), i), // set nextToReport to be this sequence number. It's the next one we
          // might report, if we don't find any targets for this document.
          // Note that the sequence number must be defined when the targetId
          // is 0.
          i = u, n = s) : // set nextToReport to be invalid, we know we don't need to report
          // this one since we found a target for it.
          i = kn.ps;
        }).next(function () {
          // Since we report sequence numbers after getting to the next key, we
          // need to check if the last key we iterated over was an orphaned
          // document and report it.
          i !== kn.ps && e(new V(Cn(n)), i);
        });
      }, t.prototype.zr = function (t) {
        return this.db.$r().ui(t);
      }, t;
    }();

    function dr(t, e) {
      return ur(t).put(
      /**
      * @return A value suitable for writing a sentinel row in the target-document
      * store.
      */
      function (t, e) {
        return new Lr(0, On(t.path), e);
      }(e, t.Li));
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** A mutation queue for a specific user, backed by IndexedDB. */


    var yr =
    /** @class */
    function () {
      function t(
      /**
       * The normalized userId (e.g. null UID => "" userId) used to store /
       * retrieve mutations.
       */
      t, e, n, r) {
        this.userId = t, this.serializer = e, this.ss = n, this.wi = r,
        /**
             * Caches the document keys for pending mutation batches. If the mutation
             * has been removed from IndexedDb, the cached value may continue to
             * be used to retrieve the batch's document keys. To remove a cached value
             * locally, `removeCachedMutationKeys()` should be invoked either directly
             * or through `removeMutationBatches()`.
             *
             * With multi-tab, when the primary client acknowledges or rejects a mutation,
             * this cache is used by secondary clients to invalidate the local
             * view of the documents that were previously affected by the mutation.
             */
        // PORTING NOTE: Multi-tab only.
        this.Hr = {}
        /**
        * Creates a new mutation queue for the given user.
        * @param user The user for which to create a mutation queue.
        * @param serializer The serializer to use when persisting to IndexedDb.
        */
        ;
      }

      return t.Fr = function (e, n, r, i) {
        // TODO(mcg): Figure out what constraints there are on userIDs
        // In particular, are there any reserved characters? are empty ids allowed?
        // For the moment store these together in the same mutations table assuming
        // that empty userIDs aren't allowed.
        return d("" !== e.uid), new t(e.Yr() ? e.uid : "", n, r, i);
      }, t.prototype.Jr = function (t) {
        var e = !0,
            n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
        return mr(t).ei({
          index: Ar.userMutationsIndex,
          range: n
        }, function (t, n, r) {
          e = !1, r.done();
        }).next(function () {
          return e;
        });
      }, t.prototype.Xr = function (t, e, n, r) {
        var i = this,
            o = wr(t),
            s = mr(t); // The IndexedDb implementation in Chrome (and Firefox) does not handle
        // compound indices that include auto-generated keys correctly. To ensure
        // that the index entry is added correctly in all browsers, we perform two
        // writes: The first write is used to retrieve the next auto-generated Batch
        // ID, and the second write populates the index and stores the actual
        // mutation batch.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
        // We write an empty object to obtain key
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        return s.add({}).next(function (u) {
          d("number" == typeof u);

          for (var a = new En(u, e, n, r), c = function (t, e, n) {
            var r = n.baseMutations.map(function (e) {
              return ue(t.Ks, e);
            }),
                i = n.mutations.map(function (e) {
              return ue(t.Ks, e);
            });
            return new Ar(e, n.batchId, n.yn.toMillis(), r, i);
          }(i.serializer, i.userId, a), h = [], f = new tt(function (t, e) {
            return m(t.N(), e.N());
          }), l = 0, p = r; l < p.length; l++) {
            var y = p[l],
                v = xr.key(i.userId, y.key.path, u);
            f = f.add(y.key.path.p()), h.push(s.put(c)), h.push(o.put(v, xr.PLACEHOLDER));
          }

          return f.forEach(function (e) {
            h.push(i.ss.Us(t, e));
          }), t.Zn(function () {
            i.Hr[u] = a.keys();
          }), Tn.Bn(h).next(function () {
            return a;
          });
        });
      }, t.prototype.Zr = function (t, e) {
        var n = this;
        return mr(t).get(e).next(function (t) {
          return t ? (d(t.userId === n.userId), Xn(n.serializer, t)) : null;
        });
      },
      /**
       * Returns the document keys for the mutation batch with the given batchId.
       * For primary clients, this method returns `null` after
       * `removeMutationBatches()` has been called. Secondary clients return a
       * cached result until `removeCachedMutationKeys()` is invoked.
       */
      // PORTING NOTE: Multi-tab only.
      t.prototype.to = function (t, e) {
        var n = this;
        return this.Hr[e] ? Tn.resolve(this.Hr[e]) : this.Zr(t, e).next(function (t) {
          if (t) {
            var r = t.keys();
            return n.Hr[e] = r, r;
          }

          return null;
        });
      }, t.prototype.eo = function (t, e) {
        var n = this,
            r = e + 1,
            i = IDBKeyRange.lowerBound([this.userId, r]),
            o = null;
        return mr(t).ei({
          index: Ar.userMutationsIndex,
          range: i
        }, function (t, e, i) {
          e.userId === n.userId && (d(e.batchId >= r), o = Xn(n.serializer, e)), i.done();
        }).next(function () {
          return o;
        });
      }, t.prototype.no = function (t) {
        var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
            n = -1;
        return mr(t).ei({
          index: Ar.userMutationsIndex,
          range: e,
          reverse: !0
        }, function (t, e, r) {
          n = e.batchId, r.done();
        }).next(function () {
          return n;
        });
      }, t.prototype.so = function (t) {
        var e = this,
            n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
        return mr(t).Ws(Ar.userMutationsIndex, n).next(function (t) {
          return t.map(function (t) {
            return Xn(e.serializer, t);
          });
        });
      }, t.prototype.os = function (t, e) {
        var n = this,
            r = xr.prefixForPath(this.userId, e.path),
            i = IDBKeyRange.lowerBound(r),
            o = []; // Scan the document-mutation index starting with a prefix starting with
        // the given documentKey.

        return wr(t).ei({
          range: i
        }, function (r, i, s) {
          var u = r[0],
              a = r[1],
              c = r[2],
              h = Cn(a); // Only consider rows matching exactly the specific key of
          // interest. Note that because we order by path first, and we
          // order terminators before path separators, we'll encounter all
          // the index rows for documentKey contiguously. In particular, all
          // the rows for documentKey will occur before any rows for
          // documents nested in a subcollection beneath documentKey so we
          // can stop as soon as we hit any such row.

          if (u === n.userId && e.path.isEqual(h)) // Look up the mutation batch in the store.
            return mr(t).get(c).next(function (t) {
              if (!t) throw p();
              d(t.userId === n.userId), o.push(Xn(n.serializer, t));
            });
          s.done();
        }).next(function () {
          return o;
        });
      }, t.prototype.ls = function (t, e) {
        var n = this,
            r = new tt(m),
            i = [];
        return e.forEach(function (e) {
          var o = xr.prefixForPath(n.userId, e.path),
              s = IDBKeyRange.lowerBound(o),
              u = wr(t).ei({
            range: s
          }, function (t, i, o) {
            var s = t[0],
                u = t[1],
                a = t[2],
                c = Cn(u); // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.

            s === n.userId && e.path.isEqual(c) ? r = r.add(a) : o.done();
          });
          i.push(u);
        }), Tn.Bn(i).next(function () {
          return n.io(t, r);
        });
      }, t.prototype.Es = function (t, e) {
        var n = this,
            r = e.path,
            i = r.length + 1,
            o = xr.prefixForPath(this.userId, r),
            s = IDBKeyRange.lowerBound(o),
            u = new tt(m);
        return wr(t).ei({
          range: s
        }, function (t, e, o) {
          var s = t[0],
              a = t[1],
              c = t[2],
              h = Cn(a);
          s === n.userId && r.D(h) ? // Rows with document keys more than one segment longer than the
          // query path can't be matches. For example, a query on 'rooms'
          // can't match the document /rooms/abc/messages/xyx.
          // TODO(mcg): we'll need a different scanner when we implement
          // ancestor queries.
          h.length === i && (u = u.add(c)) : o.done();
        }).next(function () {
          return n.io(t, u);
        });
      }, t.prototype.io = function (t, e) {
        var n = this,
            r = [],
            i = []; // TODO(rockwood): Implement this using iterate.

        return e.forEach(function (e) {
          i.push(mr(t).get(e).next(function (t) {
            if (null === t) throw p();
            d(t.userId === n.userId), r.push(Xn(n.serializer, t));
          }));
        }), Tn.Bn(i).next(function () {
          return r;
        });
      }, t.prototype.ro = function (t, e) {
        var n = this;
        return gr(t.Oi, this.userId, e).next(function (r) {
          return t.Zn(function () {
            n.oo(e.batchId);
          }), Tn.forEach(r, function (e) {
            return n.wi.Qr(t, e);
          });
        });
      },
      /**
       * Clears the cached keys for a mutation batch. This method should be
       * called by secondary clients after they process mutation updates.
       *
       * Note that this method does not have to be called from primary clients as
       * the corresponding cache entries are cleared when an acknowledged or
       * rejected batch is removed from the mutation queue.
       */
      // PORTING NOTE: Multi-tab only
      t.prototype.oo = function (t) {
        delete this.Hr[t];
      }, t.prototype.ho = function (t) {
        var e = this;
        return this.Jr(t).next(function (n) {
          if (!n) return Tn.resolve(); // Verify that there are no entries in the documentMutations index if
          // the queue is empty.

          var r = IDBKeyRange.lowerBound(xr.prefixForUser(e.userId)),
              i = [];
          return wr(t).ei({
            range: r
          }, function (t, n, r) {
            if (t[0] === e.userId) {
              var o = Cn(t[1]);
              i.push(o);
            } else r.done();
          }).next(function () {
            d(0 === i.length);
          });
        });
      }, t.prototype.Mi = function (t, e) {
        return vr(t, this.userId, e);
      }, // PORTING NOTE: Multi-tab only (state is held in memory in other clients).

      /** Returns the mutation queue's metadata from IndexedDb. */
      t.prototype.ao = function (t) {
        var e = this;
        return br(t).get(this.userId).next(function (t) {
          return t || new Tr(e.userId, -1,
          /*lastStreamToken=*/
          "");
        });
      }, t;
    }();
    /**
     * @return true if the mutation queue for the given user contains a pending
     *         mutation for the given key.
     */


    function vr(t, e, n) {
      var r = xr.prefixForPath(e, n.path),
          i = r[1],
          o = IDBKeyRange.lowerBound(r),
          s = !1;
      return wr(t).ei({
        range: o,
        xi: !0
      }, function (t, n, r) {
        var o = t[0],
            u = t[1];
        t[2];
        o === e && u === i && (s = !0), r.done();
      }).next(function () {
        return s;
      });
    }

    function gr(t, e, n) {
      var r = t.store(Ar.store),
          i = t.store(xr.store),
          o = [],
          s = IDBKeyRange.only(n.batchId),
          u = 0,
          a = r.ei({
        range: s
      }, function (t, e, n) {
        return u++, n["delete"]();
      });
      o.push(a.next(function () {
        d(1 === u);
      }));

      for (var c = [], h = 0, f = n.mutations; h < f.length; h++) {
        var l = f[h],
            p = xr.key(e, l.key.path, n.batchId);
        o.push(i["delete"](p)), c.push(l.key);
      }

      return Tn.Bn(o).next(function () {
        return c;
      });
    }
    /**
     * Helper to get a typed SimpleDbStore for the mutations object store.
     */


    function mr(t) {
      return hr.js(t, Ar.store);
    }
    /**
     * Helper to get a typed SimpleDbStore for the mutationQueues object store.
     */


    function wr(t) {
      return hr.js(t, xr.store);
    }
    /**
     * Helper to get a typed SimpleDbStore for the mutationQueues object store.
     */


    function br(t) {
      return hr.js(t, Tr.store);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Schema Version for the Web client:
     * 1.  Initial version including Mutation Queue, Query Cache, and Remote
     *     Document Cache
     * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
     *     longer required because migration 3 unconditionally clears it.
     * 3.  Dropped and re-created Query Cache to deal with cache corruption related
     *     to limbo resolution. Addresses
     *     https://github.com/firebase/firebase-ios-sdk/issues/1548
     * 4.  Multi-Tab Support.
     * 5.  Removal of held write acks.
     * 6.  Create document global for tracking document cache size.
     * 7.  Ensure every cached document has a sentinel row with a sequence number.
     * 8.  Add collection-parent index for Collection Group queries.
     * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
     *     an auto-incrementing ID. This is required for Index-Free queries.
     * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
     */


    var _r = 10,
        Ir =
    /** @class */
    function () {
      function t(t) {
        this.serializer = t;
      }
      /**
       * Performs database creation and schema upgrades.
       *
       * Note that in production, this method is only ever used to upgrade the schema
       * to SCHEMA_VERSION. Different values of toVersion are only used for testing
       * and local feature development.
       */


      return t.prototype.createOrUpgrade = function (t, e, n, r) {
        var i = this;
        d(n < r && n >= 0 && r <= _r);
        var o = new Gr(e);
        n < 1 && r >= 1 && (function (t) {
          t.createObjectStore(Nr.store);
        }(t), function (t) {
          t.createObjectStore(Tr.store, {
            keyPath: Tr.keyPath
          }), t.createObjectStore(Ar.store, {
            keyPath: Ar.keyPath,
            autoIncrement: !0
          }).createIndex(Ar.userMutationsIndex, Ar.userMutationsKeyPath, {
            unique: !0
          }), t.createObjectStore(xr.store);
        }(t), Ur(t), function (t) {
          t.createObjectStore(Pr.store);
        }(t)); // Migration 2 to populate the targetGlobal object no longer needed since
        // migration 3 unconditionally clears it.

        var s = Tn.resolve();
        return n < 3 && r >= 3 && ( // Brand new clients don't need to drop and recreate--only clients that
        // potentially have corrupt data.
        0 !== n && (function (t) {
          t.deleteObjectStore(Lr.store), t.deleteObjectStore(Rr.store), t.deleteObjectStore(Or.store);
        }(t), Ur(t)), s = s.next(function () {
          /**
          * Creates the target global singleton row.
          *
          * @param {IDBTransaction} txn The version upgrade transaction for indexeddb
          */
          return function (t) {
            var e = t.store(Or.store),
                n = new Or(
            /*highestTargetId=*/
            0,
            /*lastListenSequenceNumber=*/
            0, P.min().A(),
            /*targetCount=*/
            0);
            return e.put(Or.key, n);
          }(o);
        })), n < 4 && r >= 4 && (0 !== n && ( // Schema version 3 uses auto-generated keys to generate globally unique
        // mutation batch IDs (this was previously ensured internally by the
        // client). To migrate to the new schema, we have to read all mutations
        // and write them back out. We preserve the existing batch IDs to guarantee
        // consistency with other object stores. Any further mutation batch IDs will
        // be auto-generated.
        s = s.next(function () {
          return function (t, e) {
            return e.store(Ar.store).Ws().next(function (n) {
              t.deleteObjectStore(Ar.store), t.createObjectStore(Ar.store, {
                keyPath: Ar.keyPath,
                autoIncrement: !0
              }).createIndex(Ar.userMutationsIndex, Ar.userMutationsKeyPath, {
                unique: !0
              });
              var r = e.store(Ar.store),
                  i = n.map(function (t) {
                return r.put(t);
              });
              return Tn.Bn(i);
            });
          }(t, o);
        })), s = s.next(function () {
          !function (t) {
            t.createObjectStore(Cr.store, {
              keyPath: Cr.keyPath
            });
          }(t);
        })), n < 5 && r >= 5 && (s = s.next(function () {
          return i.removeAcknowledgedMutations(o);
        })), n < 6 && r >= 6 && (s = s.next(function () {
          return function (t) {
            t.createObjectStore(kr.store);
          }(t), i.addDocumentGlobal(o);
        })), n < 7 && r >= 7 && (s = s.next(function () {
          return i.ensureSequenceNumbers(o);
        })), n < 8 && r >= 8 && (s = s.next(function () {
          return i.createCollectionParentIndex(t, o);
        })), n < 9 && r >= 9 && (s = s.next(function () {
          // Multi-Tab used to manage its own changelog, but this has been moved
          // to the DbRemoteDocument object store itself. Since the previous change
          // log only contained transient data, we can drop its object store.
          !function (t) {
            t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
          }(t), function (t) {
            var e = t.objectStore(Pr.store);
            e.createIndex(Pr.readTimeIndex, Pr.readTimeIndexPath, {
              unique: !1
            }), e.createIndex(Pr.collectionReadTimeIndex, Pr.collectionReadTimeIndexPath, {
              unique: !1
            });
          }(e);
        })), n < 10 && r >= 10 && (s = s.next(function () {
          return i.rewriteCanonicalIds(o);
        })), s;
      }, t.prototype.addDocumentGlobal = function (t) {
        var e = 0;
        return t.store(Pr.store).ei(function (t, n) {
          e += nr(n);
        }).next(function () {
          var n = new kr(e);
          return t.store(kr.store).put(kr.key, n);
        });
      }, t.prototype.removeAcknowledgedMutations = function (t) {
        var e = this,
            n = t.store(Tr.store),
            r = t.store(Ar.store);
        return n.Ws().next(function (n) {
          return Tn.forEach(n, function (n) {
            var i = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
            return r.Ws(Ar.userMutationsIndex, i).next(function (r) {
              return Tn.forEach(r, function (r) {
                d(r.userId === n.userId);
                var i = Xn(e.serializer, r);
                return gr(t, n.userId, i).next(function () {});
              });
            });
          });
        });
      },
      /**
       * Ensures that every document in the remote document cache has a corresponding sentinel row
       * with a sequence number. Missing rows are given the most recently used sequence number.
       */
      t.prototype.ensureSequenceNumbers = function (t) {
        var e = t.store(Lr.store),
            n = t.store(Pr.store);
        return t.store(Or.store).get(Or.key).next(function (t) {
          var r = [];
          return n.ei(function (n, i) {
            var o = new R(n),
                s = function (t) {
              return [0, On(t)];
            }(o);

            r.push(e.get(s).next(function (n) {
              return n ? Tn.resolve() : function (n) {
                return e.put(new Lr(0, On(n), t.highestListenSequenceNumber));
              }(o);
            }));
          }).next(function () {
            return Tn.Bn(r);
          });
        });
      }, t.prototype.createCollectionParentIndex = function (t, e) {
        // Create the index.
        t.createObjectStore(Vr.store, {
          keyPath: Vr.keyPath
        });

        var n = e.store(Vr.store),
            r = new jn(),
            i = function i(t) {
          if (r.add(t)) {
            var e = t.S(),
                i = t.p();
            return n.put({
              collectionId: e,
              parent: On(i)
            });
          }
        }; // Helper to add an index entry iff we haven't already written it.
        // Index existing remote documents.


        return e.store(Pr.store).ei({
          xi: !0
        }, function (t, e) {
          var n = new R(t);
          return i(n.p());
        }).next(function () {
          return e.store(xr.store).ei({
            xi: !0
          }, function (t, e) {
            t[0];
            var n = t[1],
                r = (t[2], Cn(n));
            return i(r.p());
          });
        });
      }, t.prototype.rewriteCanonicalIds = function (t) {
        var e = this,
            n = t.store(Rr.store);
        return n.ei(function (t, r) {
          var i = Hn(r),
              o = $n(e.serializer, i);
          return n.put(o);
        });
      }, t;
    }(),
        Er = function Er(t, e) {
      this.seconds = t, this.nanoseconds = e;
    },
        Nr = function Nr(t,
    /** Whether to allow shared access from multiple tabs. */
    e, n) {
      this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
    };
    /** Performs database creation and schema upgrades. */

    /**
     * Name of the IndexedDb object store.
     *
     * Note that the name 'owner' is chosen to ensure backwards compatibility with
     * older clients that only supported single locked access to the persistence
     * layer.
     */


    Nr.store = "owner",
    /**
         * The key string used for the single object that exists in the
         * DbPrimaryClient store.
         */
    Nr.key = "owner";

    var Tr = function Tr(
    /**
         * The normalized user ID to which this queue belongs.
         */
    t,
    /**
         * An identifier for the highest numbered batch that has been acknowledged
         * by the server. All MutationBatches in this queue with batchIds less
         * than or equal to this value are considered to have been acknowledged by
         * the server.
         *
         * NOTE: this is deprecated and no longer used by the code.
         */
    e,
    /**
         * A stream token that was previously sent by the server.
         *
         * See StreamingWriteRequest in datastore.proto for more details about
         * usage.
         *
         * After sending this token, earlier tokens may not be used anymore so
         * only a single stream token is retained.
         *
         * NOTE: this is deprecated and no longer used by the code.
         */
    n) {
      this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
    };
    /** Name of the IndexedDb object store.  */


    Tr.store = "mutationQueues",
    /** Keys are automatically assigned via the userId property. */
    Tr.keyPath = "userId";
    /**
     * An object to be stored in the 'mutations' store in IndexedDb.
     *
     * Represents a batch of user-level mutations intended to be sent to the server
     * in a single write. Each user-level batch gets a separate DbMutationBatch
     * with a new batchId.
     */

    var Ar = function Ar(
    /**
         * The normalized user ID to which this batch belongs.
         */
    t,
    /**
         * An identifier for this batch, allocated using an auto-generated key.
         */
    e,
    /**
         * The local write time of the batch, stored as milliseconds since the
         * epoch.
         */
    n,
    /**
         * A list of "mutations" that represent a partial base state from when this
         * write batch was initially created. During local application of the write
         * batch, these baseMutations are applied prior to the real writes in order
         * to override certain document fields from the remote document cache. This
         * is necessary in the case of non-idempotent writes (e.g. `increment()`
         * transforms) to make sure that the local view of the modified documents
         * doesn't flicker if the remote document cache receives the result of the
         * non-idempotent write before the write is removed from the queue.
         *
         * These mutations are never sent to the backend.
         */
    r,
    /**
         * A list of mutations to apply. All mutations will be applied atomically.
         *
         * Mutations are serialized via toMutation().
         */
    i) {
      this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, this.mutations = i;
    };
    /** Name of the IndexedDb object store.  */


    Ar.store = "mutations",
    /** Keys are automatically assigned via the userId, batchId properties. */
    Ar.keyPath = "batchId",
    /** The index name for lookup of mutations by user. */
    Ar.userMutationsIndex = "userMutationsIndex",
    /** The user mutations index is keyed by [userId, batchId] pairs. */
    Ar.userMutationsKeyPath = ["userId", "batchId"];

    var xr =
    /** @class */
    function () {
      function t() {}
      /**
       * Creates a [userId] key for use in the DbDocumentMutations index to iterate
       * over all of a user's document mutations.
       */


      return t.prefixForUser = function (t) {
        return [t];
      },
      /**
       * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
       * index to iterate over all at document mutations for a given path or lower.
       */
      t.prefixForPath = function (t, e) {
        return [t, On(e)];
      },
      /**
       * Creates a full index key of [userId, encodedPath, batchId] for inserting
       * and deleting into the DbDocumentMutations index.
       */
      t.key = function (t, e, n) {
        return [t, On(e), n];
      }, t;
    }();

    xr.store = "documentMutations",
    /**
         * Because we store all the useful information for this store in the key,
         * there is no useful information to store as the value. The raw (unencoded)
         * path cannot be stored because IndexedDb doesn't store prototype
         * information.
         */
    xr.PLACEHOLDER = new xr();

    var Dr = function Dr(t, e) {
      this.path = t, this.readTime = e;
    },
        Sr = function Sr(t, e) {
      this.path = t, this.version = e;
    },
        Pr = // TODO: We are currently storing full document keys almost three times
    // (once as part of the primary key, once - partly - as `parentPath` and once
    // inside the encoded documents). During our next migration, we should
    // rewrite the primary key as parentPath + document ID which would allow us
    // to drop one value.
    function Pr(
    /**
         * Set to an instance of DbUnknownDocument if the data for a document is
         * not known, but it is known that a document exists at the specified
         * version (e.g. it had a successful update applied to it)
         */
    t,
    /**
         * Set to an instance of a DbNoDocument if it is known that no document
         * exists.
         */
    e,
    /**
         * Set to an instance of a Document if there's a cached version of the
         * document.
         */
    n,
    /**
         * Documents that were written to the remote document store based on
         * a write acknowledgment are marked with `hasCommittedMutations`. These
         * documents are potentially inconsistent with the backend's copy and use
         * the write's commit version as their document version.
         */
    r,
    /**
         * When the document was read from the backend. Undefined for data written
         * prior to schema version 9.
         */
    i,
    /**
         * The path of the collection this document is part of. Undefined for data
         * written prior to schema version 9.
         */
    o) {
      this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, this.readTime = i, this.parentPath = o;
    };
    /**
     * Represents a document that is known to exist but whose data is unknown.
     * Stored in IndexedDb as part of a DbRemoteDocument object.
     */


    Pr.store = "remoteDocuments",
    /**
         * An index that provides access to all entries sorted by read time (which
         * corresponds to the last modification time of each row).
         *
         * This index is used to provide a changelog for Multi-Tab.
         */
    Pr.readTimeIndex = "readTimeIndex", Pr.readTimeIndexPath = "readTime",
    /**
         * An index that provides access to documents in a collection sorted by read
         * time.
         *
         * This index is used to allow the RemoteDocumentCache to fetch newly changed
         * documents in a collection.
         */
    Pr.collectionReadTimeIndex = "collectionReadTimeIndex", Pr.collectionReadTimeIndexPath = ["parentPath", "readTime"];
    /**
     * Contains a single entry that has metadata about the remote document cache.
     */

    var kr =
    /**
         * @param byteSize Approximately the total size in bytes of all the documents in the document
         * cache.
         */
    function kr(t) {
      this.byteSize = t;
    };

    kr.store = "remoteDocumentGlobal", kr.key = "remoteDocumentGlobalKey";

    var Rr = function Rr(
    /**
         * An auto-generated sequential numeric identifier for the query.
         *
         * Queries are stored using their canonicalId as the key, but these
         * canonicalIds can be quite long so we additionally assign a unique
         * queryId which can be used by referenced data structures (e.g.
         * indexes) to minimize the on-disk cost.
         */
    t,
    /**
         * The canonical string representing this query. This is not unique.
         */
    e,
    /**
         * The last readTime received from the Watch Service for this query.
         *
         * This is the same value as TargetChange.read_time in the protos.
         */
    n,
    /**
         * An opaque, server-assigned token that allows watching a query to be
         * resumed after disconnecting without retransmitting all the data
         * that matches the query. The resume token essentially identifies a
         * point in time from which the server should resume sending results.
         *
         * This is related to the snapshotVersion in that the resumeToken
         * effectively also encodes that value, but the resumeToken is opaque
         * and sometimes encodes additional information.
         *
         * A consequence of this is that the resumeToken should be used when
         * asking the server to reason about where this client is in the watch
         * stream, but the client should use the snapshotVersion for its own
         * purposes.
         *
         * This is the same value as TargetChange.resume_token in the protos.
         */
    r,
    /**
         * A sequence number representing the last time this query was
         * listened to, used for garbage collection purposes.
         *
         * Conventionally this would be a timestamp value, but device-local
         * clocks are unreliable and they must be able to create new listens
         * even while disconnected. Instead this should be a monotonically
         * increasing number that's incremented on each listen call.
         *
         * This is different from the queryId since the queryId is an
         * immutable identifier assigned to the Query on first use while
         * lastListenSequenceNumber is updated every time the query is
         * listened to.
         */
    i,
    /**
         * Denotes the maximum snapshot version at which the associated query view
         * contained no limbo documents.  Undefined for data written prior to
         * schema version 9.
         */
    o,
    /**
         * The query for this target.
         *
         * Because canonical ids are not unique we must store the actual query. We
         * use the proto to have an object we can persist without having to
         * duplicate translation logic to and from a `Query` object.
         */
    s) {
      this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s;
    };

    Rr.store = "targets",
    /** Keys are automatically assigned via the targetId property. */
    Rr.keyPath = "targetId",
    /** The name of the queryTargets index. */
    Rr.queryTargetsIndexName = "queryTargetsIndex",
    /**
         * The index of all canonicalIds to the targets that they match. This is not
         * a unique mapping because canonicalId does not promise a unique name for all
         * possible queries, so we append the targetId to make the mapping unique.
         */
    Rr.queryTargetsKeyPath = ["canonicalId", "targetId"];
    /**
     * An object representing an association between a target and a document, or a
     * sentinel row marking the last sequence number at which a document was used.
     * Each document cached must have a corresponding sentinel row before lru
     * garbage collection is enabled.
     *
     * The target associations and sentinel rows are co-located so that orphaned
     * documents and their sequence numbers can be identified efficiently via a scan
     * of this store.
     */

    var Lr = function Lr(
    /**
         * The targetId identifying a target or 0 for a sentinel row.
         */
    t,
    /**
         * The path to the document, as encoded in the key.
         */
    e,
    /**
         * If this is a sentinel row, this should be the sequence number of the last
         * time the document specified by `path` was used. Otherwise, it should be
         * `undefined`.
         */
    n) {
      this.targetId = t, this.path = e, this.sequenceNumber = n;
    };
    /** Name of the IndexedDb object store.  */


    Lr.store = "targetDocuments",
    /** Keys are automatically assigned via the targetId, path properties. */
    Lr.keyPath = ["targetId", "path"],
    /** The index name for the reverse index. */
    Lr.documentTargetsIndex = "documentTargetsIndex",
    /** We also need to create the reverse index for these properties. */
    Lr.documentTargetsKeyPath = ["path", "targetId"];
    /**
     * A record of global state tracked across all Targets, tracked separately
     * to avoid the need for extra indexes.
     *
     * This should be kept in-sync with the proto used in the iOS client.
     */

    var Or = function Or(
    /**
         * The highest numbered target id across all targets.
         *
         * See DbTarget.targetId.
         */
    t,
    /**
         * The highest numbered lastListenSequenceNumber across all targets.
         *
         * See DbTarget.lastListenSequenceNumber.
         */
    e,
    /**
         * A global snapshot version representing the last consistent snapshot we
         * received from the backend. This is monotonically increasing and any
         * snapshots received from the backend prior to this version (e.g. for
         * targets resumed with a resumeToken) should be suppressed (buffered)
         * until the backend has caught up to this snapshot version again. This
         * prevents our cache from ever going backwards in time.
         */
    n,
    /**
         * The number of targets persisted.
         */
    r) {
      this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r;
    };
    /**
     * The key string used for the single object that exists in the
     * DbTargetGlobal store.
     */


    Or.key = "targetGlobalKey", Or.store = "targetGlobal";
    /**
     * An object representing an association between a Collection id (e.g. 'messages')
     * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
     * This is used to efficiently find all collections to query when performing
     * a Collection Group query.
     */

    var Vr = function Vr(
    /**
         * The collectionId (e.g. 'messages')
         */
    t,
    /**
         * The path to the parent (either a document location or an empty path for
         * a root-level collection).
         */
    e) {
      this.collectionId = t, this.parent = e;
    };
    /** Name of the IndexedDb object store. */


    function Ur(t) {
      t.createObjectStore(Lr.store, {
        keyPath: Lr.keyPath
      }).createIndex(Lr.documentTargetsIndex, Lr.documentTargetsKeyPath, {
        unique: !0
      }), // NOTE: This is unique only because the TargetId is the suffix.
      t.createObjectStore(Rr.store, {
        keyPath: Rr.keyPath
      }).createIndex(Rr.queryTargetsIndexName, Rr.queryTargetsKeyPath, {
        unique: !0
      }), t.createObjectStore(Or.store);
    }

    Vr.store = "collectionParents",
    /** Keys are automatically assigned via the collectionId, parent properties. */
    Vr.keyPath = ["collectionId", "parent"];

    var Cr = function Cr( // Note: Previous schema versions included a field
    // "lastProcessedDocumentChangeId". Don't use anymore.

    /** The auto-generated client id assigned at client startup. */
    t,
    /** The last time this state was updated. */
    e,
    /** Whether the client's network connection is enabled. */
    n,
    /** Whether this client is running in a foreground tab. */
    r) {
      this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r;
    };
    /** Name of the IndexedDb object store. */


    Cr.store = "clientMetadata",
    /** Keys are automatically assigned via the clientId properties. */
    Cr.keyPath = "clientId";

    var Fr = e.__spreadArrays(e.__spreadArrays(e.__spreadArrays([Tr.store, Ar.store, xr.store, Pr.store, Rr.store, Nr.store, Or.store, Lr.store], [Cr.store]), [kr.store]), [Vr.store]),
        jr =
    /** @class */
    function () {
      function t(e) {
        this.db = e, // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
        // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
        // whatever reason it's much harder to hit after 12.2 so we only proactively
        // log on 12.2.
        12.2 === t.uo(i.getUA()) && f("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
        /**
        * Opens the specified database, creating or upgrading it if necessary.
        *
        * Note that `version` must not be a downgrade. IndexedDB does not support downgrading the schema
        * version. We currently do not support any way to do versioning outside of IndexedDB's versioning
        * mechanism, as only version-upgrade transactions are allowed to do things like create
        * objectstores.
        */
        ;
      }

      return t.tr = function (e, n, r) {
        return h("SimpleDb", "Opening database:", e), new Tn(function (i, o) {
          // TODO(mikelehen): Investigate browser compatibility.
          // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
          // suggests IE9 and older WebKit browsers handle upgrade
          // differently. They expect setVersion, as described here:
          // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
          var s = indexedDB.open(e, n);
          s.onsuccess = function (e) {
            var n = e.target.result;
            i(new t(n));
          }, s.onblocked = function () {
            o(new D(x.FAILED_PRECONDITION, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
          }, s.onerror = function (t) {
            var e = t.target.error;
            "VersionError" === e.name ? o(new D(x.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : o(e);
          }, s.onupgradeneeded = function (t) {
            h("SimpleDb", 'Database "' + e + '" requires upgrade from version:', t.oldVersion);
            var n = t.target.result;
            r.createOrUpgrade(n, s.transaction, t.oldVersion, _r).next(function () {
              h("SimpleDb", "Database upgrade to version " + _r + " complete");
            });
          };
        }).On();
      },
      /** Deletes the specified database. */
      t["delete"] = function (t) {
        return h("SimpleDb", "Removing database:", t), Wr(window.indexedDB.deleteDatabase(t)).On();
      },
      /** Returns true if IndexedDB is available in the current environment. */
      t.Hi = function () {
        if ("undefined" == typeof indexedDB) return !1;
        if (t.co()) return !0; // We extensively use indexed array values and compound keys,
        // which IE and Edge do not support. However, they still have indexedDB
        // defined on the window, so we need to check for them here and make sure
        // to return that persistence is not enabled for those browsers.
        // For tracking support of this feature, see here:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
        // Check the UA string to find out the browser.

        var e = i.getUA(),
            n = t.uo(e),
            r = 0 < n && n < 10,
            o = t.lo(e),
            s = 0 < o && o < 4.5; // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
        // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // iOS Safari: Disable for users running iOS version < 10.

        return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || r || s);
      },
      /**
       * Returns true if the backing IndexedDB store is the Node IndexedDBShim
       * (see https://github.com/axemclion/IndexedDBShim).
       */
      t.co = function () {
        var t;
        return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t._o);
      },
      /** Helper to get a typed SimpleDbStore from a transaction. */
      t.js = function (t, e) {
        return t.store(e);
      }, // visible for testing

      /** Parse User Agent to determine iOS version. Returns -1 if not found. */
      t.uo = function (t) {
        var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
            n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(n);
      }, // visible for testing

      /** Parse User Agent to determine Android version. Returns -1 if not found. */
      t.lo = function (t) {
        var e = t.match(/Android ([\d.]+)/i),
            n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(n);
      }, t.prototype.ur = function (t) {
        this.db.onversionchange = function (e) {
          return t(e);
        };
      }, t.prototype.runTransaction = function (t, n, r) {
        return e.__awaiter(this, void 0, void 0, function () {
          var i, o, s, u, a;
          return e.__generator(this, function (c) {
            switch (c.label) {
              case 0:
                i = "readonly" === t, o = 0, s = function s() {
                  var t, s, a, c, f;
                  return e.__generator(this, function (e) {
                    switch (e.label) {
                      case 0:
                        ++o, t = Gr.open(u.db, i ? "readonly" : "readwrite", n), e.label = 1;

                      case 1:
                        // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                        // fire), but still return the original transactionFnResult back to the
                        // caller.
                        return e.trys.push([1, 3,, 4]), s = r(t)["catch"](function (e) {
                          // Abort the transaction if there was an error.
                          return t.abort(e), Tn.reject(e);
                        }).On(), a = {}, s["catch"](function () {}), [4
                        /*yield*/
                        , t.fo];

                      case 2:
                        return [2
                        /*return*/
                        , (a.value = ( // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                        // fire), but still return the original transactionFnResult back to the
                        // caller.
                        e.sent(), s), a)];

                      case 3:
                        return c = e.sent(), f = "FirebaseError" !== c.name && o < 3, h("SimpleDb", "Transaction failed with error: %s. Retrying: %s.", c.message, f), f ? [3
                        /*break*/
                        , 4] : [2
                        /*return*/
                        , {
                          value: Promise.reject(c)
                        }];

                      case 4:
                        return [2
                        /*return*/
                        ];
                    }
                  });
                }, u = this, c.label = 1;

              case 1:
                return [5
                /*yield**/
                , s()];

              case 2:
                if ("object" == typeof (a = c.sent())) return [2
                /*return*/
                , a.value];
                c.label = 3;

              case 3:
                return [3
                /*break*/
                , 1];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.close = function () {
        this.db.close();
      }, t;
    }(),
        Mr =
    /** @class */
    function () {
      function t(t) {
        this["do"] = t, this.wo = !1, this.To = null;
      }

      return Object.defineProperty(t.prototype, "$n", {
        get: function get() {
          return this.wo;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "Eo", {
        get: function get() {
          return this.To;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "cursor", {
        set: function set(t) {
          this["do"] = t;
        },
        enumerable: !1,
        configurable: !0
      }),
      /**
       * This function can be called to stop iteration at any point.
       */
      t.prototype.done = function () {
        this.wo = !0;
      },
      /**
       * This function can be called to skip to that next key, which could be
       * an index or a primary key.
       */
      t.prototype.ni = function (t) {
        this.To = t;
      },
      /**
       * Delete the current cursor value from the object store.
       *
       * NOTE: You CANNOT do this with a keysOnly query.
       */
      t.prototype["delete"] = function () {
        return Wr(this["do"]["delete"]());
      }, t;
    }(),
        qr =
    /** @class */
    function (t) {
      function n(e) {
        var n = this;
        return (n = t.call(this, x.UNAVAILABLE, "IndexedDB transaction failed: " + e) || this).name = "IndexedDbTransactionError", n;
      }

      return e.__extends(n, t), n;
    }(D); // V2 is no longer usable (see comment at top of file)
    // Visible for testing

    /**
     * Provides a wrapper around IndexedDb with a simplified interface that uses
     * Promise-like return values to chain operations. Real promises cannot be used
     * since .then() continuations are executed asynchronously (e.g. via
     * .setImmediate), which would cause IndexedDB to end the transaction.
     * See PersistencePromise for more details.
     */

    /** Verifies whether `e` is an IndexedDbTransactionError. */


    function Br(t) {
      // Use name equality, as instanceof checks on errors don't work with errors
      // that wrap other errors.
      return "IndexedDbTransactionError" === t.name;
    }
    /**
     * Wraps an IDBTransaction and exposes a store() method to get a handle to a
     * specific object store.
     */


    var Gr =
    /** @class */
    function () {
      function t(t) {
        var e = this;
        this.transaction = t, this.aborted = !1,
        /**
             * A promise that resolves with the result of the IndexedDb transaction.
             */
        this.Io = new Rn(), this.transaction.oncomplete = function () {
          e.Io.resolve();
        }, this.transaction.onabort = function () {
          t.error ? e.Io.reject(new qr(t.error)) : e.Io.resolve();
        }, this.transaction.onerror = function (t) {
          var n = Yr(t.target.error);
          e.Io.reject(new qr(n));
        };
      }

      return t.open = function (e, n, r) {
        return new t(e.transaction(r, n));
      }, Object.defineProperty(t.prototype, "fo", {
        get: function get() {
          return this.Io.promise;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.abort = function (t) {
        t && this.Io.reject(t), this.aborted || (h("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort());
      },
      /**
       * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
       * operations performed on the SimpleDbStore happen within the context of this
       * transaction and it cannot be used anymore once the transaction is
       * completed.
       *
       * Note that we can't actually enforce that the KeyType and ValueType are
       * correct, but they allow type safety through the rest of the consuming code.
       */
      t.prototype.store = function (t) {
        var e = this.transaction.objectStore(t);
        return new zr(e);
      }, t;
    }(),
        zr =
    /** @class */
    function () {
      function t(t) {
        this.store = t;
      }

      return t.prototype.put = function (t, e) {
        var n;
        return void 0 !== e ? (h("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (h("SimpleDb", "PUT", this.store.name, "<auto-key>", t), n = this.store.put(t)), Wr(n);
      },
      /**
       * Adds a new value into an Object Store and returns the new key. Similar to
       * IndexedDb's `add()`, this method will fail on primary key collisions.
       *
       * @param value The object to write.
       * @return The key of the value to add.
       */
      t.prototype.add = function (t) {
        return h("SimpleDb", "ADD", this.store.name, t, t), Wr(this.store.add(t));
      },
      /**
       * Gets the object with the specified key from the specified store, or null
       * if no object exists with the specified key.
       *
       * @key The key of the object to get.
       * @return The object with the specified key or null if no object exists.
       */
      t.prototype.get = function (t) {
        var e = this; // We're doing an unsafe cast to ValueType.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        return Wr(this.store.get(t)).next(function (n) {
          // Normalize nonexistence to null.
          return void 0 === n && (n = null), h("SimpleDb", "GET", e.store.name, t, n), n;
        });
      }, t.prototype["delete"] = function (t) {
        return h("SimpleDb", "DELETE", this.store.name, t), Wr(this.store["delete"](t));
      },
      /**
       * If we ever need more of the count variants, we can add overloads. For now,
       * all we need is to count everything in a store.
       *
       * Returns the number of rows in the store.
       */
      t.prototype.count = function () {
        return h("SimpleDb", "COUNT", this.store.name), Wr(this.store.count());
      }, t.prototype.Ws = function (t, e) {
        var n = this.cursor(this.options(t, e)),
            r = [];
        return this.mo(n, function (t, e) {
          r.push(e);
        }).next(function () {
          return r;
        });
      }, t.prototype.Ao = function (t, e) {
        h("SimpleDb", "DELETE ALL", this.store.name);
        var n = this.options(t, e);
        n.xi = !1;
        var r = this.cursor(n);
        return this.mo(r, function (t, e, n) {
          return n["delete"]();
        });
      }, t.prototype.ei = function (t, e) {
        var n;
        e ? n = t : (n = {}, e = t);
        var r = this.cursor(n);
        return this.mo(r, e);
      },
      /**
       * Iterates over a store, but waits for the given callback to complete for
       * each entry before iterating the next entry. This allows the callback to do
       * asynchronous work to determine if this iteration should continue.
       *
       * The provided callback should return `true` to continue iteration, and
       * `false` otherwise.
       */
      t.prototype.jr = function (t) {
        var e = this.cursor({});
        return new Tn(function (n, r) {
          e.onerror = function (t) {
            var e = Yr(t.target.error);
            r(e);
          }, e.onsuccess = function (e) {
            var r = e.target.result;
            r ? t(r.primaryKey, r.value).next(function (t) {
              t ? r["continue"]() : n();
            }) : n();
          };
        });
      }, t.prototype.mo = function (t, e) {
        var n = [];
        return new Tn(function (r, i) {
          t.onerror = function (t) {
            i(t.target.error);
          }, t.onsuccess = function (t) {
            var i = t.target.result;

            if (i) {
              var o = new Mr(i),
                  s = e(i.primaryKey, i.value, o);

              if (s instanceof Tn) {
                var u = s["catch"](function (t) {
                  return o.done(), Tn.reject(t);
                });
                n.push(u);
              }

              o.$n ? r() : null === o.Eo ? i["continue"]() : i["continue"](o.Eo);
            } else r();
          };
        }).next(function () {
          return Tn.Bn(n);
        });
      }, t.prototype.options = function (t, e) {
        var n = void 0;
        return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
          index: n,
          range: e
        };
      }, t.prototype.cursor = function (t) {
        var e = "next";

        if (t.reverse && (e = "prev"), t.index) {
          var n = this.store.index(t.index);
          return t.xi ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
        }

        return this.store.openCursor(t.range, e);
      }, t;
    }();
    /**
     * A wrapper around an IDBObjectStore providing an API that:
     *
     * 1) Has generic KeyType / ValueType parameters to provide strongly-typed
     * methods for acting against the object store.
     * 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
     * method return a PersistencePromise instead.
     * 3) Provides a higher-level API to avoid needing to do excessive wrapping of
     * intermediate IndexedDB types (IDBCursorWithValue, etc.)
     */

    /**
     * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
     * handlers to resolve / reject the PersistencePromise as appropriate.
     */


    function Wr(t) {
      return new Tn(function (e, n) {
        t.onsuccess = function (t) {
          var n = t.target.result;
          e(n);
        }, t.onerror = function (t) {
          var e = Yr(t.target.error);
          n(e);
        };
      });
    } // Guard so we only report the error once.


    var Qr = !1;

    function Yr(t) {
      var e = jr.uo(i.getUA());

      if (e >= 12.2 && e < 13) {
        var n = "An internal error was encountered in the Indexed Database server";

        if (t.message.indexOf(n) >= 0) {
          // Wrap error in a more descriptive one.
          var r = new D("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
          return Qr || (Qr = !0, // Throw a global exception outside of this promise chain, for the user to
          // potentially catch.
          setTimeout(function () {
            throw r;
          }, 0)), r;
        }
      }

      return t;
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** The Platform's 'window' implementation or null if not available. */


    function Kr() {
      // `window` is not always available, e.g. in ReactNative and WebWorkers.
      // eslint-disable-next-line no-restricted-globals
      return "undefined" != typeof window ? window : null;
    }
    /** The Platform's 'document' implementation or null if not available. */

    /**
     * Represents an operation scheduled to be run in the future on an AsyncQueue.
     *
     * It is created via DelayedOperation.createAndSchedule().
     *
     * Supports cancellation (via cancel()) and early execution (via skipDelay()).
     *
     * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
     * in newer versions of TypeScript defines `finally`, which is not available in
     * IE.
     */


    var Xr =
    /** @class */
    function () {
      function t(t, e, n, r, i) {
        this.Ro = t, this.vs = e, this.Po = n, this.op = r, this.Vo = i, this.yo = new Rn(), this.then = this.yo.promise.then.bind(this.yo.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.yo.promise["catch"](function (t) {})
        /**
        * Creates and returns a DelayedOperation that has been scheduled to be
        * executed on the provided asyncQueue after the provided delayMs.
        *
        * @param asyncQueue The queue to schedule the operation on.
        * @param id A Timer ID identifying the type of operation this is.
        * @param delayMs The delay (ms) before the operation should be scheduled.
        * @param op The operation to run.
        * @param removalCallback A callback to be called synchronously once the
        *   operation is executed or canceled, notifying the AsyncQueue to remove it
        *   from its delayedOperations list.
        *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
        *   the DelayedOperation class public.
        */
        ;
      }

      return t.po = function (e, n, r, i, o) {
        var s = new t(e, n, Date.now() + r, i, o);
        return s.start(r), s;
      },
      /**
       * Starts the timer. This is called immediately after construction by
       * createAndSchedule().
       */
      t.prototype.start = function (t) {
        var e = this;
        this.bo = setTimeout(function () {
          return e.vo();
        }, t);
      },
      /**
       * Queues the operation to run immediately (if it hasn't already been run or
       * canceled).
       */
      t.prototype.Bs = function () {
        return this.vo();
      },
      /**
       * Cancels the operation if it hasn't already been executed or canceled. The
       * promise will be rejected.
       *
       * As long as the operation has not yet been run, calling cancel() provides a
       * guarantee that the operation will not be run.
       */
      t.prototype.cancel = function (t) {
        null !== this.bo && (this.clearTimeout(), this.yo.reject(new D(x.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
      }, t.prototype.vo = function () {
        var t = this;
        this.Ro.lr(function () {
          return null !== t.bo ? (t.clearTimeout(), t.op().then(function (e) {
            return t.yo.resolve(e);
          })) : Promise.resolve();
        });
      }, t.prototype.clearTimeout = function () {
        null !== this.bo && (this.Vo(this), clearTimeout(this.bo), this.bo = null);
      }, t;
    }(),
        Hr =
    /** @class */
    function () {
      function t() {
        var t = this; // The last promise in the queue.

        this.So = Promise.resolve(), // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.Do = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.Co = !1, // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.Fo = [], // visible for testing
        this.No = null, // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.$o = !1, // List of TimerIds to fast-forward delays for.
        this.ko = [], // Backoff timer used to schedule retries for retryable operations
        this.xo = new Ln(this, "async_queue_retry"
        /* AsyncQueueRetry */
        ), // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.Mo = function () {
          return t.xo.Ls();
        };
        var e = Kr();
        e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.Mo);
      }

      return Object.defineProperty(t.prototype, "Oo", {
        // Is this AsyncQueue being shut down? If true, this instance will not enqueue
        // any new operations, Promises from enqueue requests will not resolve.
        get: function get() {
          return this.Co;
        },
        enumerable: !1,
        configurable: !0
      }),
      /**
       * Adds a new operation to the queue without waiting for it to complete (i.e.
       * we ignore the Promise result).
       */
      t.prototype.lr = function (t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
      },
      /**
       * Regardless if the queue has initialized shutdown, adds a new operation to the
       * queue without waiting for it to complete (i.e. we ignore the Promise result).
       */
      t.prototype.Lo = function (t) {
        this.Bo(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.qo(t);
      },
      /**
       * Regardless if the queue has initialized shutdown, adds a new operation to the
       * queue.
       */
      t.prototype.Uo = function (t) {
        return this.Bo(), this.qo(t);
      },
      /**
       * Adds a new operation to the queue and initialize the shut down of this queue.
       * Returns a promise that will be resolved when the promise returned by the new
       * operation is (with its value).
       * Once this method is called, the only possible way to request running an operation
       * is through `enqueueAndForgetEvenAfterShutdown`.
       */
      t.prototype.Qo = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.Bo(), this.Co ? [3
                /*break*/
                , 2] : (this.Co = !0, (n = Kr()) && n.removeEventListener("visibilitychange", this.Mo), [4
                /*yield*/
                , this.Uo(t)]);

              case 1:
                e.sent(), e.label = 2;

              case 2:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Adds a new operation to the queue. Returns a promise that will be resolved
       * when the promise returned by the new operation is (with its value).
       */
      t.prototype.enqueue = function (t) {
        return this.Bo(), this.Co ? new Promise(function (t) {}) : this.qo(t);
      },
      /**
       * Enqueue a retryable operation.
       *
       * A retryable operation is rescheduled with backoff if it fails with a
       * IndexedDbTransactionError (the error type used by SimpleDb). All
       * retryable operations are executed in order and only run if all prior
       * operations were retried successfully.
       */
      t.prototype.dr = function (t) {
        var e = this;
        this.Do.push(t), this.lr(function () {
          return e.Wo();
        });
      },
      /**
       * Runs the next operation from the retryable queue. If the operation fails,
       * reschedules with backoff.
       */
      t.prototype.Wo = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t,
              n = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                if (0 === this.Do.length) return [3
                /*break*/
                , 5];
                e.label = 1;

              case 1:
                return e.trys.push([1, 3,, 4]), [4
                /*yield*/
                , this.Do[0]()];

              case 2:
                return e.sent(), this.Do.shift(), this.xo.reset(), [3
                /*break*/
                , 4];

              case 3:
                if (!Br(t = e.sent())) throw t; // Failure will be handled by AsyncQueue

                return h("AsyncQueue", "Operation failed with retryable error: " + t), [3
                /*break*/
                , 4];

              case 4:
                this.Do.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
                // This is necessary to run retryable operations that failed during
                // their initial attempt since we don't know whether they are already
                // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
                // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
                // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
                // call scheduled here.
                // Since `backoffAndRun()` cancels an existing backoff and schedules a
                // new backoff on every call, there is only ever a single additional
                // operation in the queue.
                this.xo.xs(function () {
                  return n.Wo();
                }), e.label = 5;

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.qo = function (t) {
        var e = this,
            n = this.So.then(function () {
          return e.$o = !0, t()["catch"](function (t) {
            // Re-throw the error so that this.tail becomes a rejected Promise and
            // all further attempts to chain (via .then) will just short-circuit
            // and return the rejected Promise.
            throw e.No = t, e.$o = !1, f("INTERNAL UNHANDLED ERROR: ",
            /**
            * Chrome includes Error.message in Error.stack. Other browsers do not.
            * This returns expected output of message + stack when available.
            * @param error Error or FirestoreError
            */
            function (t) {
              var e = t.message || "";
              return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), e;
            }(t)), t;
          }).then(function (t) {
            return e.$o = !1, t;
          });
        });
        return this.So = n, n;
      },
      /**
       * Schedules an operation to be queued on the AsyncQueue once the specified
       * `delayMs` has elapsed. The returned DelayedOperation can be used to cancel
       * or fast-forward the operation prior to its running.
       */
      t.prototype.Os = function (t, e, n) {
        var r = this;
        this.Bo(), // Fast-forward delays for timerIds that have been overriden.
        this.ko.indexOf(t) > -1 && (e = 0);
        var i = Xr.po(this, t, e, n, function (t) {
          return r.jo(t);
        });
        return this.Fo.push(i), i;
      }, t.prototype.Bo = function () {
        this.No && p();
      },
      /**
       * Verifies there's an operation currently in-progress on the AsyncQueue.
       * Unfortunately we can't verify that the running code is in the promise chain
       * of that operation, so this isn't a foolproof check, but it should be enough
       * to catch some bugs.
       */
      t.prototype.Ko = function () {},
      /**
       * Waits until all currently queued tasks are finished executing. Delayed
       * operations are not run.
       */
      t.prototype.Go = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return [4
                /*yield*/
                , t = this.So];

              case 1:
                e.sent(), e.label = 2;

              case 2:
                if (t !== this.So) return [3
                /*break*/
                , 0];
                e.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * For Tests: Determine if a delayed operation with a particular TimerId
       * exists.
       */
      t.prototype.zo = function (t) {
        for (var e = 0, n = this.Fo; e < n.length; e++) {
          if (n[e].vs === t) return !0;
        }

        return !1;
      },
      /**
       * For Tests: Runs some or all delayed operations early.
       *
       * @param lastTimerId Delayed operations up to and including this TimerId will
       *  be drained. Pass TimerId.All to run all delayed operations.
       * @returns a Promise that resolves once all operations have been run.
       */
      t.prototype.Ho = function (t) {
        var e = this; // Note that draining may generate more delayed ops, so we do that first.

        return this.Go().then(function () {
          // Run ops in the same order they'd run if they ran naturally.
          e.Fo.sort(function (t, e) {
            return t.Po - e.Po;
          });

          for (var n = 0, r = e.Fo; n < r.length; n++) {
            var i = r[n];
            if (i.Bs(), "all"
            /* All */
            !== t && i.vs === t) break;
          }

          return e.Go();
        });
      },
      /**
       * For Tests: Skip all subsequent delays for a timer id.
       */
      t.prototype.Yo = function (t) {
        this.ko.push(t);
      },
      /** Called once a DelayedOperation is run or canceled. */
      t.prototype.jo = function (t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var e = this.Fo.indexOf(t);
        this.Fo.splice(e, 1);
      }, t;
    }();
    /**
     * Returns a FirestoreError that can be surfaced to the user if the provided
     * error is an IndexedDbTransactionError. Re-throws the error otherwise.
     */


    function $r(t, e) {
      if (f("AsyncQueue", e + ": " + t), Br(t)) return new D(x.UNAVAILABLE, e + ": " + t);
      throw t;
    }

    function Jr(t, e) {
      var n = t[0],
          r = t[1],
          i = e[0],
          o = e[1],
          s = m(n, i);
      return 0 === s ? m(r, o) : s;
    }
    /**
     * Used to calculate the nth sequence number. Keeps a rolling buffer of the
     * lowest n values passed to `addElement`, and finally reports the largest of
     * them in `maxValue`.
     */


    var Zr =
    /** @class */
    function () {
      function t(t) {
        this.Jo = t, this.buffer = new tt(Jr), this.Xo = 0;
      }

      return t.prototype.Zo = function () {
        return ++this.Xo;
      }, t.prototype.th = function (t) {
        var e = [t, this.Zo()];
        if (this.buffer.size < this.Jo) this.buffer = this.buffer.add(e);else {
          var n = this.buffer.last();
          Jr(e, n) < 0 && (this.buffer = this.buffer["delete"](n).add(e));
        }
      }, Object.defineProperty(t.prototype, "maxValue", {
        get: function get() {
          // Guaranteed to be non-empty. If we decide we are not collecting any
          // sequence numbers, nthSequenceNumber below short-circuits. If we have
          // decided that we are collecting n sequence numbers, it's because n is some
          // percentage of the existing sequence numbers. That means we should never
          // be in a situation where we are collecting sequence numbers but don't
          // actually have any.
          return this.buffer.last()[0];
        },
        enumerable: !1,
        configurable: !0
      }), t;
    }(),
        ti = {
      eh: !1,
      nh: 0,
      sh: 0,
      ih: 0
    },
        ei =
    /** @class */
    function () {
      function t( // When we attempt to collect, we will only do so if the cache size is greater than this
      // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
      t, // The percentage of sequence numbers that we will attempt to collect
      e, // A cap on the total number of sequence numbers that will be collected. This prevents
      // us from collecting a huge number of sequence numbers if the cache has grown very large.
      n) {
        this.rh = t, this.oh = e, this.hh = n;
      }

      return t.ah = function (e) {
        return new t(e, t.uh, t.lh);
      }, t;
    }();

    ei._h = -1, ei.fh = 1048576, ei.dh = 41943040, ei.uh = 10, ei.lh = 1e3, ei.wh = new ei(ei.dh, ei.uh, ei.lh), ei.Th = new ei(ei._h, 0, 0);
    /**
     * This class is responsible for the scheduling of LRU garbage collection. It handles checking
     * whether or not GC is enabled, as well as which delay to use before the next run.
     */

    var ni =
    /** @class */
    function () {
      function t(t, e) {
        this.Or = t, this.Ro = e, this.Eh = !1, this.Ih = null;
      }

      return t.prototype.start = function (t) {
        this.Or.params.rh !== ei._h && this.mh(t);
      }, t.prototype.stop = function () {
        this.Ih && (this.Ih.cancel(), this.Ih = null);
      }, Object.defineProperty(t.prototype, "hr", {
        get: function get() {
          return null !== this.Ih;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.mh = function (t) {
        var n = this,
            r = this.Eh ? 3e5 : 6e4;
        h("LruGarbageCollector", "Garbage collection scheduled in " + r + "ms"), this.Ih = this.Ro.Os("lru_garbage_collection"
        /* LruGarbageCollection */
        , r, function () {
          return e.__awaiter(n, void 0, void 0, function () {
            var n;
            return e.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  this.Ih = null, this.Eh = !0, e.label = 1;

                case 1:
                  return e.trys.push([1, 3,, 7]), [4
                  /*yield*/
                  , t.Ah(this.Or)];

                case 2:
                  return e.sent(), [3
                  /*break*/
                  , 7];

                case 3:
                  return Br(n = e.sent()) ? (h("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", n), [3
                  /*break*/
                  , 6]) : [3
                  /*break*/
                  , 4];

                case 4:
                  return [4
                  /*yield*/
                  , si(n)];

                case 5:
                  e.sent(), e.label = 6;

                case 6:
                  return [3
                  /*break*/
                  , 7];

                case 7:
                  return [4
                  /*yield*/
                  , this.mh(t)];

                case 8:
                  return e.sent(), [2
                  /*return*/
                  ];
              }
            });
          });
        });
      }, t;
    }(),
        ri =
    /** @class */
    function () {
      function t(t, e) {
        this.Rh = t, this.params = e
        /** Given a percentile of target to collect, returns the number of targets to collect. */
        ;
      }

      return t.prototype.Ph = function (t, e) {
        return this.Rh.Lr(t).next(function (t) {
          return Math.floor(e / 100 * t);
        });
      },
      /** Returns the nth sequence number, counting in order from the smallest. */
      t.prototype.Vh = function (t, e) {
        var n = this;
        if (0 === e) return Tn.resolve(kn.ps);
        var r = new Zr(e);
        return this.Rh.pe(t, function (t) {
          return r.th(t.sequenceNumber);
        }).next(function () {
          return n.Rh.qr(t, function (t) {
            return r.th(t);
          });
        }).next(function () {
          return r.maxValue;
        });
      },
      /**
       * Removes targets with a sequence number equal to or less than the given upper bound, and removes
       * document associations with those targets.
       */
      t.prototype.vi = function (t, e, n) {
        return this.Rh.vi(t, e, n);
      },
      /**
       * Removes documents that have a sequence number equal to or less than the upper bound and are not
       * otherwise pinned.
       */
      t.prototype.Kr = function (t, e) {
        return this.Rh.Kr(t, e);
      }, t.prototype.gh = function (t, e) {
        var n = this;
        return this.params.rh === ei._h ? (h("LruGarbageCollector", "Garbage collection skipped; disabled"), Tn.resolve(ti)) : this.zr(t).next(function (r) {
          return r < n.params.rh ? (h("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.rh), ti) : n.yh(t, e);
        });
      }, t.prototype.zr = function (t) {
        return this.Rh.zr(t);
      }, t.prototype.yh = function (t, e) {
        var n,
            i,
            o,
            s,
            u,
            a,
            f,
            l = this,
            p = Date.now();
        return this.Ph(t, this.params.oh).next(function (e) {
          // Cap at the configured max
          return e > l.params.hh ? (h("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + l.params.hh + " from " + e), i = l.params.hh) : i = e, s = Date.now(), l.Vh(t, i);
        }).next(function (r) {
          return n = r, u = Date.now(), l.vi(t, n, e);
        }).next(function (e) {
          return o = e, a = Date.now(), l.Kr(t, n);
        }).next(function (t) {
          return f = Date.now(), c() <= r.LogLevel.DEBUG && h("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (s - p) + "ms\n\tDetermined least recently used " + i + " in " + (u - s) + "ms\n\tRemoved " + o + " targets in " + (a - u) + "ms\n\tRemoved " + t + " documents in " + (f - a) + "ms\nTotal Duration: " + (f - p) + "ms"), Tn.resolve({
            eh: !0,
            nh: i,
            sh: o,
            ih: t
          });
        });
      }, t;
    }(),
        ii =
    /** @class */
    function () {
      function t(
      /** Manages our in-memory or durable persistence. */
      t, e, n) {
        this.persistence = t, this.ph = e,
        /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
        this.bh = new $(m),
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.vh = new A(function (t) {
          return q(t);
        }, B),
        /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
        this.Sh = P.min(), this.ns = t.Cr(n), this.Dh = t.$r(), this.Xi = t.Nr(), this.Ch = new Sn(this.Dh, this.ns, this.persistence.kr()), this.ph.Fh(this.Ch);
      }

      return t.prototype.start = function () {
        return Promise.resolve();
      }, t.prototype.Nh = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r,
              i,
              o = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return n = this.ns, r = this.Ch, [4
                /*yield*/
                , this.persistence.runTransaction("Handle user change", "readonly", function (e) {
                  // Swap out the mutation queue, grabbing the pending mutation batches
                  // before and after.
                  var i;
                  return o.ns.so(e).next(function (s) {
                    return i = s, n = o.persistence.Cr(t), // Recreate our LocalDocumentsView using the new
                    // MutationQueue.
                    r = new Sn(o.Dh, n, o.persistence.kr()), n.so(e);
                  }).next(function (t) {
                    for (var n = [], o = [], s = ct(), u = 0, a = i // Union the old/new changed keys.
                    ; u < a.length; u++) {
                      var c = a[u];
                      n.push(c.batchId);

                      for (var h = 0, f = c.mutations; h < f.length; h++) {
                        var l = f[h];
                        s = s.add(l.key);
                      }
                    }

                    for (var p = 0, d = t; p < d.length; p++) {
                      var y = d[p];
                      o.push(y.batchId);

                      for (var v = 0, g = y.mutations; v < g.length; v++) {
                        var m = g[v];
                        s = s.add(m.key);
                      }
                    } // Return the set of all (potentially) changed documents and the list
                    // of mutation batch IDs that were affected by change.


                    return r.us(e, s).next(function (t) {
                      return {
                        $h: t,
                        kh: n,
                        xh: o
                      };
                    });
                  });
                })];

              case 1:
                return i = e.sent(), [2
                /*return*/
                , (this.ns = n, this.Ch = r, this.ph.Fh(this.Ch), i)];
            }
          });
        });
      }, t.prototype.Mh = function (t) {
        var e,
            n = this,
            r = S.now(),
            i = t.reduce(function (t, e) {
          return t.add(e.key);
        }, ct());
        return this.persistence.runTransaction("Locally write mutations", "readwrite", function (o) {
          return n.Ch.us(o, i).next(function (i) {
            e = i;

            for ( // For non-idempotent mutations (such as `FieldValue.increment()`),
            // we record the base state in a separate patch mutation. This is
            // later used to guarantee consistent values and prevents flicker
            // even if the backend sends us an update that already includes our
            // transform.
            var s = [], u = 0, a = t; u < a.length; u++) {
              var c = a[u],
                  h = je(c, e.get(c.key));
              null != h && // NOTE: The base state should only be applied if there's some
              // existing document to override, so use a Precondition of
              // exists=true
              s.push(new Ge(c.key, h, Je(h.proto.mapValue), Oe.exists(!0)));
            }

            return n.ns.Xr(o, r, s, t);
          });
        }).then(function (t) {
          var n = t.Sn(e);
          return {
            batchId: t.batchId,
            Un: n
          };
        });
      }, t.prototype.Oh = function (t) {
        var e = this;
        return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function (n) {
          var r = t.batch.keys(),
              i = e.Dh.oi({
            ai: !0
          });
          return e.Lh(n, t, i).next(function () {
            return i.apply(n);
          }).next(function () {
            return e.ns.ho(n);
          }).next(function () {
            return e.Ch.us(n, r);
          });
        });
      }, t.prototype.Bh = function (t) {
        var e = this;
        return this.persistence.runTransaction("Reject batch", "readwrite-primary", function (n) {
          var r;
          return e.ns.Zr(n, t).next(function (t) {
            return d(null !== t), r = t.keys(), e.ns.ro(n, t);
          }).next(function () {
            return e.ns.ho(n);
          }).next(function () {
            return e.Ch.us(n, r);
          });
        });
      }, t.prototype.no = function () {
        var t = this;
        return this.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", function (e) {
          return t.ns.no(e);
        });
      }, t.prototype.mi = function () {
        var t = this;
        return this.persistence.runTransaction("Get last remote snapshot version", "readonly", function (e) {
          return t.Xi.mi(e);
        });
      }, t.prototype.qh = function (e) {
        var n = this,
            r = e.X,
            i = this.bh;
        return this.persistence.runTransaction("Apply remote event", "readwrite-primary", function (o) {
          var s = n.Dh.oi({
            ai: !0
          }); // Reset newTargetDataByTargetMap in case this transaction gets re-run.

          i = n.bh;
          var u = [];
          e.Qt.forEach(function (e, s) {
            var a = i.get(s);

            if (a) {
              // Only update the remote keys if the target is still active. This
              // ensures that we can persist the updated target data along with
              // the updated assignment.
              u.push(n.Xi.Ni(o, e.Xt, s).next(function () {
                return n.Xi.Ci(o, e.Yt, s);
              }));
              var c = e.resumeToken; // Update the resume token if the change includes one.

              if (c.H() > 0) {
                var h = a.tt(c, r).Z(o.Li);
                i = i.nt(s, h), // Update the target data if there are target changes (or if
                // sufficient time has passed since the last update).
                t.Uh(a, h, e) && u.push(n.Xi.yi(o, h));
              }
            }
          });
          var a = rt(),
              c = ct(); // HACK: The only reason we allow a null snapshot version is so that we
          // can synthesize remote events when we get permission denied errors while
          // trying to resolve the state of a locally cached document that is in
          // limbo.

          if (e.jt.forEach(function (t, e) {
            c = c.add(t);
          }), // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
          // documents in advance in a single call.
          u.push(s.getEntries(o, c).next(function (t) {
            e.jt.forEach(function (i, c) {
              var f = t.get(i); // Note: The order of the steps below is important, since we want
              // to ensure that rejected limbo resolutions (which fabricate
              // NoDocuments with SnapshotVersion.min()) never add documents to
              // cache.

              c instanceof en && c.version.isEqual(P.min()) ? ( // NoDocuments with SnapshotVersion.min() are used in manufactured
              // events. We remove these documents from cache since we lost
              // access.
              s.Gn(i, r), a = a.nt(i, c)) : null == f || c.version.o(f.version) > 0 || 0 === c.version.o(f.version) && f.hasPendingWrites ? (s.jn(c, r), a = a.nt(i, c)) : h("LocalStore", "Ignoring outdated watch update for ", i, ". Current version:", f.version, " Watch version:", c.version), e.Kt.has(i) && u.push(n.persistence.wi.Gr(o, i));
            });
          })), !r.isEqual(P.min())) {
            var f = n.Xi.mi(o).next(function (t) {
              return n.Xi.Ri(o, o.Li, r);
            });
            u.push(f);
          }

          return Tn.Bn(u).next(function () {
            return s.apply(o);
          }).next(function () {
            return n.Ch.cs(o, a);
          });
        }).then(function (t) {
          return n.bh = i, t;
        });
      },
      /**
       * Returns true if the newTargetData should be persisted during an update of
       * an active target. TargetData should always be persisted when a target is
       * being released and should not call this function.
       *
       * While the target is active, TargetData updates can be omitted when nothing
       * about the target has changed except metadata like the resume token or
       * snapshot version. Occasionally it's worth the extra write to prevent these
       * values from getting too stale after a crash, but this doesn't have to be
       * too frequent.
       */
      t.Uh = function (t, e, n) {
        // Always persist target data if we don't already have a resume token.
        return d(e.resumeToken.H() > 0), 0 === t.resumeToken.H() || e.X.m() - t.X.m() >= this.Qh || n.Yt.size + n.Jt.size + n.Xt.size > 0; // Don't allow resume token changes to be buffered indefinitely. This
        // allows us to be reasonably up-to-date after a crash and avoids needing
        // to loop over all active queries on shutdown. Especially in the browser
        // we may not get time to do anything interesting while the current tab is
        // closing.
      }, t.prototype.Wh = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r,
              i,
              o,
              s,
              u,
              a,
              c,
              f = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return e.trys.push([0, 2,, 3]), [4
                /*yield*/
                , this.persistence.runTransaction("notifyLocalViewChanges", "readwrite", function (e) {
                  return Tn.forEach(t, function (t) {
                    return Tn.forEach(t.ms, function (n) {
                      return f.persistence.wi.Fi(e, t.targetId, n);
                    }).next(function () {
                      return Tn.forEach(t.As, function (n) {
                        return f.persistence.wi.$i(e, t.targetId, n);
                      });
                    });
                  });
                })];

              case 1:
                return e.sent(), [3
                /*break*/
                , 3];

              case 2:
                if (!Br(n = e.sent())) throw n; // If `notifyLocalViewChanges` fails, we did not advance the sequence
                // number for the documents that were included in this transaction.
                // This might trigger them to be deleted earlier than they otherwise
                // would have, but it should not invalidate the integrity of the data.

                return h("LocalStore", "Failed to update sequence numbers: " + n), [3
                /*break*/
                , 3];

              case 3:
                for (r = 0, i = t; r < i.length; r++) {
                  o = i[r], s = o.targetId, o.fromCache || (u = this.bh.get(s), a = u.X, c = u.et(a), // Advance the last limbo free snapshot version
                  this.bh = this.bh.nt(s, c));
                }

                return [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.jh = function (t) {
        var e = this;
        return this.persistence.runTransaction("Get next mutation batch", "readonly", function (n) {
          return void 0 === t && (t = -1), e.ns.eo(n, t);
        });
      }, t.prototype.Kh = function (t) {
        var e = this;
        return this.persistence.runTransaction("read document", "readonly", function (n) {
          return e.Ch.rs(n, t);
        });
      }, t.prototype.Gh = function (t) {
        var e = this;
        return this.persistence.runTransaction("Allocate target", "readwrite", function (n) {
          var r;
          return e.Xi.Di(n, t).next(function (i) {
            return i ? ( // This target has been listened to previously, so reuse the
            // previous targetID.
            // TODO(mcg): freshen last accessed date?
            r = i, Tn.resolve(r)) : e.Xi.Ti(n).next(function (i) {
              return r = new Y(t, i, 0
              /* Listen */
              , n.Li), e.Xi.Pi(n, r).next(function () {
                return r;
              });
            });
          });
        }).then(function (n) {
          // If Multi-Tab is enabled, the existing target data may be newer than
          // the in-memory data
          var r = e.bh.get(n.targetId);
          return (null === r || n.X.o(r.X) > 0) && (e.bh = e.bh.nt(n.targetId, n), e.vh.set(t, n.targetId)), n;
        });
      }, t.prototype.Di = function (t, e) {
        var n = this.vh.get(e);
        return void 0 !== n ? Tn.resolve(this.bh.get(n)) : this.Xi.Di(t, e);
      }, t.prototype.zh = function (t, e) {
        var n = this,
            r = this.bh.get(t),
            i = e ? "readwrite" : "readwrite-primary";
        return this.persistence.runTransaction("Release target", i, function (t) {
          return e ? Tn.resolve() : n.persistence.wi.removeTarget(t, r);
        }).then(function () {
          n.bh = n.bh.remove(t), n.vh["delete"](r.target);
        });
      }, t.prototype.Hh = function (t, e) {
        var n = this,
            r = P.min(),
            i = ct();
        return this.persistence.runTransaction("Execute query", "readonly", function (o) {
          return n.Di(o, t.We()).next(function (t) {
            if (t) return r = t.lastLimboFreeSnapshotVersion, n.Xi.ki(o, t.targetId).next(function (t) {
              i = t;
            });
          }).next(function () {
            return n.ph._s(o, t, e ? r : P.min(), e ? i : ct());
          }).next(function (t) {
            return {
              documents: t,
              Yh: i
            };
          });
        });
      }, t.prototype.Lh = function (t, e, n) {
        var r = this,
            i = e.batch,
            o = i.keys(),
            s = Tn.resolve();
        return o.forEach(function (r) {
          s = s.next(function () {
            return n.zn(t, r);
          }).next(function (t) {
            var o = t,
                s = e.Cn.get(r);
            d(null !== s), (!o || o.version.o(s) < 0) && (o = i.pn(r, o, e)) && // We use the commitVersion as the readTime rather than the
            // document's updateTime since the updateTime is not advanced
            // for updates that do not modify the underlying document.
            n.jn(o, e.Dn);
          });
        }), s.next(function () {
          return r.ns.ro(t, i);
        });
      }, t.prototype.Ah = function (t) {
        var e = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function (n) {
          return t.gh(n, e.bh);
        });
      }, t;
    }();
    /** Implements the steps for LRU garbage collection. */

    /**
     * The maximum time to leave a resume token buffered without writing it out.
     * This value is arbitrary: it's long enough to avoid several writes
     * (possibly indefinitely if updates come more frequently than this) but
     * short enough that restarting after crashing will still have a pretty
     * recent resume token.
     */


    ii.Qh = 3e8;
    /**
     * An implementation of LocalStore that provides additional functionality
     * for MultiTabSyncEngine.
     *
     * Note: some field defined in this class might have public access level, but
     * the class is not exported so they are only accessible from this module.
     * This is useful to implement optional features (like bundles) in free
     * functions, such that they are tree-shakeable.
     */
    // PORTING NOTE: Web only.

    var oi =
    /** @class */
    function (t) {
      function n(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n, r) || this).persistence = e, i.ns = e.Cr(r), i.Dh = e.$r(), i.Xi = e.Nr(), i;
      }
      /** Starts the LocalStore. */


      return e.__extends(n, t), n.prototype.start = function () {
        return this.Jh();
      }, n.prototype.Xh = function (t) {
        var e = this;
        return this.persistence.runTransaction("Lookup mutation documents", "readonly", function (n) {
          return e.ns.to(n, t).next(function (t) {
            return t ? e.Ch.us(n, t) : Tn.resolve(null);
          });
        });
      }, n.prototype.Zh = function (t) {
        this.ns.oo(t);
      }, n.prototype.cr = function (t) {
        this.persistence.cr(t);
      }, n.prototype.Dr = function () {
        return this.persistence.Dr();
      }, n.prototype.ta = function (t) {
        var e = this,
            n = this.bh.get(t);
        return n ? Promise.resolve(n.target) : this.persistence.runTransaction("Get target data", "readonly", function (n) {
          return e.Xi.Me(n, t).next(function (t) {
            return t ? t.target : null;
          });
        });
      }, n.prototype.si = function () {
        var t = this;
        return this.persistence.runTransaction("Get new document changes", "readonly", function (e) {
          return t.Dh.si(e, t.Sh);
        }).then(function (e) {
          var n = e.ii,
              r = e.readTime;
          return t.Sh = r, n;
        });
      }, n.prototype.Jh = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t,
              n = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return t = this, [4
                /*yield*/
                , this.persistence.runTransaction("Synchronize last document change read time", "readonly", function (t) {
                  return n.Dh.ri(t);
                })];

              case 1:
                return t.Sh = e.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }, n;
    }(ii);
    /**
     * Verifies the error thrown by a LocalStore operation. If a LocalStore
     * operation fails because the primary lease has been taken by another client,
     * we ignore the error (the persistence layer will immediately call
     * `applyPrimaryLease` to propagate the primary state change). All other errors
     * are re-thrown.
     *
     * @param err An error returned by a LocalStore operation.
     * @return A Promise that resolves after we recovered, or the original error.
     */


    function si(t) {
      return e.__awaiter(this, void 0, void 0, function () {
        return e.__generator(this, function (e) {
          if (t.code !== x.FAILED_PRECONDITION || t.message !== xn) throw t;
          return h("LocalStore", "Unexpectedly lost primary lease"), [2
          /*return*/
          ];
        });
      });
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * A collection of references to a document from some kind of numbered entity
     * (either a target ID or batch ID). As references are added to or removed from
     * the set corresponding events are emitted to a registered garbage collector.
     *
     * Each reference is represented by a DocumentReference object. Each of them
     * contains enough information to uniquely identify the reference. They are all
     * stored primarily in a set sorted by key. A document is considered garbage if
     * there's no references in that set (this can be efficiently checked thanks to
     * sorting by key).
     *
     * ReferenceSet also keeps a secondary set that contains references sorted by
     * IDs. This one is used to efficiently implement removal of all references by
     * some target ID.
     */


    var ui =
    /** @class */
    function () {
      function t() {
        // A set of outstanding references to a document sorted by key.
        this.ea = new tt(ai.na), // A set of outstanding references to a document sorted by target id.
        this.sa = new tt(ai.ia)
        /** Returns true if the reference set contains no references. */
        ;
      }

      return t.prototype._ = function () {
        return this.ea._();
      },
      /** Adds a reference to the given document key for the given ID. */
      t.prototype.Fi = function (t, e) {
        var n = new ai(t, e);
        this.ea = this.ea.add(n), this.sa = this.sa.add(n);
      },
      /** Add references to the given document keys for the given ID. */
      t.prototype.ra = function (t, e) {
        var n = this;
        t.forEach(function (t) {
          return n.Fi(t, e);
        });
      },
      /**
       * Removes a reference to the given document key for the given
       * ID.
       */
      t.prototype.$i = function (t, e) {
        this.oa(new ai(t, e));
      }, t.prototype.ha = function (t, e) {
        var n = this;
        t.forEach(function (t) {
          return n.$i(t, e);
        });
      },
      /**
       * Clears all references with a given ID. Calls removeRef() for each key
       * removed.
       */
      t.prototype.aa = function (t) {
        var e = this,
            n = new V(new R([])),
            r = new ai(n, t),
            i = new ai(n, t + 1),
            o = [];
        return this.sa.vt([r, i], function (t) {
          e.oa(t), o.push(t.key);
        }), o;
      }, t.prototype.ua = function () {
        var t = this;
        this.ea.forEach(function (e) {
          return t.oa(e);
        });
      }, t.prototype.oa = function (t) {
        this.ea = this.ea["delete"](t), this.sa = this.sa["delete"](t);
      }, t.prototype.ca = function (t) {
        var e = new V(new R([])),
            n = new ai(e, t),
            r = new ai(e, t + 1),
            i = ct();
        return this.sa.vt([n, r], function (t) {
          i = i.add(t.key);
        }), i;
      }, t.prototype.Mi = function (t) {
        var e = new ai(t, 0),
            n = this.ea.Dt(e);
        return null !== n && t.isEqual(n.key);
      }, t;
    }(),
        ai =
    /** @class */
    function () {
      function t(t, e) {
        this.key = t, this.la = e
        /** Compare by key then by ID */
        ;
      }

      return t.na = function (t, e) {
        return V.P(t.key, e.key) || m(t.la, e.la);
      },
      /** Compare by ID then by key */
      t.ia = function (t, e) {
        return m(t.la, e.la) || V.P(t.key, e.key);
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Validates that no arguments were passed in the invocation of functionName.
     *
     * Forward the magic "arguments" variable as second parameter on which the
     * parameter validation is performed:
     * validateNoArgs('myFunction', arguments);
     */


    function ci(t, e) {
      if (0 !== e.length) throw new D(x.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + xi(e.length, "argument") + ".");
    }
    /**
     * Validates the invocation of functionName has the exact number of arguments.
     *
     * Forward the magic "arguments" variable as second parameter on which the
     * parameter validation is performed:
     * validateExactNumberOfArgs('myFunction', arguments, 2);
     */


    function hi(t, e, n) {
      if (e.length !== n) throw new D(x.INVALID_ARGUMENT, "Function " + t + "() requires " + xi(n, "argument") + ", but was called with " + xi(e.length, "argument") + ".");
    }
    /**
     * Validates the invocation of functionName has at least the provided number of
     * arguments (but can have many more).
     *
     * Forward the magic "arguments" variable as second parameter on which the
     * parameter validation is performed:
     * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
     */


    function fi(t, e, n) {
      if (e.length < n) throw new D(x.INVALID_ARGUMENT, "Function " + t + "() requires at least " + xi(n, "argument") + ", but was called with " + xi(e.length, "argument") + ".");
    }
    /**
     * Validates the invocation of functionName has number of arguments between
     * the values provided.
     *
     * Forward the magic "arguments" variable as second parameter on which the
     * parameter validation is performed:
     * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
     */


    function li(t, e, n, r) {
      if (e.length < n || e.length > r) throw new D(x.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + xi(e.length, "argument") + ".");
    }
    /**
     * Validates the provided argument is an array and has as least the expected
     * number of elements.
     */

    /**
     * Validates the provided positional argument has the native JavaScript type
     * using typeof checks.
     */


    function pi(t, e, n, r) {
      wi(t, e, Ai(n) + " argument", r);
    }
    /**
     * Validates the provided argument has the native JavaScript type using
     * typeof checks or is undefined.
     */


    function di(t, e, n, r) {
      void 0 !== r && pi(t, e, n, r);
    }
    /**
     * Validates the provided named option has the native JavaScript type using
     * typeof checks.
     */


    function yi(t, e, n, r) {
      wi(t, e, n + " option", r);
    }
    /**
     * Validates the provided named option has the native JavaScript type using
     * typeof checks or is undefined.
     */


    function vi(t, e, n, r) {
      void 0 !== r && yi(t, e, n, r);
    }
    /**
     * Validates that the provided named option equals one of the expected values.
     */

    /**
     * Validates that the provided named option equals one of the expected values or
     * is undefined.
     */


    function gi(t, e, n, r, i) {
      void 0 !== r && function (t, e, n, r, i) {
        for (var o = [], s = 0, u = i; s < u.length; s++) {
          var a = u[s];
          if (a === r) return;
          o.push(_i(a));
        }

        var c = _i(r);

        throw new D(x.INVALID_ARGUMENT, "Invalid value " + c + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "));
      }(t, 0, n, r, i);
    }
    /**
     * Validates that the provided argument is a valid enum.
     *
     * @param functionName Function making the validation call.
     * @param enums Array containing all possible values for the enum.
     * @param position Position of the argument in `functionName`.
     * @param argument Argument to validate.
     * @return The value as T if the argument can be converted.
     */


    function mi(t, e, n, r) {
      if (!e.some(function (t) {
        return t === r;
      })) throw new D(x.INVALID_ARGUMENT, "Invalid value " + _i(r) + " provided to function " + t + "() for its " + Ai(n) + " argument. Acceptable values: " + e.join(", "));
      return r;
    }
    /** Helper to validate the type of a provided input. */


    function wi(t, e, n, r) {
      if (!("object" === e ? bi(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
        var i = _i(r);

        throw new D(x.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i);
      }
    }
    /**
     * Returns true if it's a non-null object without a custom prototype
     * (i.e. excludes Array, Date, etc.).
     */


    function bi(t) {
      return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
    }
    /** Returns a string describing the type / value of the provided input. */


    function _i(t) {
      if (void 0 === t) return "undefined";
      if (null === t) return "null";
      if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
      if ("number" == typeof t || "boolean" == typeof t) return "" + t;

      if ("object" == typeof t) {
        if (t instanceof Array) return "an array";

        var e =
        /** Hacky method to try to get the constructor name for an object. */
        function (t) {
          if (t.constructor) {
            var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
            if (e && e.length > 1) return e[1];
          }

          return null;
        }(t);

        return e ? "a custom " + e + " object" : "an object";
      }

      return "function" == typeof t ? "a function" : p();
    }

    function Ii(t, e, n) {
      if (void 0 === n) throw new D(x.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + Ai(e) + " argument, but it was undefined.");
    }
    /**
     * Validates the provided positional argument is an object, and its keys and
     * values match the expected keys and types provided in optionTypes.
     */


    function Ei(t, e, n) {
      N(e, function (e, r) {
        if (n.indexOf(e) < 0) throw new D(x.INVALID_ARGUMENT, "Unknown option '" + e + "' passed to function " + t + "(). Available options: " + n.join(", "));
      });
    }
    /**
     * Helper method to throw an error that the provided argument did not pass
     * an instanceof check.
     */


    function Ni(t, e, n, r) {
      var i = _i(r);

      return new D(x.INVALID_ARGUMENT, "Function " + t + "() requires its " + Ai(n) + " argument to be a " + e + ", but it was: " + i);
    }

    function Ti(t, e, n) {
      if (n <= 0) throw new D(x.INVALID_ARGUMENT, "Function " + t + "() requires its " + Ai(e) + " argument to be a positive number, but it was: " + n + ".");
    }
    /** Converts a number to its english word representation */


    function Ai(t) {
      switch (t) {
        case 1:
          return "first";

        case 2:
          return "second";

        case 3:
          return "third";

        default:
          return t + "th";
      }
    }
    /**
     * Formats the given word as plural conditionally given the preceding number.
     */


    function xi(t, e) {
      return t + " " + e + (1 === t ? "" : "s");
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** Helper function to assert Uint8Array is available at runtime. */


    function Di() {
      if ("undefined" == typeof Uint8Array) throw new D(x.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
    }
    /** Helper function to assert Base64 functions are available at runtime. */


    function Si() {
      if ("undefined" == typeof atob) throw new D(x.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
    }
    /**
     * Immutable class holding a blob (binary data).
     * This class is directly exposed in the public API.
     *
     * Note that while you can't hide the constructor in JavaScript code, we are
     * using the hack above to make sure no-one outside this module can call it.
     */


    var Pi =
    /** @class */
    function () {
      function t(t) {
        Si(), this._a = t;
      }

      return t.fromBase64String = function (e) {
        hi("Blob.fromBase64String", arguments, 1), pi("Blob.fromBase64String", "string", 1, e), Si();

        try {
          return new t(z.fromBase64String(e));
        } catch (e) {
          throw new D(x.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + e);
        }
      }, t.fromUint8Array = function (e) {
        if (hi("Blob.fromUint8Array", arguments, 1), Di(), !(e instanceof Uint8Array)) throw Ni("Blob.fromUint8Array", "Uint8Array", 1, e);
        return new t(z.fromUint8Array(e));
      }, t.prototype.toBase64 = function () {
        return hi("Blob.toBase64", arguments, 0), Si(), this._a.toBase64();
      }, t.prototype.toUint8Array = function () {
        return hi("Blob.toUint8Array", arguments, 0), Di(), this._a.toUint8Array();
      }, t.prototype.toString = function () {
        return "Blob(base64: " + this.toBase64() + ")";
      }, t.prototype.isEqual = function (t) {
        return this._a.isEqual(t._a);
      }, t;
    }(),
        ki = function ki(t) {
      !function (t, e, n, r) {
        if (!(e instanceof Array) || e.length < 1) throw new D(x.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + xi(1, "element") + ".");
      }(0, t);

      for (var e = 0; e < t.length; ++e) {
        if (pi("FieldPath", "string", e, t[e]), 0 === t[e].length) throw new D(x.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
      }

      this.fa = new O(t);
    },
        Ri =
    /** @class */
    function (t) {
      /**
       * Creates a FieldPath from the provided field names. If more than one field
       * name is provided, the path will point to a nested field in a document.
       *
       * @param fieldNames A list of field names.
       */
      function n() {
        for (var e = [], n = 0; n < arguments.length; n++) {
          e[n] = arguments[n];
        }

        return t.call(this, e) || this;
      }

      return e.__extends(n, t), n.documentId = function () {
        /**
         * Internal Note: The backend doesn't technically support querying by
         * document ID. Instead it queries by the entire document name (full path
         * included), but in the cases we currently support documentId(), the net
         * effect is the same.
         */
        return new n(O.L().N());
      }, n.prototype.isEqual = function (t) {
        if (!(t instanceof n)) throw Ni("isEqual", "FieldPath", 1, t);
        return this.fa.isEqual(t.fa);
      }, n;
    }(ki),
        Li = new RegExp("[~\\*/\\[\\]]"),
        Oi = function Oi() {
      /** A pointer to the implementing class. */
      this.da = this;
    },
        Vi =
    /** @class */
    function (t) {
      function n(e) {
        var n = this;
        return (n = t.call(this) || this).wa = e, n;
      }

      return e.__extends(n, t), n.prototype.Ta = function (t) {
        if (2
        /* MergeSet */
        !== t.Ea) throw 1
        /* Update */
        === t.Ea ? t.Ia(this.wa + "() can only appear at the top level of your update data") : t.Ia(this.wa + "() cannot be used with set() unless you pass {merge:true}"); // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.

        return t.Le.push(t.path), null;
      }, n.prototype.isEqual = function (t) {
        return t instanceof n;
      }, n;
    }(Oi);
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // The objects that are a part of this API are exposed to third-parties as
    // compiled javascript so we want to flag our private members with a leading
    // underscore to discourage their use.

    /**
     * A field class base class that is shared by the lite, full and legacy SDK,
     * which supports shared code that deals with FieldPaths.
     */

    /**
     * Creates a child context for parsing SerializableFieldValues.
     *
     * This is different than calling `ParseContext.contextWith` because it keeps
     * the fieldTransforms and fieldMask separate.
     *
     * The created context has its `dataSource` set to `UserDataSource.Argument`.
     * Although these values are used with writes, any elements in these FieldValues
     * are not considered writes since they cannot contain any FieldValue sentinels,
     * etc.
     *
     * @param fieldValue The sentinel FieldValue for which to create a child
     *     context.
     * @param context The parent context.
     * @param arrayElement Whether or not the FieldValue has an array.
     */


    function Ui(t, e, n) {
      return new Hi({
        Ea: 3
        /* Argument */
        ,
        ma: e.settings.ma,
        methodName: t.wa,
        Aa: n
      }, e.s, e.serializer, e.ignoreUndefinedProperties);
    }

    var Ci =
    /** @class */
    function (t) {
      function n(e) {
        var n = this;
        return (n = t.call(this) || this).wa = e, n;
      }

      return e.__extends(n, t), n.prototype.Ta = function (t) {
        return new Re(t.path, new Ee());
      }, n.prototype.isEqual = function (t) {
        return t instanceof n;
      }, n;
    }(Oi),
        Fi =
    /** @class */
    function (t) {
      function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).wa = e, r.Ra = n, r;
      }

      return e.__extends(n, t), n.prototype.Ta = function (t) {
        var e = Ui(this, t,
        /*array=*/
        !0),
            n = this.Ra.map(function (t) {
          return no(t, e);
        }),
            r = new Ne(n);
        return new Re(t.path, r);
      }, n.prototype.isEqual = function (t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
      }, n;
    }(Oi),
        ji =
    /** @class */
    function (t) {
      function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).wa = e, r.Ra = n, r;
      }

      return e.__extends(n, t), n.prototype.Ta = function (t) {
        var e = Ui(this, t,
        /*array=*/
        !0),
            n = this.Ra.map(function (t) {
          return no(t, e);
        }),
            r = new Ae(n);
        return new Re(t.path, r);
      }, n.prototype.isEqual = function (t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
      }, n;
    }(Oi),
        Mi =
    /** @class */
    function (t) {
      function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).wa = e, r.Pa = n, r;
      }

      return e.__extends(n, t), n.prototype.Ta = function (t) {
        var e = new De(t.serializer, Yt(t.serializer, this.Pa));
        return new Re(t.path, e);
      }, n.prototype.isEqual = function (t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
      }, n;
    }(Oi),
        qi =
    /** @class */
    function (t) {
      function n() {
        return t.call(this) || this;
      }

      return e.__extends(n, t), n["delete"] = function () {
        return ci("FieldValue.delete", arguments), new Bi(new Vi("FieldValue.delete"));
      }, n.serverTimestamp = function () {
        return ci("FieldValue.serverTimestamp", arguments), new Bi(new Ci("FieldValue.serverTimestamp"));
      }, n.arrayUnion = function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        } // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we'd need the Firestore instance to do this.


        return fi("FieldValue.arrayUnion", arguments, 1), new Bi(new Fi("FieldValue.arrayUnion", t));
      }, n.arrayRemove = function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        } // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we'd need the Firestore instance to do this.


        return fi("FieldValue.arrayRemove", arguments, 1), new Bi(new ji("FieldValue.arrayRemove", t));
      }, n.increment = function (t) {
        return pi("FieldValue.increment", "number", 1, t), hi("FieldValue.increment", arguments, 1), new Bi(new Mi("FieldValue.increment", t));
      }, n;
    }(Oi),
        Bi =
    /** @class */
    function (t) {
      function n(e) {
        var n = this;
        return (n = t.call(this) || this).da = e, n.wa = e.wa, n;
      }

      return e.__extends(n, t), n.prototype.Ta = function (t) {
        return this.da.Ta(t);
      }, n.prototype.isEqual = function (t) {
        return t instanceof n && this.da.isEqual(t.da);
      }, n;
    }(qi),
        Gi =
    /** @class */
    function () {
      function t(t, e) {
        if (hi("GeoPoint", arguments, 2), pi("GeoPoint", "number", 1, t), pi("GeoPoint", "number", 2, e), !isFinite(t) || t < -90 || t > 90) throw new D(x.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new D(x.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this.Va = t, this.ga = e;
      }

      return Object.defineProperty(t.prototype, "latitude", {
        /**
         * Returns the latitude of this geo point, a number between -90 and 90.
         */
        get: function get() {
          return this.Va;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * Returns the longitude of this geo point, a number between -180 and 180.
         */
        get: function get() {
          return this.ga;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.isEqual = function (t) {
        return this.Va === t.Va && this.ga === t.ga;
      },
      /**
       * Actually private to JS consumers of our API, so this function is prefixed
       * with an underscore.
       */
      t.prototype.T = function (t) {
        return m(this.Va, t.Va) || m(this.ga, t.ga);
      }, t;
    }();
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    function zi(t) {
      return new zt(t,
      /* useProto3Json= */
      !0);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var Wi = /^__.*__$/,
        Qi = function Qi(t, e, n) {
      this.ya = t, this.pa = e, this.ba = n;
    },
        Yi =
    /** @class */
    function () {
      function t(t, e, n) {
        this.data = t, this.Le = e, this.fieldTransforms = n;
      }

      return t.prototype.va = function (t, e) {
        var n = [];
        return null !== this.Le ? n.push(new Ge(t, this.data, this.Le, e)) : n.push(new Be(t, this.data, e)), this.fieldTransforms.length > 0 && n.push(new We(t, this.fieldTransforms)), n;
      }, t;
    }(),
        Ki =
    /** @class */
    function () {
      function t(t, e, n) {
        this.data = t, this.Le = e, this.fieldTransforms = n;
      }

      return t.prototype.va = function (t, e) {
        var n = [new Ge(t, this.data, this.Le, e)];
        return this.fieldTransforms.length > 0 && n.push(new We(t, this.fieldTransforms)), n;
      }, t;
    }();
    /**
     * A reference to a document in a Firebase project.
     *
     * This class serves as a common base class for the public DocumentReferences
     * exposed in the lite, full and legacy SDK.
     */


    function Xi(t) {
      switch (t) {
        case 0
        /* Set */
        : // fall through

        case 2
        /* MergeSet */
        : // fall through

        case 1
        /* Update */
        :
          return !0;

        case 3
        /* Argument */
        :
        case 4
        /* ArrayArgument */
        :
          return !1;

        default:
          throw p();
      }
    }
    /** A "context" object passed around while parsing user data. */


    var Hi =
    /** @class */
    function () {
      /**
       * Initializes a ParseContext with the given source and path.
       *
       * @param settings The settings for the parser.
       * @param databaseId The database ID of the Firestore instance.
       * @param serializer The serializer to use to generate the Value proto.
       * @param ignoreUndefinedProperties Whether to ignore undefined properties
       * rather than throw.
       * @param fieldTransforms A mutable list of field transforms encountered while
       *     parsing the data.
       * @param fieldMask A mutable list of field paths encountered while parsing
       *     the data.
       *
       * TODO(b/34871131): We don't support array paths right now, so path can be
       * null to indicate the context represents any location within an array (in
       * which case certain features will not work and errors will be somewhat
       * compromised).
       */
      function t(t, e, n, r, i, o) {
        this.settings = t, this.s = e, this.serializer = n, this.ignoreUndefinedProperties = r, // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.Sa(), this.fieldTransforms = i || [], this.Le = o || [];
      }

      return Object.defineProperty(t.prototype, "path", {
        get: function get() {
          return this.settings.path;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "Ea", {
        get: function get() {
          return this.settings.Ea;
        },
        enumerable: !1,
        configurable: !0
      }),
      /** Returns a new context with the specified settings overwritten. */
      t.prototype.Da = function (e) {
        return new t(Object.assign(Object.assign({}, this.settings), e), this.s, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.Le);
      }, t.prototype.Ca = function (t) {
        var e,
            n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
            r = this.Da({
          path: n,
          Aa: !1
        });
        return r.Fa(t), r;
      }, t.prototype.Na = function (t) {
        var e,
            n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
            r = this.Da({
          path: n,
          Aa: !1
        });
        return r.Sa(), r;
      }, t.prototype.$a = function (t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.Da({
          path: void 0,
          Aa: !0
        });
      }, t.prototype.Ia = function (t) {
        return ao(t, this.settings.methodName, this.settings.ka || !1, this.path, this.settings.ma);
      },
      /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
      t.prototype.contains = function (t) {
        return void 0 !== this.Le.find(function (e) {
          return t.D(e);
        }) || void 0 !== this.fieldTransforms.find(function (e) {
          return t.D(e.field);
        });
      }, t.prototype.Sa = function () {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (var t = 0; t < this.path.length; t++) {
          this.Fa(this.path.get(t));
        }
      }, t.prototype.Fa = function (t) {
        if (0 === t.length) throw this.Ia("Document fields must not be empty");
        if (Xi(this.Ea) && Wi.test(t)) throw this.Ia('Document fields cannot begin and end with "__"');
      }, t;
    }(),
        $i =
    /** @class */
    function () {
      function t(t, e, n) {
        this.s = t, this.ignoreUndefinedProperties = e, this.serializer = n || zi(t)
        /** Creates a new top-level parse context. */
        ;
      }

      return t.prototype.xa = function (t, e, n, r) {
        return void 0 === r && (r = !1), new Hi({
          Ea: t,
          methodName: e,
          ma: n,
          path: O.k(),
          Aa: !1,
          ka: r
        }, this.s, this.serializer, this.ignoreUndefinedProperties);
      }, t;
    }();
    /**
     * Helper for parsing raw user input (provided via the API) into internal model
     * classes.
     */

    /** Parse document data from a set() call. */


    function Ji(t, e, n, r, i, o) {
      void 0 === o && (o = {});
      var s = t.xa(o.merge || o.mergeFields ? 2
      /* MergeSet */
      : 0
      /* Set */
      , e, n, i);
      oo("Data must be an object, but it was:", s, r);
      var u,
          a,
          c = ro(r, s);
      if (o.merge) u = new ke(s.Le), a = s.fieldTransforms;else if (o.mergeFields) {
        for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) {
          var d = l[f],
              y = void 0;
          if (d instanceof ki) y = d.fa;else {
            if ("string" != typeof d) throw p();
            y = uo(e, d, n);
          }
          if (!s.contains(y)) throw new D(x.INVALID_ARGUMENT, "Field '" + y + "' is specified in your field mask but missing from your input data.");
          co(h, y) || h.push(y);
        }

        u = new ke(h), a = s.fieldTransforms.filter(function (t) {
          return u.Ke(t.field);
        });
      } else u = null, a = s.fieldTransforms;
      return new Yi(new He(c), u, a);
    }
    /** Parse update data from an update() call. */


    function Zi(t, e, n, r) {
      var i = t.xa(1
      /* Update */
      , e, n);
      oo("Data must be an object, but it was:", i, r);
      var o = [],
          s = new $e();
      N(r, function (t, r) {
        var u = uo(e, t, n),
            a = i.Na(u);
        if (r instanceof Oi && r.da instanceof Vi) // Add it to the field mask, but don't add anything to updateData.
          o.push(u);else {
          var c = no(r, a);
          null != c && (o.push(u), s.set(u, c));
        }
      });
      var u = new ke(o);
      return new Ki(s.ze(), u, i.fieldTransforms);
    }
    /** Parse update data from a list of field/value arguments. */


    function to(t, e, n, r, i, o) {
      var s = t.xa(1
      /* Update */
      , e, n),
          u = [so(e, r, n)],
          a = [i];
      if (o.length % 2 != 0) throw new D(x.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");

      for (var c = 0; c < o.length; c += 2) {
        u.push(so(e, o[c])), a.push(o[c + 1]);
      } // We iterate in reverse order to pick the last value for a field if the
      // user specified the field multiple times.


      for (var h = [], f = new $e(), l = u.length - 1; l >= 0; --l) {
        if (!co(h, u[l])) {
          var p = u[l],
              d = a[l],
              y = s.Na(p);
          if (d instanceof Oi && d.da instanceof Vi) // Add it to the field mask, but don't add anything to updateData.
            h.push(p);else {
            var v = no(d, y);
            null != v && (h.push(p), f.set(p, v));
          }
        }
      }

      var g = new ke(h);
      return new Ki(f.ze(), g, s.fieldTransforms);
    }
    /**
     * Parse a "query value" (e.g. value in a where filter or a value in a cursor
     * bound).
     *
     * @param allowArrays Whether the query value is an array that may directly
     * contain additional arrays (e.g. the operand of an `in` query).
     */


    function eo(t, e, n, r) {
      return void 0 === r && (r = !1), no(n, t.xa(r ? 4
      /* ArrayArgument */
      : 3
      /* Argument */
      , e));
    }
    /**
     * Parses user data to Protobuf Values.
     *
     * @param input Data to be parsed.
     * @param context A context object representing the current path being parsed,
     * the source of the data being parsed, etc.
     * @return The parsed value, or null if the value was a FieldValue sentinel
     * that should not be included in the resulting parsed data.
     */


    function no(t, e) {
      if (io(t)) return oo("Unsupported field value:", e, t), ro(t, e);
      if (t instanceof Oi) // FieldValues usually parse into transforms (except FieldValue.delete())
        // in which case we do not want to include this field in our parsed data
        // (as doing so will overwrite the field directly prior to the transform
        // trying to transform it). So we don't add this location to
        // context.fieldMask and we return null as our parsing result.

        /**
         * "Parses" the provided FieldValueImpl, adding any necessary transforms to
         * context.fieldTransforms.
         */
        return function (t, e) {
          // Sentinels are only supported with writes, and not within arrays.
          if (!Xi(e.Ea)) throw e.Ia(t.wa + "() can only be used with update() and set()");
          if (!e.path) throw e.Ia(t.wa + "() is not currently supported inside arrays");
          var n = t.Ta(e);
          n && e.fieldTransforms.push(n);
        }(t, e), null;

      if ( // If context.path is null we are inside an array and we don't support
      // field mask paths more granular than the top-level array.
      e.path && e.Le.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.Aa && 4
        /* ArrayArgument */
        !== e.Ea) throw e.Ia("Nested arrays are not supported");
        return function (t, e) {
          for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
            var s = no(o[i], e.$a(r));
            null == s && ( // Just include nulls in the array for fields being replaced with a
            // sentinel.
            s = {
              nullValue: "NULL_VALUE"
            }), n.push(s), r++;
          }

          return {
            arrayValue: {
              values: n
            }
          };
        }(t, e);
      }

      return function (t, e) {
        if (null === t) return {
          nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return Yt(e.serializer, t);
        if ("boolean" == typeof t) return {
          booleanValue: t
        };
        if ("string" == typeof t) return {
          stringValue: t
        };

        if (t instanceof Date) {
          var n = S.fromDate(t);
          return {
            timestampValue: Kt(e.serializer, n)
          };
        }

        if (t instanceof S) {
          // Firestore backend truncates precision down to microseconds. To ensure
          // offline mode works the same with regards to truncation, perform the
          // truncation immediately without waiting for the backend to do that.
          var r = new S(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
          return {
            timestampValue: Kt(e.serializer, r)
          };
        }

        if (t instanceof Gi) return {
          geoPointValue: {
            latitude: t.latitude,
            longitude: t.longitude
          }
        };
        if (t instanceof Pi) return {
          bytesValue: Xt(e.serializer, t)
        };

        if (t instanceof Qi) {
          var i = e.s,
              o = t.ya;
          if (!o.isEqual(i)) throw e.Ia("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
          return {
            referenceValue: Jt(t.ya || e.s, t.pa.path)
          };
        }

        if (void 0 === t && e.ignoreUndefinedProperties) return null;
        throw e.Ia("Unsupported field value: " + _i(t));
      }(t, e);
    }

    function ro(t, e) {
      var n = {};
      return T(t) ? // If we encounter an empty object, we explicitly add it to the update
      // mask to ensure that the server creates a map entry.
      e.path && e.path.length > 0 && e.Le.push(e.path) : N(t, function (t, r) {
        var i = no(r, e.Ca(t));
        null != i && (n[t] = i);
      }), {
        mapValue: {
          fields: n
        }
      };
    }

    function io(t) {
      return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof S || t instanceof Gi || t instanceof Pi || t instanceof Qi || t instanceof Oi);
    }

    function oo(t, e, n) {
      if (!io(n) || !bi(n)) {
        var r = _i(n);

        throw "an object" === r ? e.Ia(t + " a custom object") : e.Ia(t + " " + r);
      }
    }
    /**
     * Helper that calls fromDotSeparatedString() but wraps any error thrown.
     */


    function so(t, e, n) {
      if (e instanceof ki) return e.fa;
      if ("string" == typeof e) return uo(t, e);
      throw ao("Field path arguments must be of type string or FieldPath.", t,
      /* hasConverter= */
      !1,
      /* path= */
      void 0, n);
    }
    /**
     * Wraps fromDotSeparatedString with an error message about the method that
     * was thrown.
     * @param methodName The publicly visible method name
     * @param path The dot-separated string form of a field path which will be split
     * on dots.
     * @param targetDoc The document against which the field path will be evaluated.
     */


    function uo(t, n, r) {
      try {
        return function (t) {
          if (t.search(Li) >= 0) throw new D(x.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");

          try {
            return new (Ri.bind.apply(Ri, e.__spreadArrays([void 0], t.split("."))))();
          } catch (e) {
            throw new D(x.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
          }
        }(n).fa;
      } catch (n) {
        throw ao((i = n) instanceof Error ? i.message : i.toString(), t,
        /* hasConverter= */
        !1,
        /* path= */
        void 0, r);
      }
      /**
      * Extracts the message from a caught exception, which should be an Error object
      * though JS doesn't guarantee that.
      */


      var i;
      /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */
    }

    function ao(t, e, n, r, i) {
      var o = r && !r._(),
          s = void 0 !== i,
          u = "Function " + e + "() called with invalid data";
      n && (u += " (via `toFirestore()`)");
      var a = "";
      return (o || s) && (a += " (found", o && (a += " in field " + r), s && (a += " in document " + i), a += ")"), new D(x.INVALID_ARGUMENT, (u += ". ") + t + a);
    }

    function co(t, e) {
      return t.some(function (t) {
        return t.isEqual(e);
      });
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Simple wrapper around a nullable UID. Mostly exists to make code more
     * readable.
     */


    var ho =
    /** @class */
    function () {
      function t(t) {
        this.uid = t;
      }

      return t.prototype.Yr = function () {
        return null != this.uid;
      },
      /**
       * Returns a key representing this user, suitable for inclusion in a
       * dictionary.
       */
      t.prototype.Ma = function () {
        return this.Yr() ? "uid:" + this.uid : "anonymous-user";
      }, t.prototype.isEqual = function (t) {
        return t.uid === this.uid;
      }, t;
    }();
    /** A user with a null UID. */


    ho.UNAUTHENTICATED = new ho(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
    // non-FirebaseAuth providers.
    ho.Oa = new ho("google-credentials-uid"), ho.La = new ho("first-party-uid");
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    var fo = function fo(t, e) {
      this.user = e, this.type = "OAuth", this.Ba = {}, // Set the headers using Object Literal notation to avoid minification
      this.Ba.Authorization = "Bearer " + t;
    },
        lo =
    /** @class */
    function () {
      function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.qa = null;
      }

      return t.prototype.getToken = function () {
        return Promise.resolve(null);
      }, t.prototype.Ua = function () {}, t.prototype.Qa = function (t) {
        this.qa = t, // Fire with initial user.
        t(ho.UNAUTHENTICATED);
      }, t.prototype.Wa = function () {
        this.qa = null;
      }, t;
    }(),
        po =
    /** @class */
    function () {
      function t(t) {
        var e = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */

        this.ja = null,
        /** Tracks the current User. */
        this.currentUser = ho.UNAUTHENTICATED, this.Ka = !1,
        /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
        this.Ga = 0,
        /** The listener registered with setChangeListener(). */
        this.qa = null, this.forceRefresh = !1, this.ja = function () {
          e.Ga++, e.currentUser = e.za(), e.Ka = !0, e.qa && e.qa(e.currentUser);
        }, this.Ga = 0, this.auth = t.getImmediate({
          optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.ja) : ( // if auth is not available, invoke tokenListener once with null token
        this.ja(null), t.get().then(function (t) {
          e.auth = t, e.ja && // tokenListener can be removed by removeChangeListener()
          e.auth.addAuthTokenListener(e.ja);
        }, function () {}));
      }

      return t.prototype.getToken = function () {
        var t = this,
            e = this.Ga,
            n = this.forceRefresh; // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.

        return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then(function (n) {
          // Cancel the request since the token changed while the request was
          // outstanding so the response is potentially for a previous user (which
          // user, we can't be sure).
          return t.Ga !== e ? (h("FirebaseCredentialsProvider", "getToken aborted due to token change."), t.getToken()) : n ? (d("string" == typeof n.accessToken), new fo(n.accessToken, t.currentUser)) : null;
        }) : Promise.resolve(null);
      }, t.prototype.Ua = function () {
        this.forceRefresh = !0;
      }, t.prototype.Qa = function (t) {
        this.qa = t, // Fire the initial event
        this.Ka && t(this.currentUser);
      }, t.prototype.Wa = function () {
        this.auth && this.auth.removeAuthTokenListener(this.ja), this.ja = null, this.qa = null;
      }, // Auth.getUid() can return null even with a user logged in. It is because
      // getUid() is synchronous, but the auth code populating Uid is asynchronous.
      // This method should only be called in the AuthTokenListener callback
      // to guarantee to get the actual user.
      t.prototype.za = function () {
        var t = this.auth && this.auth.getUid();
        return d(null === t || "string" == typeof t), new ho(t);
      }, t;
    }(),
        yo =
    /** @class */
    function () {
      function t(t, e) {
        this.Ha = t, this.Ya = e, this.type = "FirstParty", this.user = ho.La;
      }

      return Object.defineProperty(t.prototype, "Ba", {
        get: function get() {
          var t = {
            "X-Goog-AuthUser": this.Ya
          },
              e = this.Ha.auth.Ja([]);
          return e && (t.Authorization = e), t;
        },
        enumerable: !1,
        configurable: !0
      }), t;
    }(),
        vo =
    /** @class */
    function () {
      function t(t, e) {
        this.Ha = t, this.Ya = e;
      }

      return t.prototype.getToken = function () {
        return Promise.resolve(new yo(this.Ha, this.Ya));
      }, t.prototype.Qa = function (t) {
        // Fire with initial uid.
        t(ho.La);
      }, t.prototype.Wa = function () {}, t.prototype.Ua = function () {}, t;
    }(),
        go =
    /** @class */
    function () {
      function t(t, e, n, r, i, o) {
        this.bs = t, this.Xa = n, this.Za = r, this.tu = i, this.listener = o, this.state = 0
        /* Initial */
        ,
        /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
        this.eu = 0, this.nu = null, this.stream = null, this.xo = new Ln(t, e)
        /**
        * Returns true if start() has been called and no error has occurred. True
        * indicates the stream is open or in the process of opening (which
        * encompasses respecting backoff, getting auth tokens, and starting the
        * actual RPC). Use isOpen() to determine if the stream is open and ready for
        * outbound requests.
        */
        ;
      }

      return t.prototype.su = function () {
        return 1
        /* Starting */
        === this.state || 2
        /* Open */
        === this.state || 4
        /* Backoff */
        === this.state;
      },
      /**
       * Returns true if the underlying RPC is open (the onOpen() listener has been
       * called) and the stream is ready for outbound requests.
       */
      t.prototype.iu = function () {
        return 2
        /* Open */
        === this.state;
      },
      /**
       * Starts the RPC. Only allowed if isStarted() returns false. The stream is
       * not immediately ready for use: onOpen() will be invoked when the RPC is
       * ready for outbound requests, at which point isOpen() will return true.
       *
       * When start returns, isStarted() will return true.
       */
      t.prototype.start = function () {
        3
        /* Error */
        !== this.state ? this.auth() : this.ru();
      },
      /**
       * Stops the RPC. This call is idempotent and allowed regardless of the
       * current isStarted() state.
       *
       * When stop returns, isStarted() and isOpen() will both return false.
       */
      t.prototype.stop = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return this.su() ? [4
                /*yield*/
                , this.close(0
                /* Initial */
                )] : [3
                /*break*/
                , 2];

              case 1:
                t.sent(), t.label = 2;

              case 2:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * After an error the stream will usually back off on the next attempt to
       * start it. If the error warrants an immediate restart of the stream, the
       * sender can use this to indicate that the receiver should not back off.
       *
       * Each error will call the onClose() listener. That function can decide to
       * inhibit backoff if required.
       */
      t.prototype.ou = function () {
        this.state = 0
        /* Initial */
        , this.xo.reset();
      },
      /**
       * Marks this stream as idle. If no further actions are performed on the
       * stream for one minute, the stream will automatically close itself and
       * notify the stream's onClose() handler with Status.OK. The stream will then
       * be in a !isStarted() state, requiring the caller to start the stream again
       * before further use.
       *
       * Only streams that are in state 'Open' can be marked idle, as all other
       * states imply pending network operations.
       */
      t.prototype.hu = function () {
        var t = this; // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).

        this.iu() && null === this.nu && (this.nu = this.bs.Os(this.Xa, 6e4, function () {
          return t.au();
        }));
      },
      /** Sends a message to the underlying stream. */
      t.prototype.uu = function (t) {
        this.cu(), this.stream.send(t);
      },
      /** Called by the idle timer when the stream should close due to inactivity. */
      t.prototype.au = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            return this.iu() ? [2
            /*return*/
            , this.close(0
            /* Initial */
            )] : [2
            /*return*/
            ];
          });
        });
      },
      /** Marks the stream as active again. */
      t.prototype.cu = function () {
        this.nu && (this.nu.cancel(), this.nu = null);
      },
      /**
       * Closes the stream and cleans up as necessary:
       *
       * * closes the underlying GRPC stream;
       * * calls the onClose handler with the given 'error';
       * * sets internal stream state to 'finalState';
       * * adjusts the backoff timer based on the error
       *
       * A new stream can be opened by calling start().
       *
       * @param finalState the intended state of the stream after closing.
       * @param error the error the connection was closed with.
       */
      t.prototype.close = function (t, n) {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                // Notify the listener that the stream closed.
                // Cancel any outstanding timers (they're guaranteed not to execute).
                return this.cu(), this.xo.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
                // underlying stream), guaranteeing they won't execute.
                this.eu++, 3
                /* Error */
                !== t ? // If this is an intentional close ensure we don't delay our next connection attempt.
                this.xo.reset() : n && n.code === x.RESOURCE_EXHAUSTED ? ( // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                f(n.toString()), f("Using maximum backoff delay to prevent overloading the backend."), this.xo.ks()) : n && n.code === x.UNAUTHENTICATED && // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                // just expired.
                this.tu.Ua(), // Clean up the underlying stream because we are no longer interested in events.
                null !== this.stream && (this.lu(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
                // inhibit backoff or otherwise manipulate the state in its non-started state.
                this.state = t, [4
                /*yield*/
                , this.listener._u(n)];

              case 1:
                // Cancel any outstanding timers (they're guaranteed not to execute).
                // Notify the listener that the stream closed.
                return e.sent(), [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Can be overridden to perform additional cleanup before the stream is closed.
       * Calling super.tearDown() is not required.
       */
      t.prototype.lu = function () {}, t.prototype.auth = function () {
        var t = this;
        this.state = 1
        /* Starting */
        ;
        var e = this.fu(this.eu),
            n = this.eu; // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.

        this.tu.getToken().then(function (e) {
          // Stream can be stopped while waiting for authentication.
          // TODO(mikelehen): We really should just use dispatchIfNotClosed
          // and let this dispatch onto the queue, but that opened a spec test can
          // of worms that I don't want to deal with in this PR.
          t.eu === n && // Normally we'd have to schedule the callback on the AsyncQueue.
          // However, the following calls are safe to be called outside the
          // AsyncQueue since they don't chain asynchronous calls
          t.du(e);
        }, function (n) {
          e(function () {
            var e = new D(x.UNKNOWN, "Fetching auth token failed: " + n.message);
            return t.wu(e);
          });
        });
      }, t.prototype.du = function (t) {
        var e = this,
            n = this.fu(this.eu);
        this.stream = this.Tu(t), this.stream.Eu(function () {
          n(function () {
            return e.state = 2
            /* Open */
            , e.listener.Eu();
          });
        }), this.stream._u(function (t) {
          n(function () {
            return e.wu(t);
          });
        }), this.stream.onMessage(function (t) {
          n(function () {
            return e.onMessage(t);
          });
        });
      }, t.prototype.ru = function () {
        var t = this;
        this.state = 4
        /* Backoff */
        , this.xo.xs(function () {
          return e.__awaiter(t, void 0, void 0, function () {
            return e.__generator(this, function (t) {
              return this.state = 0
              /* Initial */
              , this.start(), [2
              /*return*/
              ];
            });
          });
        });
      }, // Visible for tests
      t.prototype.wu = function (t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return h("PersistentStream", "close with error: " + t), this.stream = null, this.close(3
        /* Error */
        , t);
      },
      /**
       * Returns a "dispatcher" function that dispatches operations onto the
       * AsyncQueue but only runs them if closeCount remains unchanged. This allows
       * us to turn auth / stream callbacks into no-ops if the stream is closed /
       * re-opened, etc.
       */
      t.prototype.fu = function (t) {
        var e = this;
        return function (n) {
          e.bs.lr(function () {
            return e.eu === t ? n() : (h("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve());
          });
        };
      }, t;
    }(),
        mo =
    /** @class */
    function (t) {
      function n(e, n, r, i, o) {
        var s = this;
        return (s = t.call(this, e, "listen_stream_connection_backoff"
        /* ListenStreamConnectionBackoff */
        , "listen_stream_idle"
        /* ListenStreamIdle */
        , n, r, o) || this).serializer = i, s;
      }

      return e.__extends(n, t), n.prototype.Tu = function (t) {
        return this.Za.Iu("Listen", t);
      }, n.prototype.onMessage = function (t) {
        // A successful response means the stream is healthy
        this.xo.reset();

        var e = function (t, e) {
          var n;

          if ("targetChange" in e) {
            e.targetChange; // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
            // if unset

            var r = function (t) {
              return "NO_CHANGE" === t ? 0
              /* NoChange */
              : "ADD" === t ? 1
              /* Added */
              : "REMOVE" === t ? 2
              /* Removed */
              : "CURRENT" === t ? 3
              /* Current */
              : "RESET" === t ? 4
              /* Reset */
              : p();
            }(e.targetChange.targetChangeType || "NO_CHANGE"),
                i = e.targetChange.targetIds || [],
                o = function (t, e) {
              return t.Oe ? (d(void 0 === e || "string" == typeof e), z.fromBase64String(e || "")) : (d(void 0 === e || e instanceof Uint8Array), z.fromUint8Array(e || new Uint8Array()));
            }(t, e.targetChange.resumeToken),
                s = e.targetChange.cause,
                u = s && function (t) {
              var e = void 0 === t.code ? x.UNKNOWN : H(t.code);
              return new D(e, t.message || "");
            }(s);

            n = new wt(r, i, o, u || null);
          } else if ("documentChange" in e) {
            e.documentChange;
            var a = e.documentChange;
            a.document, a.document.name, a.document.updateTime;
            var c = ee(t, a.document.name),
                h = $t(a.document.updateTime),
                f = new He({
              mapValue: {
                fields: a.document.fields
              }
            }),
                l = new tn(c, h, f, {}),
                y = a.targetIds || [],
                v = a.removedTargetIds || [];
            n = new gt(y, v, l.key, l);
          } else if ("documentDelete" in e) {
            e.documentDelete;
            var g = e.documentDelete;
            g.document;

            var m = ee(t, g.document),
                w = g.readTime ? $t(g.readTime) : P.min(),
                b = new en(m, w),
                _ = g.removedTargetIds || [];

            n = new gt([], _, b.key, b);
          } else if ("documentRemove" in e) {
            e.documentRemove;
            var I = e.documentRemove;
            I.document;
            var E = ee(t, I.document),
                N = I.removedTargetIds || [];
            n = new gt([], N, E, null);
          } else {
            if (!("filter" in e)) return p();
            e.filter;
            var T = e.filter;
            T.targetId;
            var A = T.count || 0,
                S = new K(A),
                k = T.targetId;
            n = new mt(k, S);
          }

          return n;
        }(this.serializer, t),
            n = function (t) {
          // We have only reached a consistent snapshot for the entire stream if there
          // is a read_time set and it applies to all targets (i.e. the list of
          // targets is empty). The backend is guaranteed to send such responses.
          if (!("targetChange" in t)) return P.min();
          var e = t.targetChange;
          return e.targetIds && e.targetIds.length ? P.min() : e.readTime ? $t(e.readTime) : P.min();
        }(t);

        return this.listener.mu(e, n);
      },
      /**
       * Registers interest in the results of the given target. If the target
       * includes a resumeToken it will be included in the request. Results that
       * affect the target will be streamed back as WatchChange messages that
       * reference the targetId.
       */
      n.prototype.Au = function (t) {
        var e = {};
        e.database = ie(this.serializer), e.addTarget = function (t, e) {
          var n,
              r = e.target;
          return (n = G(r) ? {
            documents: ce(t, r)
          } : {
            query: he(t, r)
          }).targetId = e.targetId, e.resumeToken.H() > 0 && (n.resumeToken = Xt(t, e.resumeToken)), n;
        }(this.serializer, t);

        var n = function (t, e) {
          var n = function (t, e) {
            switch (e) {
              case 0
              /* Listen */
              :
                return null;

              case 1
              /* ExistenceFilterMismatch */
              :
                return "existence-filter-mismatch";

              case 2
              /* LimboResolution */
              :
                return "limbo-document";

              default:
                return p();
            }
          }(0, e.J);

          return null == n ? null : {
            "goog-listen-tags": n
          };
        }(this.serializer, t);

        n && (e.labels = n), this.uu(e);
      },
      /**
       * Unregisters interest in the results of the target associated with the
       * given targetId.
       */
      n.prototype.Ru = function (t) {
        var e = {};
        e.database = ie(this.serializer), e.removeTarget = t, this.uu(e);
      }, n;
    }(go),
        wo =
    /** @class */
    function (t) {
      function n(e, n, r, i, o) {
        var s = this;
        return (s = t.call(this, e, "write_stream_connection_backoff"
        /* WriteStreamConnectionBackoff */
        , "write_stream_idle"
        /* WriteStreamIdle */
        , n, r, o) || this).serializer = i, s.Pu = !1, s;
      }

      return e.__extends(n, t), Object.defineProperty(n.prototype, "Vu", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function get() {
          return this.Pu;
        },
        enumerable: !1,
        configurable: !0
      }), // Override of PersistentStream.start
      n.prototype.start = function () {
        this.Pu = !1, this.lastStreamToken = void 0, t.prototype.start.call(this);
      }, n.prototype.lu = function () {
        this.Pu && this.gu([]);
      }, n.prototype.Tu = function (t) {
        return this.Za.Iu("Write", t);
      }, n.prototype.onMessage = function (t) {
        if ( // Always capture the last stream token.
        d(!!t.streamToken), this.lastStreamToken = t.streamToken, this.Pu) {
          // A successful first write response means the stream is healthy,
          // Note, that we could consider a successful handshake healthy, however,
          // the write itself might be causing an error we want to back off from.
          this.xo.reset();

          var e = function (t, e) {
            return t && t.length > 0 ? (d(void 0 !== e), t.map(function (t) {
              return function (t, e) {
                // NOTE: Deletes don't have an updateTime.
                var n = t.updateTime ? $t(t.updateTime) : $t(e);
                n.isEqual(P.min()) && ( // The Firestore Emulator currently returns an update time of 0 for
                // deletes of non-existing documents (rather than null). This breaks the
                // test "get deleted doc while offline with source=cache" as NoDocuments
                // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
                // TODO(#2149): Remove this when Emulator is fixed
                n = $t(e));
                var r = null;
                return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), new Le(n, r);
              }(t, e);
            })) : [];
          }(t.writeResults, t.commitTime),
              n = $t(t.commitTime);

          return this.listener.yu(n, e);
        } // The first response is always the handshake response


        return d(!t.writeResults || 0 === t.writeResults.length), this.Pu = !0, this.listener.pu();
      },
      /**
       * Sends an initial streamToken to the server, performing the handshake
       * required to make the StreamingWrite RPC work. Subsequent
       * calls should wait until onHandshakeComplete was called.
       */
      n.prototype.bu = function () {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = ie(this.serializer), this.uu(t);
      },
      /** Sends a group of mutations to the Firestore backend to apply. */
      n.prototype.gu = function (t) {
        var e = this,
            n = {
          streamToken: this.lastStreamToken,
          writes: t.map(function (t) {
            return ue(e.serializer, t);
          })
        };
        this.uu(n);
      }, n;
    }(go),
        bo =
    /** @class */
    function (t) {
      function n(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).Za = e, i.credentials = n, i.serializer = r, i.vu = !1, i;
      }

      return e.__extends(n, t), n.prototype.Su = function () {
        if (this.vu) throw new D(x.FAILED_PRECONDITION, "The client has already been terminated.");
      },
      /** Gets an auth token and invokes the provided RPC. */
      n.prototype.Du = function (t, e) {
        var n = this;
        return this.Su(), this.credentials.getToken().then(function (r) {
          return n.Za.Du(t, e, r);
        })["catch"](function (t) {
          throw t.code === x.UNAUTHENTICATED && n.credentials.Ua(), t;
        });
      },
      /** Gets an auth token and invokes the provided RPC with streamed results. */
      n.prototype.Cu = function (t, e) {
        var n = this;
        return this.Su(), this.credentials.getToken().then(function (r) {
          return n.Za.Cu(t, e, r);
        })["catch"](function (t) {
          throw t.code === x.UNAUTHENTICATED && n.credentials.Ua(), t;
        });
      }, n;
    }(function () {
      // Make sure that the structural type of `Datastore` is unique.
      // See https://github.com/microsoft/TypeScript/issues/5451
      this.je = void 0;
    }),
        _o =
    /** @class */
    function () {
      function t(t) {
        this.Fu = t, // The version of each document that was read during this transaction.
        this.Nu = new Map(), this.mutations = [], this.$u = !1,
        /**
             * A deferred usage error that occurred previously in this transaction that
             * will cause the transaction to fail once it actually commits.
             */
        this.ku = null,
        /**
             * Set of documents that have been written in the transaction.
             *
             * When there's more than one write to the same key in a transaction, any
             * writes after the first are handled differently.
             */
        this.xu = new Set();
      }

      return t.prototype.Mu = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r = this;
          return e.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                if (this.Ou(), this.mutations.length > 0) throw new D(x.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                return [4
                /*yield*/
                , function (t, n) {
                  return e.__awaiter(this, void 0, void 0, function () {
                    var r, i, o, s, u;
                    return e.__generator(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return r = y(t), i = {
                            database: ie(r.serializer),
                            documents: n.map(function (t) {
                              return te(r.serializer, t);
                            })
                          }, [4
                          /*yield*/
                          , r.Cu("BatchGetDocuments", i)];

                        case 1:
                          return o = e.sent(), s = new Map(), o.forEach(function (t) {
                            var e = function (t, e) {
                              return "found" in e ? function (t, e) {
                                d(!!e.found), e.found.name, e.found.updateTime;
                                var n = ee(t, e.found.name),
                                    r = $t(e.found.updateTime),
                                    i = new He({
                                  mapValue: {
                                    fields: e.found.fields
                                  }
                                });
                                return new tn(n, r, i, {});
                              }(t, e) : "missing" in e ? function (t, e) {
                                d(!!e.missing), d(!!e.readTime);
                                var n = ee(t, e.missing),
                                    r = $t(e.readTime);
                                return new en(n, r);
                              }(t, e) : p();
                            }(r.serializer, t);

                            s.set(e.key.toString(), e);
                          }), u = [], [2
                          /*return*/
                          , (n.forEach(function (t) {
                            var e = s.get(t.toString());
                            d(!!e), u.push(e);
                          }), u)];
                      }
                    });
                  });
                }(this.Fu, t)];

              case 1:
                return [2
                /*return*/
                , ((n = i.sent()).forEach(function (t) {
                  t instanceof en || t instanceof tn ? r.Lu(t) : p();
                }), n)];
            }
          });
        });
      }, t.prototype.set = function (t, e) {
        this.write(e.va(t, this.Ue(t))), this.xu.add(t);
      }, t.prototype.update = function (t, e) {
        try {
          this.write(e.va(t, this.Bu(t)));
        } catch (t) {
          this.ku = t;
        }

        this.xu.add(t);
      }, t.prototype["delete"] = function (t) {
        this.write([new Ke(t, this.Ue(t))]), this.xu.add(t);
      }, t.prototype.commit = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t,
              n = this;
          return e.__generator(this, function (r) {
            switch (r.label) {
              case 0:
                if (this.Ou(), this.ku) throw this.ku;
                return t = this.Nu, // For each mutation, note that the doc was written.
                this.mutations.forEach(function (e) {
                  t["delete"](e.key.toString());
                }), // For each document that was read but not written to, we want to perform
                // a `verify` operation.
                t.forEach(function (t, e) {
                  var r = new V(R.$(e));
                  n.mutations.push(new Xe(r, n.Ue(r)));
                }), [4
                /*yield*/
                , function (t, n) {
                  return e.__awaiter(this, void 0, void 0, function () {
                    var r, i;
                    return e.__generator(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return r = y(t), i = {
                            database: ie(r.serializer),
                            writes: n.map(function (t) {
                              return ue(r.serializer, t);
                            })
                          }, [4
                          /*yield*/
                          , r.Du("Commit", i)];

                        case 1:
                          return e.sent(), [2
                          /*return*/
                          ];
                      }
                    });
                  });
                }(this.Fu, this.mutations)];

              case 1:
                // For each mutation, note that the doc was written.
                return r.sent(), this.$u = !0, [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.Lu = function (t) {
        var e;
        if (t instanceof tn) e = t.version;else {
          if (!(t instanceof en)) throw p(); // For deleted docs, we must use baseVersion 0 when we overwrite them.

          e = P.min();
        }
        var n = this.Nu.get(t.key.toString());

        if (n) {
          if (!e.isEqual(n)) // This transaction will fail no matter what.
            throw new D(x.ABORTED, "Document version changed between two reads.");
        } else this.Nu.set(t.key.toString(), e);
      },
      /**
       * Returns the version of this document when it was read in this transaction,
       * as a precondition, or no precondition if it was not read.
       */
      t.prototype.Ue = function (t) {
        var e = this.Nu.get(t.toString());
        return !this.xu.has(t) && e ? Oe.updateTime(e) : Oe.Qe();
      },
      /**
       * Returns the precondition for a document if the operation is an update.
       */
      t.prototype.Bu = function (t) {
        var e = this.Nu.get(t.toString()); // The first time a document is written, we want to take into account the
        // read time and existence

        if (!this.xu.has(t) && e) {
          if (e.isEqual(P.min())) // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new D(x.INVALID_ARGUMENT, "Can't update a document that doesn't exist."); // Document exists, base precondition on document update time.

          return Oe.updateTime(e);
        } // Document was not read, so we just use the preconditions for a blind
        // update.


        return Oe.exists(!0);
      }, t.prototype.write = function (t) {
        this.Ou(), this.mutations = this.mutations.concat(t);
      }, t.prototype.Ou = function () {}, t;
    }(),
        Io =
    /** @class */
    function () {
      function t(t, e) {
        this.Ro = t, this.qu = e,
        /** The current OnlineState. */
        this.state = "Unknown"
        /* Unknown */
        ,
        /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
        this.Uu = 0,
        /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
        this.Qu = null,
        /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
        this.Wu = !0
        /**
        * Called by RemoteStore when a watch stream is started (including on each
        * backoff attempt).
        *
        * If this is the first attempt, it sets the OnlineState to Unknown and starts
        * the onlineStateTimer.
        */
        ;
      }

      return t.prototype.ju = function () {
        var t = this;
        0 === this.Uu && (this.Ku("Unknown"
        /* Unknown */
        ), this.Qu = this.Ro.Os("online_state_timeout"
        /* OnlineStateTimeout */
        , 1e4, function () {
          return t.Qu = null, t.Gu("Backend didn't respond within 10 seconds."), t.Ku("Offline"
          /* Offline */
          ), Promise.resolve();
        }));
      },
      /**
       * Updates our OnlineState as appropriate after the watch stream reports a
       * failure. The first failure moves us to the 'Unknown' state. We then may
       * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
       * actually transition to the 'Offline' state.
       */
      t.prototype.zu = function (t) {
        "Online"
        /* Online */
        === this.state ? this.Ku("Unknown"
        /* Unknown */
        ) : (this.Uu++, this.Uu >= 1 && (this.Hu(), this.Gu("Connection failed 1 times. Most recent error: " + t.toString()), this.Ku("Offline"
        /* Offline */
        )));
      },
      /**
       * Explicitly sets the OnlineState to the specified state.
       *
       * Note that this resets our timers / failure counters, etc. used by our
       * Offline heuristics, so must not be used in place of
       * handleWatchStreamStart() and handleWatchStreamFailure().
       */
      t.prototype.set = function (t) {
        this.Hu(), this.Uu = 0, "Online"
        /* Online */
        === t && ( // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Wu = !1), this.Ku(t);
      }, t.prototype.Ku = function (t) {
        t !== this.state && (this.state = t, this.qu(t));
      }, t.prototype.Gu = function (t) {
        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.Wu ? (f(e), this.Wu = !1) : h("OnlineStateTracker", e);
      }, t.prototype.Hu = function () {
        null !== this.Qu && (this.Qu.cancel(), this.Qu = null);
      }, t;
    }(),
        Eo =
    /** @class */
    function () {
      function t(
      /**
       * The local store, used to fill the write pipeline with outbound mutations.
       */
      t,
      /** The client-side proxy for interacting with the backend. */
      n, r, i, o) {
        var s = this;
        this.Yu = t, this.Fu = n, this.Ro = r,
        /**
             * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
             * LocalStore via fillWritePipeline() and have or will send to the write
             * stream.
             *
             * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
             * restart the write stream. When the stream is established the writes in the
             * pipeline will be sent in order.
             *
             * Writes remain in writePipeline until they are acknowledged by the backend
             * and thus will automatically be re-sent if the stream is interrupted /
             * restarted before they're acknowledged.
             *
             * Write responses from the backend are linked to their originating request
             * purely based on order, and so we can just shift() writes from the front of
             * the writePipeline as we receive responses.
             */
        this.Ju = [],
        /**
             * A mapping of watched targets that the client cares about tracking and the
             * user has explicitly called a 'listen' for this target.
             *
             * These targets may or may not have been sent to or acknowledged by the
             * server. On re-establishing the listen stream, these targets should be sent
             * to the server. The targets removed with unlistens are removed eagerly
             * without waiting for confirmation from the listen stream.
             */
        this.Xu = new Map(), this.Zu = null,
        /**
             * A set of reasons for why the RemoteStore may be offline. If empty, the
             * RemoteStore may start its network connections.
             */
        this.tc = new Set(), this.ec = o, this.ec.nc(function (t) {
          r.lr(function () {
            return e.__awaiter(s, void 0, void 0, function () {
              return e.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.sc() ? (h("RemoteStore", "Restarting streams for network reachability change."), [4
                    /*yield*/
                    , this.ic()]) : [3
                    /*break*/
                    , 2];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          });
        }), this.rc = new Io(r, i), // Create streams (but note they're not started yet).
        this.oc = function (t, e, n) {
          var r = y(t);
          return new mo(e, r.Za, r.credentials, r.serializer, n);
        }(this.Fu, r, {
          Eu: this.hc.bind(this),
          _u: this.ac.bind(this),
          mu: this.uc.bind(this)
        }), this.cc = function (t, e, n) {
          var r = y(t);
          return new wo(e, r.Za, r.credentials, r.serializer, n);
        }(this.Fu, r, {
          Eu: this.lc.bind(this),
          _u: this._c.bind(this),
          pu: this.fc.bind(this),
          yu: this.yu.bind(this)
        });
      }
      /**
       * Starts up the remote store, creating streams, restoring state from
       * LocalStore, etc.
       */


      return t.prototype.start = function () {
        return this.enableNetwork();
      },
      /** Re-enables the network. Idempotent. */
      t.prototype.enableNetwork = function () {
        return this.tc["delete"](0
        /* UserDisabled */
        ), this.dc();
      }, t.prototype.dc = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return this.sc() ? (this.wc() ? this.Tc() : this.rc.set("Unknown"
                /* Unknown */
                ), [4
                /*yield*/
                , this.Ec()]) : [3
                /*break*/
                , 2];

              case 1:
                // This will start the write stream if necessary.
                t.sent(), t.label = 2;

              case 2:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Temporarily disables the network. The network can be re-enabled using
       * enableNetwork().
       */
      t.prototype.disableNetwork = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return this.tc.add(0
                /* UserDisabled */
                ), [4
                /*yield*/
                , this.Ic()];

              case 1:
                return t.sent(), // Set the OnlineState to Offline so get()s return from cache, etc.
                this.rc.set("Offline"
                /* Offline */
                ), [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.Ic = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return [4
                /*yield*/
                , this.cc.stop()];

              case 1:
                return t.sent(), [4
                /*yield*/
                , this.oc.stop()];

              case 2:
                return t.sent(), this.Ju.length > 0 && (h("RemoteStore", "Stopping write stream with " + this.Ju.length + " pending writes"), this.Ju = []), this.mc(), [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.yr = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return h("RemoteStore", "RemoteStore shutting down."), this.tc.add(5
                /* Shutdown */
                ), [4
                /*yield*/
                , this.Ic()];

              case 1:
                return t.sent(), this.ec.yr(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                // triggering spurious listener events with cached data, etc.
                this.rc.set("Unknown"
                /* Unknown */
                ), [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Starts new listen for the given target. Uses resume token if provided. It
       * is a no-op if the target of given `TargetData` is already being listened to.
       */
      t.prototype.listen = function (t) {
        this.Xu.has(t.targetId) || ( // Mark this as something the client is currently listening for.
        this.Xu.set(t.targetId, t), this.wc() ? // The listen will be sent in onWatchStreamOpen
        this.Tc() : this.oc.iu() && this.Ac(t));
      },
      /**
       * Removes the listen from server. It is a no-op if the given target id is
       * not being listened to.
       */
      t.prototype.Rc = function (t) {
        this.Xu["delete"](t), this.oc.iu() && this.Pc(t), 0 === this.Xu.size && (this.oc.iu() ? this.oc.hu() : this.sc() && // Revert to OnlineState.Unknown if the watch stream is not open and we
        // have no listeners, since without any listens to send we cannot
        // confirm if the stream is healthy and upgrade to OnlineState.Online.
        this.rc.set("Unknown"
        /* Unknown */
        ));
      },
      /** {@link TargetMetadataProvider.getTargetDataForTarget} */
      t.prototype.Me = function (t) {
        return this.Xu.get(t) || null;
      },
      /** {@link TargetMetadataProvider.getRemoteKeysForTarget} */
      t.prototype.xe = function (t) {
        return this.Vc.xe(t);
      },
      /**
       * We need to increment the the expected number of pending responses we're due
       * from watch so we wait for the ack to process any messages from this target.
       */
      t.prototype.Ac = function (t) {
        this.Zu.de(t.targetId), this.oc.Au(t);
      },
      /**
       * We need to increment the expected number of pending responses we're due
       * from watch so we wait for the removal on the server before we process any
       * messages from this target.
       */
      t.prototype.Pc = function (t) {
        this.Zu.de(t), this.oc.Ru(t);
      }, t.prototype.Tc = function () {
        this.Zu = new _t(this), this.oc.start(), this.rc.ju();
      },
      /**
       * Returns whether the watch stream should be started because it's necessary
       * and has not yet been started.
       */
      t.prototype.wc = function () {
        return this.sc() && !this.oc.su() && this.Xu.size > 0;
      }, t.prototype.sc = function () {
        return 0 === this.tc.size;
      }, t.prototype.mc = function () {
        this.Zu = null;
      }, t.prototype.hc = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t = this;
          return e.__generator(this, function (e) {
            return this.Xu.forEach(function (e, n) {
              t.Ac(e);
            }), [2
            /*return*/
            ];
          });
        });
      }, t.prototype.ac = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (e) {
            return this.mc(), // If we still need the watch stream, retry the connection.
            this.wc() ? (this.rc.zu(t), this.Tc()) : // No need to restart watch stream because there are no active targets.
            // The online state is set to unknown because there is no active attempt
            // at establishing a connection
            this.rc.set("Unknown"
            /* Unknown */
            ), [2
            /*return*/
            ];
          });
        });
      }, t.prototype.uc = function (t, n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var r, i, o;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                if (this.rc.set("Online"
                /* Online */
                ), !(t instanceof wt && 2
                /* Removed */
                === t.state && t.cause)) // Mark the client as online since we got a message from the server
                  return [3
                  /*break*/
                  , 6];
                e.label = 1;

              case 1:
                return e.trys.push([1, 3,, 5]), [4
                /*yield*/
                , this.gc(t)];

              case 2:
                return e.sent(), [3
                /*break*/
                , 5];

              case 3:
                return r = e.sent(), h("RemoteStore", "Failed to remove targets %s: %s ", t.targetIds.join(","), r), [4
                /*yield*/
                , this.yc(r)];

              case 4:
                return e.sent(), [3
                /*break*/
                , 5];

              case 5:
                return [3
                /*break*/
                , 13];

              case 6:
                if (t instanceof gt ? this.Zu.Pe(t) : t instanceof mt ? this.Zu.De(t) : this.Zu.ye(t), n.isEqual(P.min())) return [3
                /*break*/
                , 13];
                e.label = 7;

              case 7:
                return e.trys.push([7, 11,, 13]), [4
                /*yield*/
                , this.Yu.mi()];

              case 8:
                return i = e.sent(), n.o(i) >= 0 ? [4
                /*yield*/
                , this.pc(n)] : [3
                /*break*/
                , 10];
              // We have received a target change with a global snapshot if the snapshot
              // version is not equal to SnapshotVersion.min().

              case 9:
                // We have received a target change with a global snapshot if the snapshot
                // version is not equal to SnapshotVersion.min().
                e.sent(), e.label = 10;

              case 10:
                return [3
                /*break*/
                , 13];

              case 11:
                return h("RemoteStore", "Failed to raise snapshot:", o = e.sent()), [4
                /*yield*/
                , this.yc(o)];

              case 12:
                return e.sent(), [3
                /*break*/
                , 13];

              case 13:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Recovery logic for IndexedDB errors that takes the network offline until
       * `op` succeeds. Retries are scheduled with backoff using
       * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
       * validated via a generic operation.
       *
       * The returned Promise is resolved once the network is disabled and before
       * any retry attempt.
       */
      t.prototype.yc = function (t, n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var r = this;
          return e.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                if (!Br(t)) throw t; // Disable network and raise offline snapshots

                return this.tc.add(1
                /* IndexedDbFailed */
                ), [4
                /*yield*/
                , this.Ic()];

              case 1:
                // Disable network and raise offline snapshots
                return i.sent(), this.rc.set("Offline"
                /* Offline */
                ), n || ( // Use a simple read operation to determine if IndexedDB recovered.
                // Ideally, we would expose a health check directly on SimpleDb, but
                // RemoteStore only has access to persistence through LocalStore.
                n = function n() {
                  return r.Yu.mi();
                }), // Probe IndexedDB periodically and re-enable network
                this.Ro.dr(function () {
                  return e.__awaiter(r, void 0, void 0, function () {
                    return e.__generator(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return h("RemoteStore", "Retrying IndexedDB access"), [4
                          /*yield*/
                          , n()];

                        case 1:
                          return t.sent(), this.tc["delete"](1
                          /* IndexedDbFailed */
                          ), [4
                          /*yield*/
                          , this.dc()];

                        case 2:
                          return t.sent(), [2
                          /*return*/
                          ];
                      }
                    });
                  });
                }), [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Executes `op`. If `op` fails, takes the network offline until `op`
       * succeeds. Returns after the first attempt.
       */
      t.prototype.bc = function (t) {
        var e = this;
        return t()["catch"](function (n) {
          return e.yc(n, t);
        });
      },
      /**
       * Takes a batch of changes from the Datastore, repackages them as a
       * RemoteEvent, and passes that on to the listener, which is typically the
       * SyncEngine.
       */
      t.prototype.pc = function (t) {
        var e = this,
            n = this.Zu.Ne(t); // Update in-memory resume tokens. LocalStore will update the
        // persistent view of these when applying the completed RemoteEvent.
        // Finally raise remote event

        return n.Qt.forEach(function (n, r) {
          if (n.resumeToken.H() > 0) {
            var i = e.Xu.get(r); // A watched target might have been removed already.

            i && e.Xu.set(r, i.tt(n.resumeToken, t));
          }
        }), // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        n.Wt.forEach(function (t) {
          var n = e.Xu.get(t);

          if (n) {
            // Clear the resume token for the target, since we're in a known mismatch
            // state.
            e.Xu.set(t, n.tt(z.Y, n.X)), // Cause a hard reset by unwatching and rewatching immediately, but
            // deliberately don't send a resume token so that we get a full update.
            e.Pc(t); // Mark the target we send as being on behalf of an existence filter
            // mismatch, but don't actually retain that in listenTargets. This ensures
            // that we flag the first re-listen this way without impacting future
            // listens of this target (that might happen e.g. on reconnect).

            var r = new Y(n.target, t, 1
            /* ExistenceFilterMismatch */
            , n.sequenceNumber);
            e.Ac(r);
          }
        }), this.Vc.qh(n);
      },
      /** Handles an error on a target */
      t.prototype.gc = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n, r, i, o;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                n = t.cause, r = 0, i = t.targetIds, e.label = 1;

              case 1:
                return r < i.length ? (o = i[r], this.Xu.has(o) ? [4
                /*yield*/
                , this.Vc.vc(o, n)] : [3
                /*break*/
                , 3]) : [3
                /*break*/
                , 5];

              case 2:
                e.sent(), this.Xu["delete"](o), this.Zu.removeTarget(o), e.label = 3;

              case 3:
                e.label = 4;

              case 4:
                return r++, [3
                /*break*/
                , 1];

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Attempts to fill our write pipeline with writes from the LocalStore.
       *
       * Called internally to bootstrap or refill the write pipeline and by
       * SyncEngine whenever there are new mutations to process.
       *
       * Starts the write stream if necessary.
       */
      t.prototype.Ec = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t, n, r;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                t = this.Ju.length > 0 ? this.Ju[this.Ju.length - 1].batchId : -1, e.label = 1;

              case 1:
                if (!this.Sc()) return [3
                /*break*/
                , 7];
                e.label = 2;

              case 2:
                return e.trys.push([2, 4,, 6]), [4
                /*yield*/
                , this.Yu.jh(t)];

              case 3:
                return null === (n = e.sent()) ? (0 === this.Ju.length && this.cc.hu(), [3
                /*break*/
                , 7]) : (t = n.batchId, this.Dc(n), [3
                /*break*/
                , 6]);

              case 4:
                return r = e.sent(), [4
                /*yield*/
                , this.yc(r)];

              case 5:
                return e.sent(), [3
                /*break*/
                , 6];

              case 6:
                return [3
                /*break*/
                , 1];

              case 7:
                return this.Cc() && this.Fc(), [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Returns true if we can add to the write pipeline (i.e. the network is
       * enabled and the write pipeline is not full).
       */
      t.prototype.Sc = function () {
        return this.sc() && this.Ju.length < 10;
      }, // For testing
      t.prototype.Nc = function () {
        return this.Ju.length;
      },
      /**
       * Queues additional writes to be sent to the write stream, sending them
       * immediately if the write stream is established.
       */
      t.prototype.Dc = function (t) {
        this.Ju.push(t), this.cc.iu() && this.cc.Vu && this.cc.gu(t.mutations);
      }, t.prototype.Cc = function () {
        return this.sc() && !this.cc.su() && this.Ju.length > 0;
      }, t.prototype.Fc = function () {
        this.cc.start();
      }, t.prototype.lc = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            return this.cc.bu(), [2
            /*return*/
            ];
          });
        });
      }, t.prototype.fc = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t, n, r;
          return e.__generator(this, function (e) {
            // Send the write pipeline now that the stream is established.
            for (t = 0, n = this.Ju; t < n.length; t++) {
              r = n[t], this.cc.gu(r.mutations);
            }

            return [2
            /*return*/
            ];
          });
        });
      }, t.prototype.yu = function (t, n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var r,
              i,
              o = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return r = this.Ju.shift(), i = Nn.from(r, t, n), [4
                /*yield*/
                , this.bc(function () {
                  return o.Vc.$c(i);
                })];

              case 1:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return e.sent(), [4
                /*yield*/
                , this.Ec()];

              case 2:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return e.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype._c = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return t && this.cc.Vu ? [4
                /*yield*/
                , this.kc(t)] : [3
                /*break*/
                , 2];
              // This error affects the actual write.

              case 1:
                // This error affects the actual write.
                e.sent(), e.label = 2;

              case 2:
                // If the write stream closed after the write handshake completes, a write
                // operation failed and we fail the pending operation.
                // The write stream might have been started by refilling the write
                // pipeline for failed writes
                return this.Cc() && this.Fc(), [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.kc = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r,
              i = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return X(r = t.code) && r !== x.ABORTED ? (n = this.Ju.shift(), // In this case it's also unlikely that the server itself is melting
                // down -- this was just a bad request so inhibit backoff on the next
                // restart.
                this.cc.ou(), [4
                /*yield*/
                , this.bc(function () {
                  return i.Vc.xc(n.batchId, t);
                })]) : [3
                /*break*/
                , 3];

              case 1:
                // It's possible that with the completion of this mutation
                // another slot has freed up.
                return e.sent(), [4
                /*yield*/
                , this.Ec()];

              case 2:
                // In this case it's also unlikely that the server itself is melting
                // down -- this was just a bad request so inhibit backoff on the next
                // restart.
                // It's possible that with the completion of this mutation
                // another slot has freed up.
                e.sent(), e.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.Mc = function () {
        return new _o(this.Fu);
      }, t.prototype.ic = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return this.tc.add(4
                /* ConnectivityChange */
                ), [4
                /*yield*/
                , this.Ic()];

              case 1:
                return t.sent(), this.rc.set("Unknown"
                /* Unknown */
                ), this.tc["delete"](4
                /* ConnectivityChange */
                ), [4
                /*yield*/
                , this.dc()];

              case 2:
                return t.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.Oc = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.Ro.Ko(), // Tear down and re-create our network streams. This will ensure we get a
                // fresh auth token for the new user and re-fill the write pipeline with
                // new mutations from the LocalStore (since mutations are per-user).
                h("RemoteStore", "RemoteStore received new credentials"), this.tc.add(3
                /* CredentialChange */
                ), [4
                /*yield*/
                , this.Ic()];

              case 1:
                return e.sent(), this.rc.set("Unknown"
                /* Unknown */
                ), [4
                /*yield*/
                , this.Vc.Oc(t)];

              case 2:
                return e.sent(), this.tc["delete"](3
                /* CredentialChange */
                ), [4
                /*yield*/
                , this.dc()];

              case 3:
                return e.sent(), [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Toggles the network state when the client gains or loses its primary lease.
       */
      t.prototype.Lc = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return t ? (this.tc["delete"](2
                /* IsSecondary */
                ), [4
                /*yield*/
                , this.dc()]) : [3
                /*break*/
                , 2];

              case 1:
                return e.sent(), [3
                /*break*/
                , 5];

              case 2:
                return (n = t) ? [3
                /*break*/
                , 4] : (this.tc.add(2
                /* IsSecondary */
                ), [4
                /*yield*/
                , this.Ic()]);

              case 3:
                e.sent(), n = this.rc.set("Unknown"
                /* Unknown */
                ), e.label = 4;

              case 4:
                n, e.label = 5;

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, t;
    }();
    /** A CredentialsProvider that always yields an empty token. */

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // The format of the LocalStorage key that stores the client state is:
    //     firestore_clients_<persistence_prefix>_<instance_key>

    /** Assembles the key for a client state in WebStorage */


    function No(t, e) {
      return "firestore_clients_" + t + "_" + e;
    } // The format of the WebStorage key that stores the mutation state is:
    //     firestore_mutations_<persistence_prefix>_<batch_id>
    //     (for unauthenticated users)
    // or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>
    // 'user_uid' is last to avoid needing to escape '_' characters that it might
    // contain.

    /** Assembles the key for a mutation batch in WebStorage */


    function To(t, e, n) {
      var r = "firestore_mutations_" + t + "_" + n;
      return e.Yr() && (r += "_" + e.uid), r;
    } // The format of the WebStorage key that stores a query target's metadata is:
    //     firestore_targets_<persistence_prefix>_<target_id>

    /** Assembles the key for a query state in WebStorage */


    function Ao(t, e) {
      return "firestore_targets_" + t + "_" + e;
    } // The WebStorage prefix that stores the primary tab's online state. The
    // format of the key is:
    //     firestore_online_state_<persistence_prefix>

    /**
     * Holds the state of a mutation batch, including its user ID, batch ID and
     * whether the batch is 'pending', 'acknowledged' or 'rejected'.
     */
    // Visible for testing


    var xo =
    /** @class */
    function () {
      function t(t, e, n, r) {
        this.user = t, this.batchId = e, this.state = n, this.error = r
        /**
        * Parses a MutationMetadata from its JSON representation in WebStorage.
        * Logs a warning and returns null if the format of the data is not valid.
        */
        ;
      }

      return t.Bc = function (e, n, r) {
        var i = JSON.parse(r),
            o = "object" == typeof i && -1 !== ["pending", "acknowledged", "rejected"].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error),
            s = void 0;
        return o && i.error && (o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (s = new D(i.error.code, i.error.message)), o ? new t(e, n, i.state, s) : (f("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), null);
      }, t.prototype.qc = function () {
        var t = {
          state: this.state,
          updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
          code: this.error.code,
          message: this.error.message
        }), JSON.stringify(t);
      }, t;
    }(),
        Do =
    /** @class */
    function () {
      function t(t, e, n) {
        this.targetId = t, this.state = e, this.error = n
        /**
        * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
        * Logs a warning and returns null if the format of the data is not valid.
        */
        ;
      }

      return t.Bc = function (e, n) {
        var r = JSON.parse(n),
            i = "object" == typeof r && -1 !== ["not-current", "current", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error),
            o = void 0;
        return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new D(r.error.code, r.error.message)), i ? new t(e, r.state, o) : (f("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), null);
      }, t.prototype.qc = function () {
        var t = {
          state: this.state,
          updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
          code: this.error.code,
          message: this.error.message
        }), JSON.stringify(t);
      }, t;
    }(),
        So =
    /** @class */
    function () {
      function t(t, e) {
        this.clientId = t, this.activeTargetIds = e
        /**
        * Parses a RemoteClientState from the JSON representation in WebStorage.
        * Logs a warning and returns null if the format of the data is not valid.
        */
        ;
      }

      return t.Bc = function (e, n) {
        for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = ft(), s = 0; i && s < r.activeTargetIds.length; ++s) {
          i = F(r.activeTargetIds[s]), o = o.add(r.activeTargetIds[s]);
        }

        return i ? new t(e, o) : (f("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), null);
      }, t;
    }(),
        Po =
    /** @class */
    function () {
      function t(t, e) {
        this.clientId = t, this.onlineState = e
        /**
        * Parses a SharedOnlineState from its JSON representation in WebStorage.
        * Logs a warning and returns null if the format of the data is not valid.
        */
        ;
      }

      return t.Bc = function (e) {
        var n = JSON.parse(e);
        return "object" == typeof n && -1 !== ["Unknown", "Online", "Offline"].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (f("SharedClientState", "Failed to parse online state: " + e), null);
      }, t;
    }(),
        ko =
    /** @class */
    function () {
      function t() {
        this.activeTargetIds = ft();
      }

      return t.prototype.Uc = function (t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
      }, t.prototype.Qc = function (t) {
        this.activeTargetIds = this.activeTargetIds["delete"](t);
      },
      /**
       * Converts this entry into a JSON-encoded format we can use for WebStorage.
       * Does not encode `clientId` as it is part of the key in WebStorage.
       */
      t.prototype.qc = function () {
        var t = {
          activeTargetIds: this.activeTargetIds.F(),
          updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
      }, t;
    }(),
        Ro =
    /** @class */
    function () {
      function t(t, e, n, r, i) {
        this.window = t, this.bs = e, this.persistenceKey = n, this.Wc = r, this.Vc = null, this.qu = null, this.Ps = null, this.jc = this.Kc.bind(this), this.Gc = new $(m), this.hr = !1,
        /**
             * Captures WebStorage events that occur before `start()` is called. These
             * events are replayed once `WebStorageSharedClientState` is started.
             */
        this.zc = []; // Escape the special characters mentioned here:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

        var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        this.storage = this.window.localStorage, this.currentUser = i, this.Hc = No(this.persistenceKey, this.Wc), this.Yc =
        /** Assembles the key for the current sequence number. */
        function (t) {
          return "firestore_sequence_number_" + t;
        }(this.persistenceKey), this.Gc = this.Gc.nt(this.Wc, new ko()), this.Jc = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), this.Xc = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.Zc = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), this.tl =
        /** Assembles the key for the online state of the primary tab. */
        function (t) {
          return "firestore_online_state_" + t;
        }(this.persistenceKey), // Rather than adding the storage observer during start(), we add the
        // storage observer during initialization. This ensures that we collect
        // events before other components populate their initial state (during their
        // respective start() calls). Otherwise, we might for example miss a
        // mutation that is added after LocalStore's start() processed the existing
        // mutations but before we observe WebStorage events.
        this.window.addEventListener("storage", this.jc);
      }
      /** Returns 'true' if WebStorage is available in the current environment. */


      return t.Hi = function (t) {
        return !(!t || !t.localStorage);
      }, t.prototype.start = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t,
              n,
              r,
              i,
              o,
              s,
              u,
              a,
              c,
              h,
              f,
              l = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return [4
                /*yield*/
                , this.Vc.Dr()];

              case 1:
                for (t = e.sent(), n = 0, r = t; n < r.length; n++) {
                  (i = r[n]) !== this.Wc && (o = this.getItem(No(this.persistenceKey, i))) && (s = So.Bc(i, o)) && (this.Gc = this.Gc.nt(s.clientId, s));
                }

                for (this.el(), (u = this.storage.getItem(this.tl)) && (a = this.nl(u)) && this.sl(a), c = 0, h = this.zc; c < h.length; c++) {
                  f = h[c], this.Kc(f);
                }

                return this.zc = [], // Register a window unload hook to remove the client metadata entry from
                // WebStorage even if `shutdown()` was not called.
                this.window.addEventListener("unload", function () {
                  return l.yr();
                }), this.hr = !0, [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.ys = function (t) {
        this.setItem(this.Yc, JSON.stringify(t));
      }, t.prototype.il = function () {
        return this.rl(this.Gc);
      }, t.prototype.ol = function (t) {
        var e = !1;
        return this.Gc.forEach(function (n, r) {
          r.activeTargetIds.has(t) && (e = !0);
        }), e;
      }, t.prototype.hl = function (t) {
        this.al(t, "pending");
      }, t.prototype.ul = function (t, e, n) {
        this.al(t, e, n), // Once a final mutation result is observed by other clients, they no longer
        // access the mutation's metadata entry. Since WebStorage replays events
        // in order, it is safe to delete the entry right after updating it.
        this.cl(t);
      }, t.prototype.ll = function (t) {
        var e = "not-current"; // Lookup an existing query state if the target ID was already registered
        // by another tab

        if (this.ol(t)) {
          var n = this.storage.getItem(Ao(this.persistenceKey, t));

          if (n) {
            var r = Do.Bc(t, n);
            r && (e = r.state);
          }
        }

        return this._l.Uc(t), this.el(), e;
      }, t.prototype.fl = function (t) {
        this._l.Qc(t), this.el();
      }, t.prototype.dl = function (t) {
        return this._l.activeTargetIds.has(t);
      }, t.prototype.wl = function (t) {
        this.removeItem(Ao(this.persistenceKey, t));
      }, t.prototype.Tl = function (t, e, n) {
        this.El(t, e, n);
      }, t.prototype.Nh = function (t, e, n) {
        var r = this;
        e.forEach(function (t) {
          r.cl(t);
        }), this.currentUser = t, n.forEach(function (t) {
          r.hl(t);
        });
      }, t.prototype.Il = function (t) {
        this.ml(t);
      }, t.prototype.yr = function () {
        this.hr && (this.window.removeEventListener("storage", this.jc), this.removeItem(this.Hc), this.hr = !1);
      }, t.prototype.getItem = function (t) {
        var e = this.storage.getItem(t);
        return h("SharedClientState", "READ", t, e), e;
      }, t.prototype.setItem = function (t, e) {
        h("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
      }, t.prototype.removeItem = function (t) {
        h("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
      }, t.prototype.Kc = function (t) {
        var n = this,
            r = t; // Note: The function is typed to take Event to be interface-compatible with
        // `Window.addEventListener`.

        if (r.storageArea === this.storage) {
          if (h("SharedClientState", "EVENT", r.key, r.newValue), r.key === this.Hc) return void f("Received WebStorage notification for local change. Another client might have garbage-collected our state");
          this.bs.dr(function () {
            return e.__awaiter(n, void 0, void 0, function () {
              var t, n, i, o, s, u;
              return e.__generator(this, function (e) {
                if (this.hr) {
                  if (null !== r.key) if (this.Jc.test(r.key)) {
                    if (null == r.newValue) return t = this.Al(r.key), [2
                    /*return*/
                    , this.Rl(t, null)];
                    if (n = this.Pl(r.key, r.newValue)) return [2
                    /*return*/
                    , this.Rl(n.clientId, n)];
                  } else if (this.Xc.test(r.key)) {
                    if (null !== r.newValue && (i = this.Vl(r.key, r.newValue))) return [2
                    /*return*/
                    , this.gl(i)];
                  } else if (this.Zc.test(r.key)) {
                    if (null !== r.newValue && (o = this.yl(r.key, r.newValue))) return [2
                    /*return*/
                    , this.pl(o)];
                  } else if (r.key === this.tl) {
                    if (null !== r.newValue && (s = this.nl(r.newValue))) return [2
                    /*return*/
                    , this.sl(s)];
                  } else r.key === this.Yc && (u = function (t) {
                    var e = kn.ps;
                    if (null != t) try {
                      var n = JSON.parse(t);
                      d("number" == typeof n), e = n;
                    } catch (t) {
                      f("SharedClientState", "Failed to read sequence number from WebStorage", t);
                    }
                    return e;
                  }(r.newValue)) !== kn.ps && this.Ps(u);
                } else this.zc.push(r);

                return [2
                /*return*/
                ];
              });
            });
          });
        }
      }, Object.defineProperty(t.prototype, "_l", {
        get: function get() {
          return this.Gc.get(this.Wc);
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.el = function () {
        this.setItem(this.Hc, this._l.qc());
      }, t.prototype.al = function (t, e, n) {
        var r = new xo(this.currentUser, t, e, n),
            i = To(this.persistenceKey, this.currentUser, t);
        this.setItem(i, r.qc());
      }, t.prototype.cl = function (t) {
        var e = To(this.persistenceKey, this.currentUser, t);
        this.removeItem(e);
      }, t.prototype.ml = function (t) {
        var e = {
          clientId: this.Wc,
          onlineState: t
        };
        this.storage.setItem(this.tl, JSON.stringify(e));
      }, t.prototype.El = function (t, e, n) {
        var r = Ao(this.persistenceKey, t),
            i = new Do(t, e, n);
        this.setItem(r, i.qc());
      },
      /**
       * Parses a client state key in WebStorage. Returns null if the key does not
       * match the expected key format.
       */
      t.prototype.Al = function (t) {
        var e = this.Jc.exec(t);
        return e ? e[1] : null;
      },
      /**
       * Parses a client state in WebStorage. Returns 'null' if the value could not
       * be parsed.
       */
      t.prototype.Pl = function (t, e) {
        var n = this.Al(t);
        return So.Bc(n, e);
      },
      /**
       * Parses a mutation batch state in WebStorage. Returns 'null' if the value
       * could not be parsed.
       */
      t.prototype.Vl = function (t, e) {
        var n = this.Xc.exec(t),
            r = Number(n[1]),
            i = void 0 !== n[2] ? n[2] : null;
        return xo.Bc(new ho(i), r, e);
      },
      /**
       * Parses a query target state from WebStorage. Returns 'null' if the value
       * could not be parsed.
       */
      t.prototype.yl = function (t, e) {
        var n = this.Zc.exec(t),
            r = Number(n[1]);
        return Do.Bc(r, e);
      },
      /**
       * Parses an online state from WebStorage. Returns 'null' if the value
       * could not be parsed.
       */
      t.prototype.nl = function (t) {
        return Po.Bc(t);
      }, t.prototype.gl = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (e) {
            return t.user.uid === this.currentUser.uid ? [2
            /*return*/
            , this.Vc.bl(t.batchId, t.state, t.error)] : (h("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid), [2
            /*return*/
            ]);
          });
        });
      }, t.prototype.pl = function (t) {
        return this.Vc.vl(t.targetId, t.state, t.error);
      }, t.prototype.Rl = function (t, e) {
        var n = this,
            r = e ? this.Gc.nt(t, e) : this.Gc.remove(t),
            i = this.rl(this.Gc),
            o = this.rl(r),
            s = [],
            u = [];
        return o.forEach(function (t) {
          i.has(t) || s.push(t);
        }), i.forEach(function (t) {
          o.has(t) || u.push(t);
        }), this.Vc.Sl(s, u).then(function () {
          n.Gc = r;
        });
      }, t.prototype.sl = function (t) {
        // We check whether the client that wrote this online state is still active
        // by comparing its client ID to the list of clients kept active in
        // IndexedDb. If a client does not update their IndexedDb client state
        // within 5 seconds, it is considered inactive and we don't emit an online
        // state event.
        this.Gc.get(t.clientId) && this.qu(t.onlineState);
      }, t.prototype.rl = function (t) {
        var e = ft();
        return t.forEach(function (t, n) {
          e = e.Ct(n.activeTargetIds);
        }), e;
      }, t;
    }(),
        Lo =
    /** @class */
    function () {
      function t() {
        this.Dl = new ko(), this.Cl = {}, this.Vc = null, this.qu = null, this.Ps = null;
      }

      return t.prototype.hl = function (t) {// No op.
      }, t.prototype.ul = function (t, e, n) {// No op.
      }, t.prototype.ll = function (t) {
        return this.Dl.Uc(t), this.Cl[t] || "not-current";
      }, t.prototype.Tl = function (t, e, n) {
        this.Cl[t] = e;
      }, t.prototype.fl = function (t) {
        this.Dl.Qc(t);
      }, t.prototype.dl = function (t) {
        return this.Dl.activeTargetIds.has(t);
      }, t.prototype.wl = function (t) {
        delete this.Cl[t];
      }, t.prototype.il = function () {
        return this.Dl.activeTargetIds;
      }, t.prototype.ol = function (t) {
        return this.Dl.activeTargetIds.has(t);
      }, t.prototype.start = function () {
        return this.Dl = new ko(), Promise.resolve();
      }, t.prototype.Nh = function (t, e, n) {// No op.
      }, t.prototype.Il = function (t) {// No op.
      }, t.prototype.yr = function () {}, t.prototype.ys = function (t) {}, t;
    }(),
        Oo = function Oo(t) {
      this.key = t;
    },
        Vo = function Vo(t) {
      this.key = t;
    },
        Uo =
    /** @class */
    function () {
      function t(t,
      /** Documents included in the remote target */
      e) {
        this.query = t, this.Fl = e, this.Nl = null,
        /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
        this.Ht = !1,
        /** Documents in the view but not in the remote target */
        this.$l = ct(),
        /** Document Keys that have local changes */
        this.Lt = ct(), this.kl = cn(t), this.xl = new lt(this.kl);
      }

      return Object.defineProperty(t.prototype, "Ml", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function get() {
          return this.Fl;
        },
        enumerable: !1,
        configurable: !0
      }),
      /**
       * Iterates over a set of doc changes, applies the query limit, and computes
       * what the new results should be, what the changes were, and whether we may
       * need to go back to the local cache for more results. Does not make any
       * changes to the view.
       * @param docChanges The doc changes to apply to this view.
       * @param previousChanges If this is being called with a refill, then start
       *        with this set of docs and changes instead of the current view.
       * @return a new set of docs, changes, and refill flag.
       */
      t.prototype.Ol = function (t, e) {
        var n = this,
            r = e ? e.Ll : new pt(),
            i = e ? e.xl : this.xl,
            o = e ? e.Lt : this.Lt,
            s = i,
            u = !1,
            a = this.query.In() && i.size === this.query.limit ? i.last() : null,
            c = this.query.mn() && i.size === this.query.limit ? i.first() : null; // Drop documents out to meet limit/limitToLast requirement.

        if (t.ot(function (t, e) {
          var h = i.get(t),
              f = e instanceof tn ? e : null;
          f && (f = an(n.query, f) ? f : null);
          var l = !!h && n.Lt.has(h.key),
              p = !!f && (f.Ge || // We only consider committed mutations for documents that were
          // mutated during the lifetime of the view.
          n.Lt.has(f.key) && f.hasCommittedMutations),
              d = !1; // Calculate change

          h && f ? h.data().isEqual(f.data()) ? l !== p && (r.track({
            type: 3
            /* Metadata */
            ,
            doc: f
          }), d = !0) : n.Bl(h, f) || (r.track({
            type: 2
            /* Modified */
            ,
            doc: f
          }), d = !0, (a && n.kl(f, a) > 0 || c && n.kl(f, c) < 0) && ( // This doc moved from inside the limit to outside the limit.
          // That means there may be some other doc in the local cache
          // that should be included instead.
          u = !0)) : !h && f ? (r.track({
            type: 0
            /* Added */
            ,
            doc: f
          }), d = !0) : h && !f && (r.track({
            type: 1
            /* Removed */
            ,
            doc: h
          }), d = !0, (a || c) && ( // A doc was removed from a full limit query. We'll need to
          // requery from the local cache to see if we know about some other
          // doc that should be in the results.
          u = !0)), d && (f ? (s = s.add(f), o = p ? o.add(t) : o["delete"](t)) : (s = s["delete"](t), o = o["delete"](t)));
        }), this.query.In() || this.query.mn()) for (; s.size > this.query.limit;) {
          var h = this.query.In() ? s.last() : s.first();
          s = s["delete"](h.key), o = o["delete"](h.key), r.track({
            type: 1
            /* Removed */
            ,
            doc: h
          });
        }
        return {
          xl: s,
          Ll: r,
          ql: u,
          Lt: o
        };
      }, t.prototype.Bl = function (t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.Ge && e.hasCommittedMutations && !e.Ge;
      },
      /**
       * Updates the view with the given ViewDocumentChanges and optionally updates
       * limbo docs and sync state from the provided target change.
       * @param docChanges The set of changes to make to the view's docs.
       * @param updateLimboDocuments Whether to update limbo documents based on this
       *        change.
       * @param targetChange A target change to apply for computing limbo docs and
       *        sync state.
       * @return A new ViewChange with the given docs, changes, and sync state.
       */
      // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
      t.prototype.Jn = function (t, e, n) {
        var r = this,
            i = this.xl;
        this.xl = t.xl, this.Lt = t.Lt; // Sort changes based on type and query comparator

        var o = t.Ll.Mt();
        o.sort(function (t, e) {
          return function (t, e) {
            var n = function n(t) {
              switch (t) {
                case 0
                /* Added */
                :
                  return 1;

                case 2
                /* Modified */
                :
                case 3
                /* Metadata */
                :
                  // A metadata change is converted to a modified change at the public
                  // api layer.  Since we sort by document key and then change type,
                  // metadata and modified changes must be sorted equivalently.
                  return 2;

                case 1
                /* Removed */
                :
                  return 0;

                default:
                  return p();
              }
            };

            return n(t) - n(e);
          }(t.type, e.type) || r.kl(t.doc, e.doc);
        }), this.Ul(n);
        var s = e ? this.Ql() : [],
            u = 0 === this.$l.size && this.Ht ? 1
        /* Synced */
        : 0
        /* Local */
        ,
            a = u !== this.Nl;
        return this.Nl = u, 0 !== o.length || a ? {
          snapshot: new dt(this.query, t.xl, i, o, t.Lt, 0
          /* Local */
          === u, a,
          /* excludesMetadataChanges= */
          !1),
          Wl: s
        } : {
          Wl: s
        }; // no changes
      },
      /**
       * Applies an OnlineState change to the view, potentially generating a
       * ViewChange if the view's syncState changes as a result.
       */
      t.prototype.jl = function (t) {
        return this.Ht && "Offline"
        /* Offline */
        === t ? ( // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.Ht = !1, this.Jn({
          xl: this.xl,
          Ll: new pt(),
          Lt: this.Lt,
          ql: !1
        },
        /* updateLimboDocuments= */
        !1)) : {
          Wl: []
        };
      },
      /**
       * Returns whether the doc for the given key should be in limbo.
       */
      t.prototype.Kl = function (t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.Fl.has(t) && // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.xl.has(t) && !this.xl.get(t).Ge;
      },
      /**
       * Updates syncedDocuments, current, and limbo docs based on the given change.
       * Returns the list of changes to which docs are in limbo.
       */
      t.prototype.Ul = function (t) {
        var e = this;
        t && (t.Yt.forEach(function (t) {
          return e.Fl = e.Fl.add(t);
        }), t.Jt.forEach(function (t) {}), t.Xt.forEach(function (t) {
          return e.Fl = e.Fl["delete"](t);
        }), this.Ht = t.Ht);
      }, t.prototype.Ql = function () {
        var t = this; // We can only determine limbo documents when we're in-sync with the server.

        if (!this.Ht) return []; // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.

        var e = this.$l;
        this.$l = ct(), this.xl.forEach(function (e) {
          t.Kl(e.key) && (t.$l = t.$l.add(e.key));
        }); // Diff the new limbo docs with the old limbo docs.

        var n = [];
        return e.forEach(function (e) {
          t.$l.has(e) || n.push(new Vo(e));
        }), this.$l.forEach(function (t) {
          e.has(t) || n.push(new Oo(t));
        }), n;
      },
      /**
       * Update the in-memory state of the current view with the state read from
       * persistence.
       *
       * We update the query view whenever a client's primary status changes:
       * - When a client transitions from primary to secondary, it can miss
       *   LocalStorage updates and its query views may temporarily not be
       *   synchronized with the state on disk.
       * - For secondary to primary transitions, the client needs to update the list
       *   of `syncedDocuments` since secondary clients update their query views
       *   based purely on synthesized RemoteEvents.
       *
       * @param queryResult.documents - The documents that match the query according
       * to the LocalStore.
       * @param queryResult.remoteKeys - The keys of the documents that match the
       * query according to the backend.
       *
       * @return The ViewChange that resulted from this synchronization.
       */
      // PORTING NOTE: Multi-tab only.
      t.prototype.Gl = function (t) {
        this.Fl = t.Yh, this.$l = ct();
        var e = this.Ol(t.documents);
        return this.Jn(e,
        /*updateLimboDocuments=*/
        !0);
      },
      /**
       * Returns a view snapshot as if this query was just listened to. Contains
       * a document add for every existing document and the `fromCache` and
       * `hasPendingWrites` status of the already established view.
       */
      // PORTING NOTE: Multi-tab only.
      t.prototype.zl = function () {
        return dt.Ut(this.query, this.xl, this.Lt, 0
        /* Local */
        === this.Nl);
      }, t;
    }(),
        Co =
    /** @class */
    function () {
      function t(t, e, n, r) {
        this.Ro = t, this.Fu = e, this.updateFunction = n, this.yo = r, this.Hl = 5, this.xo = new Ln(this.Ro, "transaction_retry"
        /* TransactionRetry */
        )
        /** Runs the transaction and sets the result on deferred. */
        ;
      }

      return t.prototype.run = function () {
        this.Yl();
      }, t.prototype.Yl = function () {
        var t = this;
        this.xo.xs(function () {
          return e.__awaiter(t, void 0, void 0, function () {
            var t,
                n,
                r = this;
            return e.__generator(this, function (e) {
              return t = new _o(this.Fu), (n = this.Jl(t)) && n.then(function (e) {
                r.Ro.lr(function () {
                  return t.commit().then(function () {
                    r.yo.resolve(e);
                  })["catch"](function (t) {
                    r.Xl(t);
                  });
                });
              })["catch"](function (t) {
                r.Xl(t);
              }), [2
              /*return*/
              ];
            });
          });
        });
      }, t.prototype.Jl = function (t) {
        try {
          var e = this.updateFunction(t);
          return !U(e) && e["catch"] && e.then ? e : (this.yo.reject(Error("Transaction callback must return a Promise")), null);
        } catch (t) {
          // Do not retry errors thrown by user provided updateFunction.
          return this.yo.reject(t), null;
        }
      }, t.prototype.Xl = function (t) {
        var e = this;
        this.Hl > 0 && this.Zl(t) ? (this.Hl -= 1, this.Ro.lr(function () {
          return e.Yl(), Promise.resolve();
        })) : this.yo.reject(t);
      }, t.prototype.Zl = function (t) {
        if ("FirebaseError" === t.name) {
          // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
          // non-matching document versions with ABORTED. These errors should be retried.
          var e = t.code;
          return "aborted" === e || "failed-precondition" === e || !X(e);
        }

        return !1;
      }, t;
    }(),
        Fo = function Fo(
    /**
         * The query itself.
         */
    t,
    /**
         * The target number created by the client that is used in the watch
         * stream to identify this query.
         */
    e,
    /**
         * The view is responsible for computing the final merged truth of what
         * docs are in the query. It gets notified of local and remote changes,
         * and applies the query filters and limits to determine the most correct
         * possible results.
         */
    n) {
      this.query = t, this.targetId = e, this.view = n;
    },
        jo = function jo(t) {
      this.key = t,
      /**
               * Set to true once we've received a document. This is used in
               * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
               * decide whether it needs to manufacture a delete event for the target once
               * the target is CURRENT.
               */
      this.t_ = !1;
    },
        Mo =
    /** @class */
    function () {
      function t(t, e, n, // PORTING NOTE: Manages state synchronization in multi-tab environments.
      r, i, o) {
        this.Yu = t, this.e_ = e, this.Fu = n, this.n_ = r, this.currentUser = i, this.s_ = o, this.i_ = null, this.r_ = new A(function (t) {
          return sn(t);
        }, on), this.o_ = new Map(),
        /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query.
             */
        this.h_ = [],
        /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
        this.a_ = new $(V.P),
        /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
        this.u_ = new Map(), this.c_ = new ui(),
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.l_ = {},
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.__ = new Map(), this.f_ = rr.di(), this.onlineState = "Unknown"
        /* Unknown */
        ;
      }

      return Object.defineProperty(t.prototype, "d_", {
        get: function get() {
          return !0;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.subscribe = function (t) {
        this.i_ = t;
      }, t.prototype.listen = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n, r, i, o, s;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.w_("listen()"), (i = this.r_.get(t)) ? ( // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                // already exists when EventManager calls us for the first time. This
                // happens when the primary tab is already listening to this query on
                // behalf of another tab and the user of the primary also starts listening
                // to the query. EventManager will not have an assigned target ID in this
                // case and calls `listen` to obtain this ID.
                n = i.targetId, this.n_.ll(n), r = i.view.zl(), [3
                /*break*/
                , 4]) : [3
                /*break*/
                , 1];

              case 1:
                return [4
                /*yield*/
                , this.Yu.Gh(t.We())];

              case 2:
                return o = e.sent(), s = this.n_.ll(o.targetId), n = o.targetId, [4
                /*yield*/
                , this.T_(t, n, "current" === s)];

              case 3:
                r = e.sent(), this.d_ && this.e_.listen(o), e.label = 4;

              case 4:
                return [2
                /*return*/
                , r];
            }
          });
        });
      },
      /**
       * Registers a view for a previously unknown query and computes its initial
       * snapshot.
       */
      t.prototype.T_ = function (t, n, r) {
        return e.__awaiter(this, void 0, void 0, function () {
          var i, o, s, u, a, c;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return [4
                /*yield*/
                , this.Yu.Hh(t,
                /* usePreviousResults= */
                !0)];

              case 1:
                return i = e.sent(), o = new Uo(t, i.Yh), s = o.Ol(i.documents), u = vt.zt(n, r && "Offline"
                /* Offline */
                !== this.onlineState), a = o.Jn(s,
                /* updateLimboDocuments= */
                this.d_, u), this.E_(n, a.Wl), c = new Fo(t, n, o), [2
                /*return*/
                , (this.r_.set(t, c), this.o_.has(n) ? this.o_.get(n).push(t) : this.o_.set(n, [t]), a.snapshot)];
            }
          });
        });
      }, t.prototype.Rc = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r,
              i = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                // Only clean up the query view and target if this is the only query mapped
                // to the target.
                return this.w_("unlisten()"), n = this.r_.get(t), (r = this.o_.get(n.targetId)).length > 1 ? [2
                /*return*/
                , (this.o_.set(n.targetId, r.filter(function (e) {
                  return !on(e, t);
                })), void this.r_["delete"](t))] : this.d_ ? ( // We need to remove the local query target first to allow us to verify
                // whether any other client is still interested in this target.
                this.n_.fl(n.targetId), this.n_.ol(n.targetId) ? [3
                /*break*/
                , 2] : [4
                /*yield*/
                , this.Yu.zh(n.targetId,
                /*keepPersistedTargetData=*/
                !1).then(function () {
                  i.n_.wl(n.targetId), i.e_.Rc(n.targetId), i.I_(n.targetId);
                })["catch"](si)]) : [3
                /*break*/
                , 3];

              case 1:
                e.sent(), e.label = 2;

              case 2:
                return [3
                /*break*/
                , 5];

              case 3:
                return this.I_(n.targetId), [4
                /*yield*/
                , this.Yu.zh(n.targetId,
                /*keepPersistedTargetData=*/
                !0)];

              case 4:
                e.sent(), e.label = 5;

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.write = function (t, n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var r, i, o;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                this.w_("write()"), e.label = 1;

              case 1:
                return e.trys.push([1, 5,, 6]), [4
                /*yield*/
                , this.Yu.Mh(t)];

              case 2:
                return r = e.sent(), this.n_.hl(r.batchId), this.m_(r.batchId, n), [4
                /*yield*/
                , this.A_(r.Un)];

              case 3:
                return e.sent(), [4
                /*yield*/
                , this.e_.Ec()];

              case 4:
                return e.sent(), [3
                /*break*/
                , 6];

              case 5:
                return i = e.sent(), o = $r(i, "Failed to persist write"), n.reject(o), [3
                /*break*/
                , 6];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.runTransaction = function (t, e, n) {
        new Co(t, this.Fu, e, n).run();
      }, t.prototype.qh = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                this.w_("applyRemoteEvent()"), e.label = 1;

              case 1:
                return e.trys.push([1, 4,, 6]), [4
                /*yield*/
                , this.Yu.qh(t)];

              case 2:
                return n = e.sent(), // Update `receivedDocument` as appropriate for any limbo targets.
                t.Qt.forEach(function (t, e) {
                  var n = r.u_.get(e);
                  n && ( // Since this is a limbo resolution lookup, it's for a single document
                  // and it could be added, modified, or removed, but not a combination.
                  d(t.Yt.size + t.Jt.size + t.Xt.size <= 1), t.Yt.size > 0 ? n.t_ = !0 : t.Jt.size > 0 ? d(n.t_) : t.Xt.size > 0 && (d(n.t_), n.t_ = !1));
                }), [4
                /*yield*/
                , this.A_(n, t)];

              case 3:
                // Update `receivedDocument` as appropriate for any limbo targets.
                return e.sent(), [3
                /*break*/
                , 6];

              case 4:
                return [4
                /*yield*/
                , si(e.sent())];

              case 5:
                return e.sent(), [3
                /*break*/
                , 6];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.jl = function (t, e) {
        this.w_("applyOnlineStateChange()");
        var n = [];
        this.r_.forEach(function (e, r) {
          var i = r.view.jl(t);
          i.snapshot && n.push(i.snapshot);
        }), this.i_.R_(t), this.i_.mu(n), this.onlineState = t;
      }, t.prototype.vc = function (t, n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var r,
              i,
              o,
              s,
              u,
              a = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.w_("rejectListens()"), // PORTING NOTE: Multi-tab only.
                this.n_.Tl(t, "rejected", n), r = this.u_.get(t), (i = r && r.key) ? (o = (o = new $(V.P)).nt(i, new en(i, P.min())), s = ct().add(i), u = new yt(P.min(),
                /* targetChanges= */
                new Map(),
                /* targetMismatches= */
                new tt(m), o, s), [4
                /*yield*/
                , this.qh(u)]) : [3
                /*break*/
                , 2];

              case 1:
                return e.sent(), // Since this query failed, we won't want to manually unlisten to it.
                // We only remove it from bookkeeping after we successfully applied the
                // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
                // this query when the RemoteStore restarts the Watch stream, which should
                // re-trigger the target failure.
                this.a_ = this.a_.remove(i), this.u_["delete"](t), this.P_(), [3
                /*break*/
                , 4];

              case 2:
                return [4
                /*yield*/
                , this.Yu.zh(t,
                /* keepPersistedTargetData */
                !1).then(function () {
                  return a.I_(t, n);
                })["catch"](si)];

              case 3:
                e.sent(), e.label = 4;

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.$c = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n, r;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                this.w_("applySuccessfulWrite()"), n = t.batch.batchId, e.label = 1;

              case 1:
                return e.trys.push([1, 4,, 6]), [4
                /*yield*/
                , this.Yu.Oh(t)];

              case 2:
                return r = e.sent(), // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                this.V_(n,
                /*error=*/
                null), this.g_(n), this.n_.ul(n, "acknowledged"), [4
                /*yield*/
                , this.A_(r)];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                return e.sent(), [3
                /*break*/
                , 6];

              case 4:
                return [4
                /*yield*/
                , si(e.sent())];

              case 5:
                return e.sent(), [3
                /*break*/
                , 6];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.xc = function (t, n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var r;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                this.w_("rejectFailedWrite()"), e.label = 1;

              case 1:
                return e.trys.push([1, 4,, 6]), [4
                /*yield*/
                , this.Yu.Bh(t)];

              case 2:
                return r = e.sent(), // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                this.V_(t, n), this.g_(t), this.n_.ul(t, "rejected", n), [4
                /*yield*/
                , this.A_(r)];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                return e.sent(), [3
                /*break*/
                , 6];

              case 4:
                return [4
                /*yield*/
                , si(e.sent())];

              case 5:
                return e.sent(), [3
                /*break*/
                , 6];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.y_ = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n, r, i, o;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                this.e_.sc() || h("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), e.label = 1;

              case 1:
                return e.trys.push([1, 3,, 4]), [4
                /*yield*/
                , this.Yu.no()];

              case 2:
                return -1 === (n = e.sent()) ? [2
                /*return*/
                , void t.resolve()] : ((r = this.__.get(n) || []).push(t), this.__.set(n, r), [3
                /*break*/
                , 4]);

              case 3:
                return i = e.sent(), o = $r(i, "Initialization of waitForPendingWrites() operation failed"), t.reject(o), [3
                /*break*/
                , 4];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
       * if there are any.
       */
      t.prototype.g_ = function (t) {
        (this.__.get(t) || []).forEach(function (t) {
          t.resolve();
        }), this.__["delete"](t);
      },
      /** Reject all outstanding callbacks waiting for pending writes to complete. */
      t.prototype.p_ = function (t) {
        this.__.forEach(function (e) {
          e.forEach(function (e) {
            e.reject(new D(x.CANCELLED, t));
          });
        }), this.__.clear();
      }, t.prototype.m_ = function (t, e) {
        var n = this.l_[this.currentUser.Ma()];
        n || (n = new $(m)), n = n.nt(t, e), this.l_[this.currentUser.Ma()] = n;
      },
      /**
       * Resolves or rejects the user callback for the given batch and then discards
       * it.
       */
      t.prototype.V_ = function (t, e) {
        var n = this.l_[this.currentUser.Ma()]; // NOTE: Mutations restored from persistence won't have callbacks, so it's
        // okay for there to be no callback for this ID.

        if (n) {
          var r = n.get(t);
          r && (e ? r.reject(e) : r.resolve(), n = n.remove(t)), this.l_[this.currentUser.Ma()] = n;
        }
      }, t.prototype.I_ = function (t, e) {
        var n = this;
        void 0 === e && (e = null), this.n_.fl(t);

        for (var r = 0, i = this.o_.get(t); r < i.length; r++) {
          var o = i[r];
          this.r_["delete"](o), e && this.i_.b_(o, e);
        }

        this.o_["delete"](t), this.d_ && this.c_.aa(t).forEach(function (t) {
          n.c_.Mi(t) || // We removed the last reference for this key
          n.v_(t);
        });
      }, t.prototype.v_ = function (t) {
        // It's possible that the target already got removed because the query failed. In that case,
        // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
        var e = this.a_.get(t);
        null !== e && (this.e_.Rc(e), this.a_ = this.a_.remove(t), this.u_["delete"](e), this.P_());
      }, t.prototype.E_ = function (t, e) {
        for (var n = 0, r = e; n < r.length; n++) {
          var i = r[n];
          i instanceof Oo ? (this.c_.Fi(i.key, t), this.S_(i)) : i instanceof Vo ? (h("SyncEngine", "Document no longer in limbo: " + i.key), this.c_.$i(i.key, t), this.c_.Mi(i.key) || // We removed the last reference for this key
          this.v_(i.key)) : p();
        }
      }, t.prototype.S_ = function (t) {
        var e = t.key;
        this.a_.get(e) || (h("SyncEngine", "New document in limbo: " + e), this.h_.push(e), this.P_());
      },
      /**
       * Starts listens for documents in limbo that are enqueued for resolution,
       * subject to a maximum number of concurrent resolutions.
       *
       * Without bounding the number of concurrent resolutions, the server can fail
       * with "resource exhausted" errors which can lead to pathological client
       * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
       */
      t.prototype.P_ = function () {
        for (; this.h_.length > 0 && this.a_.size < this.s_;) {
          var t = this.h_.shift(),
              e = this.f_.next();
          this.u_.set(e, new jo(t)), this.a_ = this.a_.nt(t, e), this.e_.listen(new Y(rn.hn(t.path).We(), e, 2
          /* LimboResolution */
          , kn.ps));
        }
      }, // Visible for testing
      t.prototype.D_ = function () {
        return this.a_;
      }, // Visible for testing
      t.prototype.C_ = function () {
        return this.h_;
      }, t.prototype.A_ = function (t, n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var r,
              i,
              o,
              s = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return r = [], i = [], o = [], this.r_.forEach(function (e, u) {
                  o.push(Promise.resolve().then(function () {
                    var e = u.view.Ol(t);
                    return e.ql ? s.Yu.Hh(u.query,
                    /* usePreviousResults= */
                    !1).then(function (t) {
                      var n = t.documents;
                      return u.view.Ol(n, e);
                    }) : e; // The query has a limit and some docs were removed, so we need
                    // to re-run the query against the local store to make sure we
                    // didn't lose any good docs that had been past the limit.
                  }).then(function (t) {
                    var e = n && n.Qt.get(u.targetId),
                        o = u.view.Jn(t,
                    /* updateLimboDocuments= */
                    s.d_, e);

                    if (s.E_(u.targetId, o.Wl), o.snapshot) {
                      s.d_ && s.n_.Tl(u.targetId, o.snapshot.fromCache ? "not-current" : "current"), r.push(o.snapshot);
                      var a = Pn.Rs(u.targetId, o.snapshot);
                      i.push(a);
                    }
                  }));
                }), [4
                /*yield*/
                , Promise.all(o)];

              case 1:
                return e.sent(), this.i_.mu(r), [4
                /*yield*/
                , this.Yu.Wh(i)];

              case 2:
                return e.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.w_ = function (t) {}, t.prototype.Oc = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.currentUser.isEqual(t) ? [3
                /*break*/
                , 3] : (h("SyncEngine", "User change. New user:", t.Ma()), [4
                /*yield*/
                , this.Yu.Nh(t)]);

              case 1:
                return n = e.sent(), this.currentUser = t, // Fails tasks waiting for pending writes requested by previous user.
                this.p_("'waitForPendingWrites' promise is rejected due to a user change."), // TODO(b/114226417): Consider calling this only in the primary tab.
                this.n_.Nh(t, n.kh, n.xh), [4
                /*yield*/
                , this.A_(n.$h)];

              case 2:
                e.sent(), e.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.enableNetwork = function () {
        return this.e_.enableNetwork();
      }, t.prototype.disableNetwork = function () {
        return this.e_.disableNetwork();
      }, t.prototype.xe = function (t) {
        var e = this.u_.get(t);
        if (e && e.t_) return ct().add(e.key);
        var n = ct(),
            r = this.o_.get(t);
        if (!r) return n;

        for (var i = 0, o = r; i < o.length; i++) {
          var s = o[i],
              u = this.r_.get(s);
          n = n.Ct(u.view.Ml);
        }

        return n;
      }, t;
    }(),
        qo =
    /** @class */
    function (t) {
      function n(e, n, r, i, o, s) {
        var u = this;
        return (u = t.call(this, e, n, r, i, o, s) || this).Yu = e, // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        u.F_ = void 0, u;
      }

      return e.__extends(n, t), Object.defineProperty(n.prototype, "d_", {
        get: function get() {
          return !0 === this.F_;
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype.enableNetwork = function () {
        return this.Yu.cr(!0), t.prototype.enableNetwork.call(this);
      }, n.prototype.disableNetwork = function () {
        return this.Yu.cr(!1), t.prototype.disableNetwork.call(this);
      },
      /**
       * Reconcile the list of synced documents in an existing view with those
       * from persistence.
       */
      n.prototype.N_ = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n, r;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return [4
                /*yield*/
                , this.Yu.Hh(t.query,
                /* usePreviousResults= */
                !0)];

              case 1:
                return n = e.sent(), r = t.view.Gl(n), [2
                /*return*/
                , (this.F_ && this.E_(t.targetId, r.Wl), r)];
            }
          });
        });
      }, n.prototype.jl = function (e, n) {
        // If we are the primary client, the online state of all clients only
        // depends on the online state of the local RemoteStore.
        this.d_ && 0
        /* RemoteStore */
        === n && (t.prototype.jl.call(this, e, n), this.n_.Il(e)), // If we are the secondary client, we explicitly ignore the remote store's
        // online state (the local client may go offline, even though the primary
        // tab remains online) and only apply the primary tab's online state from
        // SharedClientState.
        this.d_ || 1
        /* SharedClientState */
        !== n || t.prototype.jl.call(this, e, n);
      }, n.prototype.bl = function (t, n, r) {
        return e.__awaiter(this, void 0, void 0, function () {
          var i;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.w_("applyBatchState()"), [4
                /*yield*/
                , this.Yu.Xh(t)];

              case 1:
                return null === (i = e.sent()) ? [3
                /*break*/
                , 6] : "pending" !== n ? [3
                /*break*/
                , 3] : [4
                /*yield*/
                , this.e_.Ec()];

              case 2:
                // If we are the primary client, we need to send this write to the
                // backend. Secondary clients will ignore these writes since their remote
                // connection is disabled.
                return e.sent(), [3
                /*break*/
                , 4];

              case 3:
                "acknowledged" === n || "rejected" === n ? ( // NOTE: Both these methods are no-ops for batches that originated from
                // other clients.
                this.V_(t, r || null), this.Yu.Zh(t)) : p(), e.label = 4;

              case 4:
                return [4
                /*yield*/
                , this.A_(i)];

              case 5:
                return e.sent(), [3
                /*break*/
                , 7];

              case 6:
                // A throttled tab may not have seen the mutation before it was completed
                // and removed from the mutation queue, in which case we won't have cached
                // the affected documents. In this case we can safely ignore the update
                // since that means we didn't apply the mutation locally at all (if we
                // had, we would have cached the affected documents), and so we will just
                // see any resulting document changes via normal remote document updates
                // as applicable.
                h("SyncEngine", "Cannot apply mutation batch with id: " + t), e.label = 7;

              case 7:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, n.prototype.Lc = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r,
              i,
              o,
              s,
              u,
              a,
              c = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return !0 !== t || !0 === this.F_ ? [3
                /*break*/
                , 3] : (n = this.n_.il(), [4
                /*yield*/
                , this.k_(n.F(),
                /*transitionToPrimary=*/
                !0)]);

              case 1:
                return r = e.sent(), this.F_ = !0, [4
                /*yield*/
                , this.e_.Lc(!0)];

              case 2:
                for (e.sent(), i = 0, o = r; i < o.length; i++) {
                  s = o[i], this.e_.listen(s);
                }

                return [3
                /*break*/
                , 7];

              case 3:
                return !1 !== t || !1 === this.F_ ? [3
                /*break*/
                , 7] : (u = [], a = Promise.resolve(), this.o_.forEach(function (t, e) {
                  c.n_.dl(e) ? u.push(e) : a = a.then(function () {
                    return c.I_(e), c.Yu.zh(e,
                    /*keepPersistedTargetData=*/
                    !0);
                  }), c.e_.Rc(e);
                }), [4
                /*yield*/
                , a]);

              case 4:
                return e.sent(), [4
                /*yield*/
                , this.k_(u,
                /*transitionToPrimary=*/
                !1)];

              case 5:
                return e.sent(), this.x_(), this.F_ = !1, [4
                /*yield*/
                , this.e_.Lc(!1)];

              case 6:
                e.sent(), e.label = 7;

              case 7:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, n.prototype.x_ = function () {
        var t = this;
        this.u_.forEach(function (e, n) {
          t.e_.Rc(n);
        }), this.c_.ua(), this.u_ = new Map(), this.a_ = new $(V.P);
      },
      /**
       * Reconcile the query views of the provided query targets with the state from
       * persistence. Raises snapshots for any changes that affect the local
       * client and returns the updated state of all target's query data.
       *
       * @param targets the list of targets with views that need to be recomputed
       * @param transitionToPrimary `true` iff the tab transitions from a secondary
       * tab to a primary tab
       */
      n.prototype.k_ = function (t, n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n, r, i, o, s, u, a, c, h, f, l, p, d;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                n = [], r = [], i = 0, o = t, e.label = 1;

              case 1:
                return i < o.length ? (s = o[i], u = void 0, (a = this.o_.get(s)) && 0 !== a.length ? [4
                /*yield*/
                , this.Yu.Gh(a[0].We())] : [3
                /*break*/
                , 7]) : [3
                /*break*/
                , 13];

              case 2:
                // For queries that have a local View, we fetch their current state
                // from LocalStore (as the resume token and the snapshot version
                // might have changed) and reconcile their views with the persisted
                // state (the list of syncedDocuments may have gotten out of sync).
                u = e.sent(), c = 0, h = a, e.label = 3;

              case 3:
                return c < h.length ? (f = h[c], l = this.r_.get(f), [4
                /*yield*/
                , this.N_(l)]) : [3
                /*break*/
                , 6];

              case 4:
                (p = e.sent()).snapshot && r.push(p.snapshot), e.label = 5;

              case 5:
                return c++, [3
                /*break*/
                , 3];

              case 6:
                return [3
                /*break*/
                , 11];

              case 7:
                return [4
                /*yield*/
                , this.Yu.ta(s)];

              case 8:
                return d = e.sent(), [4
                /*yield*/
                , this.Yu.Gh(d)];

              case 9:
                return u = e.sent(), [4
                /*yield*/
                , this.T_(this.M_(d), s,
                /*current=*/
                !1)];

              case 10:
                e.sent(), e.label = 11;

              case 11:
                n.push(u), e.label = 12;

              case 12:
                return i++, [3
                /*break*/
                , 1];

              case 13:
                return [2
                /*return*/
                , (this.i_.mu(r), n)];
            }
          });
        });
      },
      /**
       * Creates a `Query` object from the specified `Target`. There is no way to
       * obtain the original `Query`, so we synthesize a `Query` from the `Target`
       * object.
       *
       * The synthesized result might be different from the original `Query`, but
       * since the synthesized `Query` should return the same results as the
       * original one (only the presentation of results might differ), the potential
       * difference will not cause issues.
       */
      n.prototype.M_ = function (t) {
        return new rn(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F"
        /* First */
        , t.startAt, t.endAt);
      }, n.prototype.Dr = function () {
        return this.Yu.Dr();
      }, n.prototype.vl = function (t, n, r) {
        return e.__awaiter(this, void 0, void 0, function () {
          var i, o;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.F_ ? ( // If we receive a target state notification via WebStorage, we are
                // either already secondary or another tab has taken the primary lease.
                h("SyncEngine", "Ignoring unexpected query state notification."), [3
                /*break*/
                , 8]) : [3
                /*break*/
                , 1];

              case 1:
                if (!this.o_.has(t)) return [3
                /*break*/
                , 8];

                switch (n) {
                  case "current":
                  case "not-current":
                    return [3
                    /*break*/
                    , 2];

                  case "rejected":
                    return [3
                    /*break*/
                    , 5];
                }

                return [3
                /*break*/
                , 7];

              case 2:
                return [4
                /*yield*/
                , this.Yu.si()];

              case 3:
                return i = e.sent(), o = yt.Gt(t, "current" === n), [4
                /*yield*/
                , this.A_(i, o)];

              case 4:
                return e.sent(), [3
                /*break*/
                , 8];

              case 5:
                return [4
                /*yield*/
                , this.Yu.zh(t,
                /* keepPersistedTargetData */
                !0)];

              case 6:
                return e.sent(), this.I_(t, r), [3
                /*break*/
                , 8];

              case 7:
                p(), e.label = 8;

              case 8:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, n.prototype.Sl = function (t, n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var r,
              i,
              o,
              s,
              u,
              a,
              c,
              f,
              l,
              p,
              d = this;
          return e.__generator(this, function (y) {
            switch (y.label) {
              case 0:
                if (!this.F_) return [3
                /*break*/
                , 10];
                r = 0, i = t, y.label = 1;

              case 1:
                return r < i.length ? (o = i[r], this.o_.has(o) ? ( // A target might have been added in a previous attempt
                h("SyncEngine", "Adding an already active target " + o), [3
                /*break*/
                , 5]) : [4
                /*yield*/
                , this.Yu.ta(o)]) : [3
                /*break*/
                , 6];

              case 2:
                return s = y.sent(), [4
                /*yield*/
                , this.Yu.Gh(s)];

              case 3:
                return u = y.sent(), [4
                /*yield*/
                , this.T_(this.M_(s), u.targetId,
                /*current=*/
                !1)];

              case 4:
                y.sent(), this.e_.listen(u), y.label = 5;

              case 5:
                return r++, [3
                /*break*/
                , 1];

              case 6:
                a = function a(t) {
                  return e.__generator(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return c.o_.has(t) ? [4
                        /*yield*/
                        , c.Yu.zh(t,
                        /* keepPersistedTargetData */
                        !1).then(function () {
                          d.e_.Rc(t), d.I_(t);
                        })["catch"](si)] : [3
                        /*break*/
                        , 2];
                      // Release queries that are still active.

                      case 1:
                        // Release queries that are still active.
                        e.sent(), e.label = 2;

                      case 2:
                        return [2
                        /*return*/
                        ];
                    }
                  });
                }, c = this, f = 0, l = n, y.label = 7;

              case 7:
                return f < l.length ? (p = l[f], [5
                /*yield**/
                , a(p)]) : [3
                /*break*/
                , 10];

              case 8:
                y.sent(), y.label = 9;

              case 9:
                return f++, [3
                /*break*/
                , 7];

              case 10:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, n;
    }(Mo),
        Bo = function Bo() {
      this.O_ = void 0, this.listeners = [];
    },
        Go =
    /** @class */
    function () {
      function t(t) {
        this.Vc = t, this.L_ = new A(function (t) {
          return sn(t);
        }, on), this.onlineState = "Unknown"
        /* Unknown */
        , this.B_ = new Set(), this.Vc.subscribe(this);
      }

      return t.prototype.listen = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n, r, i, o, s, u;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                if (n = t.query, r = !1, (i = this.L_.get(n)) || (r = !0, i = new Bo()), !r) return [3
                /*break*/
                , 4];
                e.label = 1;

              case 1:
                return e.trys.push([1, 3,, 4]), o = i, [4
                /*yield*/
                , this.Vc.listen(n)];

              case 2:
                return o.O_ = e.sent(), [3
                /*break*/
                , 4];

              case 3:
                return s = e.sent(), u = $r(s, "Initialization of query '" + un(t.query) + "' failed"), [2
                /*return*/
                , void t.onError(u)];

              case 4:
                return this.L_.set(n, i), i.listeners.push(t), // Run global snapshot listeners if a consistent snapshot has been emitted.
                t.jl(this.onlineState), i.O_ && t.q_(i.O_) && this.U_(), [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.Rc = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n, r, i, o;
          return e.__generator(this, function (e) {
            return n = t.query, r = !1, (i = this.L_.get(n)) && (o = i.listeners.indexOf(t)) >= 0 && (i.listeners.splice(o, 1), r = 0 === i.listeners.length), r ? [2
            /*return*/
            , (this.L_["delete"](n), this.Vc.Rc(n))] : [2
            /*return*/
            ];
          });
        });
      }, t.prototype.mu = function (t) {
        for (var e = !1, n = 0, r = t; n < r.length; n++) {
          var i = r[n],
              o = i.query,
              s = this.L_.get(o);

          if (s) {
            for (var u = 0, a = s.listeners; u < a.length; u++) {
              a[u].q_(i) && (e = !0);
            }

            s.O_ = i;
          }
        }

        e && this.U_();
      }, t.prototype.b_ = function (t, e) {
        var n = this.L_.get(t);
        if (n) for (var r = 0, i = n.listeners; r < i.length; r++) {
          i[r].onError(e);
        } // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
        // after an error.

        this.L_["delete"](t);
      }, t.prototype.R_ = function (t) {
        this.onlineState = t;
        var e = !1;
        this.L_.forEach(function (n, r) {
          for (var i = 0, o = r.listeners; i < o.length; i++) {
            // Run global snapshot listeners if a consistent snapshot has been emitted.
            o[i].jl(t) && (e = !0);
          }
        }), e && this.U_();
      }, t.prototype.Q_ = function (t) {
        this.B_.add(t), // Immediately fire an initial event, indicating all existing listeners
        // are in-sync.
        t.next();
      }, t.prototype.W_ = function (t) {
        this.B_["delete"](t);
      }, // Call all global snapshot listeners that have been set.
      t.prototype.U_ = function () {
        this.B_.forEach(function (t) {
          t.next();
        });
      }, t;
    }(),
        zo =
    /** @class */
    function () {
      function t(t, e, n) {
        this.query = t, this.j_ = e,
        /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
        this.K_ = !1, this.G_ = null, this.onlineState = "Unknown"
        /* Unknown */
        , this.options = n || {}
        /**
        * Applies the new ViewSnapshot to this listener, raising a user-facing event
        * if applicable (depending on what changed, whether the user has opted into
        * metadata-only changes, etc.). Returns true if a user-facing event was
        * indeed raised.
        */
        ;
      }

      return t.prototype.q_ = function (t) {
        if (!this.options.includeMetadataChanges) {
          for ( // Remove the metadata only changes.
          var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
            var i = r[n];
            3
            /* Metadata */
            !== i.type && e.push(i);
          }

          t = new dt(t.query, t.docs, t.Ot, e, t.Lt, t.fromCache, t.Bt,
          /* excludesMetadataChanges= */
          !0);
        }

        var o = !1;
        return this.K_ ? this.z_(t) && (this.j_.next(t), o = !0) : this.H_(t, this.onlineState) && (this.Y_(t), o = !0), this.G_ = t, o;
      }, t.prototype.onError = function (t) {
        this.j_.error(t);
      },
      /** Returns whether a snapshot was raised. */
      t.prototype.jl = function (t) {
        this.onlineState = t;
        var e = !1;
        return this.G_ && !this.K_ && this.H_(this.G_, t) && (this.Y_(this.G_), e = !0), e;
      }, t.prototype.H_ = function (t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0; // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).

        var n = "Offline"
        /* Offline */
        !== e; // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.

        return !(this.options.J_ && n || t.docs._() && "Offline"
        /* Offline */
        !== e); // Raise data from cache if we have any documents or we are offline
      }, t.prototype.z_ = function (t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var e = this.G_ && this.G_.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.Bt && !e) && !0 === this.options.includeMetadataChanges; // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
      }, t.prototype.Y_ = function (t) {
        t = dt.Ut(t.query, t.docs, t.Lt, t.fromCache), this.K_ = !0, this.j_.next(t);
      }, t;
    }(),
        Wo =
    /** @class */
    function () {
      function t() {}

      return t.prototype.Fh = function (t) {
        this.X_ = t;
      }, t.prototype._s = function (t, e, n, i) {
        var o = this; // Queries that match all documents don't benefit from using
        // IndexFreeQueries. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.

        return e.En() || n.isEqual(P.min()) ? this.Z_(t, e) : this.X_.us(t, i).next(function (s) {
          var u = o.tf(e, s);
          return (e.In() || e.mn()) && o.ql(e.nn, u, i, n) ? o.Z_(t, e) : (c() <= r.LogLevel.DEBUG && h("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), un(e)), o.X_._s(t, e, n).next(function (t) {
            // We merge `previousResults` into `updateResults`, since
            // `updateResults` is already a DocumentMap. If a document is
            // contained in both lists, then its contents are the same.
            return u.forEach(function (e) {
              t = t.nt(e.key, e);
            }), t;
          }));
        }); // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
      },
      /** Applies the query filter and sorting to the provided documents.  */
      t.prototype.tf = function (t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var n = new tt(cn(t));
        return e.forEach(function (e, r) {
          r instanceof tn && an(t, r) && (n = n.add(r));
        }), n;
      },
      /**
       * Determines if a limit query needs to be refilled from cache, making it
       * ineligible for index-free execution.
       *
       * @param sortedPreviousResults The documents that matched the query when it
       * was last synchronized, sorted by the query's comparator.
       * @param remoteKeys The document keys that matched the query at the last
       * snapshot.
       * @param limboFreeSnapshotVersion The version of the snapshot when the query
       * was last synchronized.
       */
      t.prototype.ql = function (t, e, n, r) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0; // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.

        var i = "F"
        /* First */
        === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.o(r) > 0);
      }, t.prototype.Z_ = function (t, e) {
        return c() <= r.LogLevel.DEBUG && h("IndexFreeQueryEngine", "Using full collection scan to execute query:", un(e)), this.X_._s(t, e, P.min());
      }, t;
    }(),
        Qo =
    /** @class */
    function () {
      function t(t, e) {
        this.ss = t, this.wi = e,
        /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
        this.ns = [],
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.ef = 1,
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.nf = new tt(ai.na);
      }

      return t.prototype.Jr = function (t) {
        return Tn.resolve(0 === this.ns.length);
      }, t.prototype.Xr = function (t, e, n, r) {
        var i = this.ef;
        this.ef++, this.ns.length > 0 && this.ns[this.ns.length - 1];
        var o = new En(i, e, n, r);
        this.ns.push(o); // Track references by document key and index collection parents.

        for (var s = 0, u = r; s < u.length; s++) {
          var a = u[s];
          this.nf = this.nf.add(new ai(a.key, i)), this.ss.Us(t, a.key.path.p());
        }

        return Tn.resolve(o);
      }, t.prototype.Zr = function (t, e) {
        return Tn.resolve(this.sf(e));
      }, t.prototype.eo = function (t, e) {
        var n = e + 1,
            r = this["if"](n),
            i = r < 0 ? 0 : r; // The requested batchId may still be out of range so normalize it to the
        // start of the queue.

        return Tn.resolve(this.ns.length > i ? this.ns[i] : null);
      }, t.prototype.no = function () {
        return Tn.resolve(0 === this.ns.length ? -1 : this.ef - 1);
      }, t.prototype.so = function (t) {
        return Tn.resolve(this.ns.slice());
      }, t.prototype.os = function (t, e) {
        var n = this,
            r = new ai(e, 0),
            i = new ai(e, Number.POSITIVE_INFINITY),
            o = [];
        return this.nf.vt([r, i], function (t) {
          var e = n.sf(t.la);
          o.push(e);
        }), Tn.resolve(o);
      }, t.prototype.ls = function (t, e) {
        var n = this,
            r = new tt(m);
        return e.forEach(function (t) {
          var e = new ai(t, 0),
              i = new ai(t, Number.POSITIVE_INFINITY);
          n.nf.vt([e, i], function (t) {
            r = r.add(t.la);
          });
        }), Tn.resolve(this.rf(r));
      }, t.prototype.Es = function (t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var n = e.path,
            r = n.length + 1,
            i = n; // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.

        V.W(i) || (i = i.child(""));
        var o = new ai(new V(i), 0),
            s = new tt(m); // Find unique batchIDs referenced by all documents potentially matching the
        // query.

        return this.nf.St(function (t) {
          var e = t.key.path;
          return !!n.D(e) && ( // Rows with document keys more than one segment longer than the query
          // path can't be matches. For example, a query on 'rooms' can't match
          // the document /rooms/abc/messages/xyx.
          // TODO(mcg): we'll need a different scanner when we implement
          // ancestor queries.
          e.length === r && (s = s.add(t.la)), !0);
        }, o), Tn.resolve(this.rf(s));
      }, t.prototype.rf = function (t) {
        var e = this,
            n = []; // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.

        return t.forEach(function (t) {
          var r = e.sf(t);
          null !== r && n.push(r);
        }), n;
      }, t.prototype.ro = function (t, e) {
        var n = this;
        d(0 === this.hf(e.batchId, "removed")), this.ns.shift();
        var r = this.nf;
        return Tn.forEach(e.mutations, function (i) {
          var o = new ai(i.key, e.batchId);
          return r = r["delete"](o), n.wi.Qr(t, i.key);
        }).next(function () {
          n.nf = r;
        });
      }, t.prototype.oo = function (t) {// No-op since the memory mutation queue does not maintain a separate cache.
      }, t.prototype.Mi = function (t, e) {
        var n = new ai(e, 0),
            r = this.nf.Dt(n);
        return Tn.resolve(e.isEqual(r && r.key));
      }, t.prototype.ho = function (t) {
        return this.ns.length, Tn.resolve();
      },
      /**
       * Finds the index of the given batchId in the mutation queue and asserts that
       * the resulting index is within the bounds of the queue.
       *
       * @param batchId The batchId to search for
       * @param action A description of what the caller is doing, phrased in passive
       * form (e.g. "acknowledged" in a routine that acknowledges batches).
       */
      t.prototype.hf = function (t, e) {
        return this["if"](t);
      },
      /**
       * Finds the index of the given batchId in the mutation queue. This operation
       * is O(1).
       *
       * @return The computed index of the batch with the given batchId, based on
       * the state of the queue. Note this index can be negative if the requested
       * batchId has already been remvoed from the queue or past the end of the
       * queue if the batchId is larger than the last added batch.
       */
      t.prototype["if"] = function (t) {
        return 0 === this.ns.length ? 0 : t - this.ns[0].batchId; // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
      },
      /**
       * A version of lookupMutationBatch that doesn't return a promise, this makes
       * other functions that uses this code easier to read and more efficent.
       */
      t.prototype.sf = function (t) {
        var e = this["if"](t);
        return e < 0 || e >= this.ns.length ? null : this.ns[e];
      }, t;
    }(),
        Yo =
    /** @class */
    function () {
      /**
       * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
       * return 0 to avoid unnecessarily doing the work of calculating the size.
       */
      function t(t, e) {
        this.ss = t, this.af = e,
        /** Underlying cache of documents and their read times. */
        this.docs = new $(V.P),
        /** Size of all cached documents. */
        this.size = 0
        /**
        * Adds the supplied entry to the cache and updates the cache size as appropriate.
        *
        * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
        * returned by `newChangeBuffer()`.
        */
        ;
      }

      return t.prototype.jn = function (t, e, n) {
        var r = e.key,
            i = this.docs.get(r),
            o = i ? i.size : 0,
            s = this.af(e);
        return this.docs = this.docs.nt(r, {
          Ys: e,
          size: s,
          readTime: n
        }), this.size += s - o, this.ss.Us(t, r.path.p());
      },
      /**
       * Removes the specified entry from the cache and updates the cache size as appropriate.
       *
       * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
       * returned by `newChangeBuffer()`.
       */
      t.prototype.Gn = function (t) {
        var e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
      }, t.prototype.zn = function (t, e) {
        var n = this.docs.get(e);
        return Tn.resolve(n ? n.Ys : null);
      }, t.prototype.getEntries = function (t, e) {
        var n = this,
            r = it();
        return e.forEach(function (t) {
          var e = n.docs.get(t);
          r = r.nt(t, e ? e.Ys : null);
        }), Tn.resolve(r);
      }, t.prototype._s = function (t, e, n) {
        for (var r = st(), i = new V(e.path.child("")), o = this.docs.ut(i) // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; o.wt();) {
          var s = o.dt(),
              u = s.key,
              a = s.value,
              c = a.Ys,
              h = a.readTime;
          if (!e.path.D(u.path)) break;
          h.o(n) <= 0 || c instanceof tn && an(e, c) && (r = r.nt(c.key, c));
        }

        return Tn.resolve(r);
      }, t.prototype.uf = function (t, e) {
        return Tn.forEach(this.docs, function (t) {
          return e(t);
        });
      }, t.prototype.oi = function (e) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new t.hi(this);
      }, t.prototype.ui = function (t) {
        return Tn.resolve(this.size);
      }, t;
    }();
    /**
     * Holds the state of a query target, including its target ID and whether the
     * target is 'not-current', 'current' or 'rejected'.
     */
    // Visible for testing

    /**
     * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
     */


    Yo.hi =
    /** @class */
    function (t) {
      function n(e) {
        var n = this;
        return (n = t.call(this) || this).ci = e, n;
      }

      return e.__extends(n, t), n.prototype.Jn = function (t) {
        var e = this,
            n = [];
        return this.Un.forEach(function (r, i) {
          i ? n.push(e.ci.jn(t, i, e.readTime)) : e.ci.Gn(r);
        }), Tn.Bn(n);
      }, n.prototype.Hn = function (t, e) {
        return this.ci.zn(t, e);
      }, n.prototype.Yn = function (t, e) {
        return this.ci.getEntries(t, e);
      }, n;
    }(An);
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var Ko =
    /** @class */
    function () {
      function t(t) {
        this.persistence = t,
        /**
             * Maps a target to the data about that target
             */
        this.cf = new A(function (t) {
          return q(t);
        }, B),
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = P.min(),
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0,
        /** The highest sequence number encountered. */
        this.lf = 0,
        /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
        this._f = new ui(), this.targetCount = 0, this.ff = rr.fi();
      }

      return t.prototype.pe = function (t, e) {
        return this.cf.forEach(function (t, n) {
          return e(n);
        }), Tn.resolve();
      }, t.prototype.mi = function (t) {
        return Tn.resolve(this.lastRemoteSnapshotVersion);
      }, t.prototype.Ai = function (t) {
        return Tn.resolve(this.lf);
      }, t.prototype.Ti = function (t) {
        return this.highestTargetId = this.ff.next(), Tn.resolve(this.highestTargetId);
      }, t.prototype.Ri = function (t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.lf && (this.lf = e), Tn.resolve();
      }, t.prototype.Vi = function (t) {
        this.cf.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.ff = new rr(e), this.highestTargetId = e), t.sequenceNumber > this.lf && (this.lf = t.sequenceNumber);
      }, t.prototype.Pi = function (t, e) {
        return this.Vi(e), this.targetCount += 1, Tn.resolve();
      }, t.prototype.yi = function (t, e) {
        return this.Vi(e), Tn.resolve();
      }, t.prototype.pi = function (t, e) {
        return this.cf["delete"](e.target), this._f.aa(e.targetId), this.targetCount -= 1, Tn.resolve();
      }, t.prototype.vi = function (t, e, n) {
        var r = this,
            i = 0,
            o = [];
        return this.cf.forEach(function (s, u) {
          u.sequenceNumber <= e && null === n.get(u.targetId) && (r.cf["delete"](s), o.push(r.bi(t, u.targetId)), i++);
        }), Tn.Bn(o).next(function () {
          return i;
        });
      }, t.prototype.Si = function (t) {
        return Tn.resolve(this.targetCount);
      }, t.prototype.Di = function (t, e) {
        var n = this.cf.get(e) || null;
        return Tn.resolve(n);
      }, t.prototype.Ci = function (t, e, n) {
        return this._f.ra(e, n), Tn.resolve();
      }, t.prototype.Ni = function (t, e, n) {
        this._f.ha(e, n);

        var r = this.persistence.wi,
            i = [];
        return r && e.forEach(function (e) {
          i.push(r.Qr(t, e));
        }), Tn.Bn(i);
      }, t.prototype.bi = function (t, e) {
        return this._f.aa(e), Tn.resolve();
      }, t.prototype.ki = function (t, e) {
        var n = this._f.ca(e);

        return Tn.resolve(n);
      }, t.prototype.Mi = function (t, e) {
        return Tn.resolve(this._f.Mi(e));
      }, t;
    }(),
        Xo =
    /** @class */
    function () {
      /**
       * The constructor accepts a factory for creating a reference delegate. This
       * allows both the delegate and this instance to have strong references to
       * each other without having nullable fields that would then need to be
       * checked or asserted on every access.
       */
      function t(t) {
        var e = this;
        this.df = {}, this.Ui = new kn(0), this.Qi = !1, this.Qi = !0, this.wi = t(this), this.Xi = new Ko(this), this.ss = new Fn(), this.es = new Yo(this.ss, function (t) {
          return e.wi.wf(t);
        });
      }

      return t.prototype.start = function () {
        return Promise.resolve();
      }, t.prototype.yr = function () {
        // No durable state to ensure is closed on shutdown.
        return this.Qi = !1, Promise.resolve();
      }, Object.defineProperty(t.prototype, "hr", {
        get: function get() {
          return this.Qi;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.ar = function () {// No op.
      }, t.prototype.kr = function () {
        return this.ss;
      }, t.prototype.Cr = function (t) {
        var e = this.df[t.Ma()];
        return e || (e = new Qo(this.ss, this.wi), this.df[t.Ma()] = e), e;
      }, t.prototype.Nr = function () {
        return this.Xi;
      }, t.prototype.$r = function () {
        return this.es;
      }, t.prototype.runTransaction = function (t, e, n) {
        var r = this;
        h("MemoryPersistence", "Starting transaction:", t);
        var i = new Ho(this.Ui.next());
        return this.wi.Tf(), n(i).next(function (t) {
          return r.wi.Ef(i).next(function () {
            return t;
          });
        }).On().then(function (t) {
          return i.ts(), t;
        });
      }, t.prototype.If = function (t, e) {
        return Tn.qn(Object.values(this.df).map(function (n) {
          return function () {
            return n.Mi(t, e);
          };
        }));
      }, t;
    }(),
        Ho =
    /** @class */
    function (t) {
      function n(e) {
        var n = this;
        return (n = t.call(this) || this).Li = e, n;
      }

      return e.__extends(n, t), n;
    }(Dn),
        $o =
    /** @class */
    function () {
      function t(t) {
        this.persistence = t,
        /** Tracks all documents that are active in Query views. */
        this.mf = new ui(),
        /** The list of documents that are potentially GCed after each transaction. */
        this.Af = null;
      }

      return t.Rf = function (e) {
        return new t(e);
      }, Object.defineProperty(t.prototype, "Pf", {
        get: function get() {
          if (this.Af) return this.Af;
          throw p();
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.Fi = function (t, e, n) {
        return this.mf.Fi(n, e), this.Pf["delete"](n), Tn.resolve();
      }, t.prototype.$i = function (t, e, n) {
        return this.mf.$i(n, e), this.Pf.add(n), Tn.resolve();
      }, t.prototype.Qr = function (t, e) {
        return this.Pf.add(e), Tn.resolve();
      }, t.prototype.removeTarget = function (t, e) {
        var n = this;
        this.mf.aa(e.targetId).forEach(function (t) {
          return n.Pf.add(t);
        });
        var r = this.persistence.Nr();
        return r.ki(t, e.targetId).next(function (t) {
          t.forEach(function (t) {
            return n.Pf.add(t);
          });
        }).next(function () {
          return r.pi(t, e);
        });
      }, t.prototype.Tf = function () {
        this.Af = new Set();
      }, t.prototype.Ef = function (t) {
        var e = this,
            n = this.persistence.$r().oi(); // Remove newly orphaned documents.

        return Tn.forEach(this.Pf, function (r) {
          return e.Vf(t, r).next(function (t) {
            t || n.Gn(r);
          });
        }).next(function () {
          return e.Af = null, n.apply(t);
        });
      }, t.prototype.Gr = function (t, e) {
        var n = this;
        return this.Vf(t, e).next(function (t) {
          t ? n.Pf["delete"](e) : n.Pf.add(e);
        });
      }, t.prototype.wf = function (t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
      }, t.prototype.Vf = function (t, e) {
        var n = this;
        return Tn.qn([function () {
          return Tn.resolve(n.mf.Mi(e));
        }, function () {
          return n.persistence.Nr().Mi(t, e);
        }, function () {
          return n.persistence.If(t, e);
        }]);
      }, t;
    }(),
        Jo =
    /** @class */
    function () {
      function t(t) {
        this.gf = t.gf, this.yf = t.yf;
      }

      return t.prototype.Eu = function (t) {
        this.pf = t;
      }, t.prototype._u = function (t) {
        this.bf = t;
      }, t.prototype.onMessage = function (t) {
        this.vf = t;
      }, t.prototype.close = function () {
        this.yf();
      }, t.prototype.send = function (t) {
        this.gf(t);
      }, t.prototype.Sf = function () {
        this.pf();
      }, t.prototype.Df = function (t) {
        this.bf(t);
      }, t.prototype.Cf = function (t) {
        this.vf(t);
      }, t;
    }(),
        Zo = {
      BatchGetDocuments: "batchGet",
      Commit: "commit"
    },
        ts = "gl-js/ fire/" + u,
        es =
    /** @class */
    function () {
      function t(t) {
        this.s = t.s;
        var e = t.ssl ? "https" : "http";
        this.Ff = e + "://" + t.host, this.forceLongPolling = t.forceLongPolling;
      }
      /**
       * Modifies the headers for a request, adding any authorization token if
       * present and any additional headers for the request.
       */


      return t.prototype.Nf = function (t, e) {
        if (e) for (var n in e.Ba) {
          e.Ba.hasOwnProperty(n) && (t[n] = e.Ba[n]);
        }
        t["X-Goog-Api-Client"] = ts;
      }, t.prototype.Du = function (t, e, n) {
        var r = this,
            i = this.$f(t);
        return new Promise(function (s, u) {
          var a = new o.XhrIo();
          a.listenOnce(o.EventType.COMPLETE, function () {
            try {
              switch (a.getLastErrorCode()) {
                case o.ErrorCode.NO_ERROR:
                  var e = a.getResponseJson();
                  h("Connection", "XHR received:", JSON.stringify(e)), s(e);
                  break;

                case o.ErrorCode.TIMEOUT:
                  h("Connection", 'RPC "' + t + '" timed out'), u(new D(x.DEADLINE_EXCEEDED, "Request time out"));
                  break;

                case o.ErrorCode.HTTP_ERROR:
                  var n = a.getStatus();

                  if (h("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", a.getResponseText()), n > 0) {
                    var r = a.getResponseJson().error;

                    if (r && r.status && r.message) {
                      var i = function (t) {
                        var e = t.toLowerCase().replace("_", "-");
                        return Object.values(x).indexOf(e) >= 0 ? e : x.UNKNOWN;
                      }(r.status);

                      u(new D(i, r.message));
                    } else u(new D(x.UNKNOWN, "Server responded with status " + a.getStatus()));
                  } else // If we received an HTTP_ERROR but there's no status code,
                    // it's most probably a connection issue
                    h("Connection", 'RPC "' + t + '" failed'), u(new D(x.UNAVAILABLE, "Connection failed."));

                  break;

                default:
                  p();
              }
            } finally {
              h("Connection", 'RPC "' + t + '" completed.');
            }
          }); // The database field is already encoded in URL. Specifying it again in
          // the body is not necessary in production, and will cause duplicate field
          // errors in the Firestore Emulator. Let's remove it.

          var c = Object.assign({}, e);
          delete c.database;
          var f = JSON.stringify(c);
          h("Connection", "XHR sending: ", i + " " + f); // Content-Type: text/plain will avoid preflight requests which might
          // mess with CORS and redirects by proxies. If we add custom headers
          // we will need to change this code to potentially use the
          // $httpOverwrite parameter supported by ESF to avoid
          // triggering preflight requests.

          var l = {
            "Content-Type": "text/plain"
          };
          r.Nf(l, n), a.send(i, "POST", f, l, 15);
        });
      }, t.prototype.Cu = function (t, e, n) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.Du(t, e, n);
      }, t.prototype.Iu = function (t, n) {
        var s = [this.Ff, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
            c = o.createWebChannelTransport(),
            f = {
          // Required for backend stickiness, routing behavior is based on this
          // parameter.
          httpSessionIdParam: "gsessionid",
          initMessageHeaders: {},
          messageUrlParams: {
            // This param is used to improve routing and project isolation by the
            // backend and must be included in every request.
            database: "projects/" + this.s.projectId + "/databases/" + this.s.database
          },
          sendRawJson: !0,
          supportsCrossDomainXhr: !0,
          internalChannelParams: {
            // Override the default timeout (randomized between 10-20 seconds) since
            // a large write batch on a slow internet connection may take a long
            // time to send to the backend. Rather than have WebChannel impose a
            // tight timeout which could lead to infinite timeouts and retries, we
            // set it very large (5-10 minutes) and rely on the browser's builtin
            // timeouts to kick in if the request isn't working.
            forwardChannelRequestTimeoutMs: 6e5
          },
          forceLongPolling: this.forceLongPolling
        };
        this.Nf(f.initMessageHeaders, n), // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        i.isMobileCordova() || i.isReactNative() || i.isElectron() || i.isIE() || i.isUWP() || i.isBrowserExtension() || (f.httpHeadersOverwriteParam = "$httpHeaders");
        var p = s.join("");
        h("Connection", "Creating WebChannel: " + p + " " + f);

        var y = c.createWebChannel(p, f),
            v = !1,
            g = !1,
            m = new Jo({
          gf: function gf(t) {
            g ? h("Connection", "Not sending because WebChannel is closed:", t) : (v || (h("Connection", "Opening WebChannel transport."), y.open(), v = !0), h("Connection", "WebChannel sending:", t), y.send(t));
          },
          yf: function yf() {
            return y.close();
          }
        }),
            w = function w(t, e) {
          // TODO(dimond): closure typing seems broken because WebChannel does
          // not implement goog.events.Listenable
          y.listen(t, function (t) {
            try {
              e(t);
            } catch (t) {
              setTimeout(function () {
                throw t;
              }, 0);
            }
          });
        }; // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
        // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.


        return w(o.WebChannel.EventType.OPEN, function () {
          g || h("Connection", "WebChannel transport opened.");
        }), w(o.WebChannel.EventType.CLOSE, function () {
          g || (g = !0, h("Connection", "WebChannel transport closed"), m.Df());
        }), w(o.WebChannel.EventType.ERROR, function (t) {
          g || (g = !0, function (t) {
            for (var n = [], i = 1; i < arguments.length; i++) {
              n[i - 1] = arguments[i];
            }

            if (a.logLevel <= r.LogLevel.WARN) {
              var o = n.map(l);
              a.warn.apply(a, e.__spreadArrays(["Firestore (" + u + "): " + t], o));
            }
          }("Connection", "WebChannel transport errored:", t), m.Df(new D(x.UNAVAILABLE, "The operation could not be completed")));
        }), w(o.WebChannel.EventType.MESSAGE, function (t) {
          var e;

          if (!g) {
            var n = t.data[0];
            d(!!n); // TODO(b/35143891): There is a bug in One Platform that caused errors
            // (and only errors) to be wrapped in an extra array. To be forward
            // compatible with the bug we need to check either condition. The latter
            // can be removed once the fix has been rolled out.
            // Use any because msgData.error is not typed.

            var r = n,
                i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);

            if (i) {
              h("Connection", "WebChannel received error:", i); // error.status will be a string like 'OK' or 'NOT_FOUND'.

              var o = i.status,
                  s = function (t) {
                // lookup by string
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var e = W[t];
                if (void 0 !== e) return H(e);
              }(o),
                  u = i.message;

              void 0 === s && (s = x.INTERNAL, u = "Unknown error status: " + o + " with message " + i.message), // Mark closed so no further events are propagated
              g = !0, m.Df(new D(s, u)), y.close();
            } else h("Connection", "WebChannel received:", n), m.Cf(n);
          }
        }), setTimeout(function () {
          // Technically we could/should wait for the WebChannel opened event,
          // but because we want to send the first message with the WebChannel
          // handshake we pretend the channel opened here (asynchronously), and
          // then delay the actual open until the first message is sent.
          m.Sf();
        }, 0), m;
      }, // visible for testing
      t.prototype.$f = function (t) {
        var e = Zo[t];
        return this.Ff + "/v1/projects/" + this.s.projectId + "/databases/" + this.s.database + "/documents:" + e;
      }, t;
    }(),
        ns =
    /** @class */
    function () {
      function t() {
        var t = this;
        this.kf = function () {
          return t.xf();
        }, this.Mf = function () {
          return t.Of();
        }, this.Lf = [], this.Bf();
      }

      return t.prototype.nc = function (t) {
        this.Lf.push(t);
      }, t.prototype.yr = function () {
        window.removeEventListener("online", this.kf), window.removeEventListener("offline", this.Mf);
      }, t.prototype.Bf = function () {
        window.addEventListener("online", this.kf), window.addEventListener("offline", this.Mf);
      }, t.prototype.xf = function () {
        h("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");

        for (var t = 0, e = this.Lf; t < e.length; t++) {
          (0, e[t])(0
          /* AVAILABLE */
          );
        }
      }, t.prototype.Of = function () {
        h("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");

        for (var t = 0, e = this.Lf; t < e.length; t++) {
          (0, e[t])(1
          /* UNAVAILABLE */
          );
        }
      }, // TODO(chenbrian): Consider passing in window either into this component or
      // here for testing via FakeWindow.

      /** Checks that all used attributes of window are available. */
      t.Hi = function () {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
      }, t;
    }(),
        rs =
    /** @class */
    function () {
      function t() {}

      return t.prototype.nc = function (t) {// No-op.
      }, t.prototype.yr = function () {// No-op.
      }, t;
    }(),
        is = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.",
        os =
    /** @class */
    function () {
      function t() {}

      return t.prototype.initialize = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.n_ = this.qf(t), this.persistence = this.Uf(t), [4
                /*yield*/
                , this.persistence.start()];

              case 1:
                return e.sent(), this.Qf = this.Wf(t), this.Yu = this.jf(t), this.e_ = this.Kf(t), this.Vc = this.Gf(t), this.zf = this.Hf(t), this.n_.qu = function (t) {
                  return n.Vc.jl(t, 1
                  /* SharedClientState */
                  );
                }, this.e_.Vc = this.Vc, [4
                /*yield*/
                , this.Yu.start()];

              case 2:
                return e.sent(), [4
                /*yield*/
                , this.n_.start()];

              case 3:
                return e.sent(), [4
                /*yield*/
                , this.e_.start()];

              case 4:
                return e.sent(), [4
                /*yield*/
                , this.e_.Lc(this.Vc.d_)];

              case 5:
                return e.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.Hf = function (t) {
        return new Go(this.Vc);
      }, t.prototype.Wf = function (t) {
        return null;
      }, t.prototype.jf = function (t) {
        /** Manages our in-memory or durable persistence. */
        return e = this.persistence, n = new Wo(), r = t.Yf, new ii(e, n, r);
        var e, n, r;
      }, t.prototype.Uf = function (t) {
        if (t.Xf.Jf) throw new D(x.FAILED_PRECONDITION, is);
        return new Xo($o.Rf);
      }, t.prototype.Kf = function (t) {
        var e = this;
        return new Eo(this.Yu, t.Fu, t.Ro, function (t) {
          return e.Vc.jl(t, 0
          /* RemoteStore */
          );
        }, ns.Hi() ? new ns() : new rs());
      }, t.prototype.qf = function (t) {
        return new Lo();
      }, t.prototype.Gf = function (t) {
        return e = this.Yu, n = this.e_, r = t.Fu, // PORTING NOTE: Manages state synchronization in multi-tab environments.
        i = this.n_, o = t.Yf, s = t.s_, new Mo(e, n, r, i, o, s);
        var e, n, r, i, o, s;
      }, t.prototype.clearPersistence = function (t) {
        throw new D(x.FAILED_PRECONDITION, is);
      }, t;
    }(),
        ss =
    /** @class */
    function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return e.__extends(n, t), n.prototype.initialize = function (n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var r = this;
          return e.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return [4
                /*yield*/
                , t.prototype.initialize.call(this, n)];

              case 1:
                // NOTE: This will immediately call the listener, so we make sure to
                // set it after localStore / remoteStore are started.
                return i.sent(), [4
                /*yield*/
                , this.persistence.or(function (t) {
                  return e.__awaiter(r, void 0, void 0, function () {
                    return e.__generator(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4
                          /*yield*/
                          , this.Vc.Lc(t)];

                        case 1:
                          return e.sent(), this.Qf && (t && !this.Qf.hr ? this.Qf.start(this.Yu) : t || this.Qf.stop()), [2
                          /*return*/
                          ];
                      }
                    });
                  });
                })];

              case 2:
                // NOTE: This will immediately call the listener, so we make sure to
                // set it after localStore / remoteStore are started.
                return i.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }, n.prototype.jf = function (t) {
        /** Manages our in-memory or durable persistence. */
        return e = this.persistence, n = new Wo(), r = t.Yf, new oi(e, n, r);
        var e, n, r;
      }, n.prototype.Gf = function (t) {
        var e,
            n,
            r,
            i,
            o,
            s,
            u = (e = this.Yu, n = this.e_, r = t.Fu, i = this.n_, o = t.Yf, s = t.s_, new qo(e, n, r, i, o, s));
        return this.n_ instanceof Ro && (this.n_.Vc = u), u;
      }, n.prototype.Wf = function (t) {
        var e = this.persistence.wi.Or;
        return new ni(e, t.Ro);
      }, n.prototype.Uf = function (t) {
        var e = hr.Mr(t.Zf),
            n = zi(t.Zf.s);
        return new hr(t.Xf.synchronizeTabs, e, t.clientId, ei.ah(t.Xf.cacheSizeBytes), t.Ro, Kr(), "undefined" != typeof document ? document : null, n, this.n_, t.Xf.qi);
      }, n.prototype.qf = function (t) {
        if (t.Xf.Jf && t.Xf.synchronizeTabs) {
          var e = Kr();
          if (!Ro.Hi(e)) throw new D(x.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
          var n = hr.Mr(t.Zf);
          return new Ro(e, t.Ro, n, t.clientId, t.Yf);
        }

        return new Lo();
      }, n.prototype.clearPersistence = function (t) {
        var e = hr.Mr(t);
        return hr.clearPersistence(e);
      }, n;
    }(os),
        us =
    /** @class */
    function () {
      function t(t,
      /**
       * Asynchronous queue responsible for all of our internal processing. When
       * we get incoming work from the user (via public API) or the network
       * (incoming GRPC messages), we should always schedule onto this queue.
       * This ensures all of our work is properly serialized (e.g. we don't
       * start processing a new operation while the previous one is waiting for
       * an async I/O to complete).
       */
      e) {
        this.credentials = t, this.Ro = e, this.clientId = g.t()
        /**
        * Starts up the FirestoreClient, returning only whether or not enabling
        * persistence succeeded.
        *
        * The intent here is to "do the right thing" as far as users are concerned.
        * Namely, in cases where offline persistence is requested and possible,
        * enable it, but otherwise fall back to persistence disabled. For the most
        * part we expect this to succeed one way or the other so we don't expect our
        * users to actually wait on the firestore.enablePersistence Promise since
        * they generally won't care.
        *
        * Of course some users actually do care about whether or not persistence
        * was successfully enabled, so the Promise returned from this method
        * indicates this outcome.
        *
        * This presents a problem though: even before enablePersistence resolves or
        * rejects, users may have made calls to e.g. firestore.collection() which
        * means that the FirestoreClient in there will be available and will be
        * enqueuing actions on the async queue.
        *
        * Meanwhile any failure of an operation on the async queue causes it to
        * panic and reject any further work, on the premise that unhandled errors
        * are fatal.
        *
        * Consequently the fallback is handled internally here in start, and if the
        * fallback succeeds we signal success to the async queue even though the
        * start() itself signals failure.
        *
        * @param databaseInfo The connection information for the current instance.
        * @param componentProvider Provider that returns all core components.
        * @param persistenceSettings Settings object to configure offline
        *     persistence.
        * @returns A deferred result indicating the user-visible result of enabling
        *     offline persistence. This method will reject this if IndexedDB fails to
        *     start for any reason. If usePersistence is false this is
        *     unconditionally resolved.
        */
        ;
      }

      return t.prototype.start = function (t, e, n) {
        var r = this;
        this.Su(), this.Zf = t; // We defer our initialization until we get the current user from
        // setChangeListener(). We block the async queue until we got the initial
        // user and the initialization is completed. This will prevent any scheduled
        // work from happening before initialization is completed.
        // If initializationDone resolved then the FirestoreClient is in a usable
        // state.

        var i = new Rn(),
            o = new Rn(),
            s = !1; // If usePersistence is true, certain classes of errors while starting are
        // recoverable but only by falling back to persistence disabled.
        // If there's an error in the first case but not in recovery we cannot
        // reject the promise blocking the async queue because this will cause the
        // async queue to panic.
        // Return only the result of enabling persistence. Note that this does not
        // need to await the completion of initializationDone because the result of
        // this method should not reflect any other kind of failure to start.

        return this.credentials.Qa(function (t) {
          if (!s) return s = !0, h("FirestoreClient", "Initializing. user=", t.uid), r.td(e, n, t, o).then(i.resolve, i.reject);
          r.Ro.dr(function () {
            return r.e_.Oc(t);
          });
        }), // Block the async queue until initialization is done
        this.Ro.lr(function () {
          return i.promise;
        }), o.promise;
      },
      /** Enables the network connection and requeues all pending operations. */
      t.prototype.enableNetwork = function () {
        var t = this;
        return this.Su(), this.Ro.enqueue(function () {
          return t.Vc.enableNetwork();
        });
      },
      /**
       * Initializes persistent storage, attempting to use IndexedDB if
       * usePersistence is true or memory-only if false.
       *
       * If IndexedDB fails because it's already open in another tab or because the
       * platform can't possibly support our implementation then this method rejects
       * the persistenceResult and falls back on memory-only persistence.
       *
       * @param componentProvider The provider that provides all core componennts
       *     for IndexedDB or memory-backed persistence
       * @param persistenceSettings Settings object to configure offline persistence
       * @param user The initial user
       * @param persistenceResult A deferred result indicating the user-visible
       *     result of enabling offline persistence. This method will reject this if
       *     IndexedDB fails to start for any reason. If usePersistence is false
       *     this is unconditionally resolved.
       * @returns a Promise indicating whether or not initialization should
       *     continue, i.e. that one of the persistence implementations actually
       *     succeeded.
       */
      t.prototype.td = function (t, n, r, i) {
        return e.__awaiter(this, void 0, void 0, function () {
          var o,
              s,
              u,
              a,
              c,
              h = this;
          return e.__generator(this, function (f) {
            switch (f.label) {
              case 0:
                return f.trys.push([0, 3,, 4]), [4
                /*yield*/
                , (c = this.Zf, Promise.resolve(new es(c)))];

              case 1:
                return o = f.sent(), s = zi(this.Zf.s), u = function (t, e, n) {
                  return new bo(t, e, n);
                }(o, this.credentials, s), [4
                /*yield*/
                , t.initialize({
                  Ro: this.Ro,
                  Zf: this.Zf,
                  Fu: u,
                  clientId: this.clientId,
                  Yf: r,
                  s_: 100,
                  Xf: n
                })];

              case 2:
                return f.sent(), this.persistence = t.persistence, this.n_ = t.n_, this.Yu = t.Yu, this.e_ = t.e_, this.Vc = t.Vc, this.Qf = t.Qf, this.ed = t.zf, // When a user calls clearPersistence() in one client, all other clients
                // need to be terminated to allow the delete to succeed.
                this.persistence.ar(function () {
                  return e.__awaiter(h, void 0, void 0, function () {
                    return e.__generator(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4
                          /*yield*/
                          , this.terminate()];

                        case 1:
                          return t.sent(), [2
                          /*return*/
                          ];
                      }
                    });
                  });
                }), i.resolve(), [3
                /*break*/
                , 4];

              case 3:
                // An unknown failure on the first stage shuts everything down.
                if (a = f.sent(), // Regardless of whether or not the retry succeeds, from an user
                // perspective, offline persistence has failed.
                i.reject(a), !this.nd(a)) throw a;
                return [2
                /*return*/
                , (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + a), this.td(new os(), {
                  Jf: !1
                }, r, i))];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Decides whether the provided error allows us to gracefully disable
       * persistence (as opposed to crashing the client).
       */
      t.prototype.nd = function (t) {
        return "FirebaseError" === t.name ? t.code === x.FAILED_PRECONDITION || t.code === x.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || // When the browser is out of quota we could get either quota exceeded
        // or an aborted error depending on whether the error happened during
        // schema migration.
        22 === t.code || 20 === t.code || // Firefox Private Browsing mode disables IndexedDb and returns
        // INVALID_STATE for any usage.
        11 === t.code;
      },
      /**
       * Checks that the client has not been terminated. Ensures that other methods on
       * this class cannot be called after the client is terminated.
       */
      t.prototype.Su = function () {
        if (this.Ro.Oo) throw new D(x.FAILED_PRECONDITION, "The client has already been terminated.");
      },
      /** Disables the network connection. Pending operations will not complete. */
      t.prototype.disableNetwork = function () {
        var t = this;
        return this.Su(), this.Ro.enqueue(function () {
          return t.Vc.disableNetwork();
        });
      }, t.prototype.terminate = function () {
        var t = this;
        return this.Ro.Qo(function () {
          return e.__awaiter(t, void 0, void 0, function () {
            return e.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                  return this.Qf && this.Qf.stop(), [4
                  /*yield*/
                  , this.e_.yr()];

                case 1:
                  return t.sent(), [4
                  /*yield*/
                  , this.n_.yr()];

                case 2:
                  return t.sent(), [4
                  /*yield*/
                  , this.persistence.yr()];

                case 3:
                  // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                  return t.sent(), // `removeChangeListener` must be called after shutting down the
                  // RemoteStore as it will prevent the RemoteStore from retrieving
                  // auth tokens.
                  this.credentials.Wa(), [2
                  /*return*/
                  ];
              }
            });
          });
        });
      },
      /**
       * Returns a Promise that resolves when all writes that were pending at the time this
       * method was called received server acknowledgement. An acknowledgement can be either acceptance
       * or rejection.
       */
      t.prototype.waitForPendingWrites = function () {
        var t = this;
        this.Su();
        var e = new Rn();
        return this.Ro.lr(function () {
          return t.Vc.y_(e);
        }), e.promise;
      }, t.prototype.listen = function (t, e, n) {
        var r = this;
        this.Su();
        var i = new zo(t, e, n);
        return this.Ro.lr(function () {
          return r.ed.listen(i);
        }), i;
      }, t.prototype.Rc = function (t) {
        var e = this; // Checks for termination but does not raise error, allowing unlisten after
        // termination to be a no-op.

        this.sd || this.Ro.lr(function () {
          return e.ed.Rc(t);
        });
      }, t.prototype.rd = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r = this;
          return e.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return this.Su(), n = new Rn(), [4
                /*yield*/
                , this.Ro.enqueue(function () {
                  return e.__awaiter(r, void 0, void 0, function () {
                    var r, i, o;
                    return e.__generator(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return e.trys.push([0, 2,, 3]), [4
                          /*yield*/
                          , this.Yu.Kh(t)];

                        case 1:
                          return (r = e.sent()) instanceof tn ? n.resolve(r) : r instanceof en ? n.resolve(null) : n.reject(new D(x.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), [3
                          /*break*/
                          , 3];

                        case 2:
                          return i = e.sent(), o = $r(i, "Failed to get document '" + t + " from cache"), n.reject(o), [3
                          /*break*/
                          , 3];

                        case 3:
                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                })];

              case 1:
                return [2
                /*return*/
                , (i.sent(), n.promise)];
            }
          });
        });
      }, t.prototype.od = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r = this;
          return e.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return this.Su(), n = new Rn(), [4
                /*yield*/
                , this.Ro.enqueue(function () {
                  return e.__awaiter(r, void 0, void 0, function () {
                    var r, i, o, s, u, a;
                    return e.__generator(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return e.trys.push([0, 2,, 3]), [4
                          /*yield*/
                          , this.Yu.Hh(t,
                          /* usePreviousResults= */
                          !0)];

                        case 1:
                          return r = e.sent(), i = new Uo(t, r.Yh), o = i.Ol(r.documents), s = i.Jn(o,
                          /* updateLimboDocuments= */
                          !1), n.resolve(s.snapshot), [3
                          /*break*/
                          , 3];

                        case 2:
                          return u = e.sent(), a = $r(u, "Failed to execute query '" + t + " against cache"), n.reject(a), [3
                          /*break*/
                          , 3];

                        case 3:
                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                })];

              case 1:
                return [2
                /*return*/
                , (i.sent(), n.promise)];
            }
          });
        });
      }, t.prototype.write = function (t) {
        var e = this;
        this.Su();
        var n = new Rn();
        return this.Ro.lr(function () {
          return e.Vc.write(t, n);
        }), n.promise;
      }, t.prototype.s = function () {
        return this.Zf.s;
      }, t.prototype.Q_ = function (t) {
        var e = this;
        this.Su(), this.Ro.lr(function () {
          return e.ed.Q_(t), Promise.resolve();
        });
      }, t.prototype.W_ = function (t) {
        var e = this; // Checks for shutdown but does not raise error, allowing remove after
        // shutdown to be a no-op.

        this.sd || this.Ro.lr(function () {
          return e.ed.W_(t), Promise.resolve();
        });
      }, Object.defineProperty(t.prototype, "sd", {
        get: function get() {
          // Technically, the asyncQueue is still running, but only accepting operations
          // related to termination or supposed to be run after termination. It is effectively
          // terminated to the eyes of users.
          return this.Ro.Oo;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.transaction = function (t) {
        var e = this;
        this.Su();
        var n = new Rn();
        return this.Ro.lr(function () {
          return e.Vc.runTransaction(e.Ro, t, n), Promise.resolve();
        }), n.promise;
      }, t;
    }(),
        as =
    /** @class */
    function () {
      function t(t) {
        this.observer = t,
        /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
        this.muted = !1;
      }

      return t.prototype.next = function (t) {
        this.hd(this.observer.next, t);
      }, t.prototype.error = function (t) {
        this.hd(this.observer.error, t);
      }, t.prototype.ad = function () {
        this.muted = !0;
      }, t.prototype.hd = function (t, e) {
        var n = this;
        this.muted || setTimeout(function () {
          n.muted || t(e);
        }, 0);
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * A memory-backed instance of Persistence. Data is stored only in RAM and
     * not persisted across sessions.
     */

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    function cs(t) {
      /**
      * Returns true if obj is an object and contains at least one of the specified
      * methods.
      */
      return function (t, e) {
        if ("object" != typeof t || null === t) return !1;

        for (var n = t, r = 0, i = ["next", "error", "complete"]; r < i.length; r++) {
          var o = i[r];
          if (o in n && "function" == typeof n[o]) return !0;
        }

        return !1;
      }(t);
    }

    var hs =
    /** @class */
    function () {
      function t(t, e, n, r) {
        this.s = t, this.timestampsInSnapshots = e, this.ud = n, this.ld = r;
      }

      return t.prototype._d = function (t) {
        switch (xt(t)) {
          case 0
          /* NullValue */
          :
            return null;

          case 1
          /* BooleanValue */
          :
            return t.booleanValue;

          case 2
          /* NumberValue */
          :
            return Ot(t.integerValue || t.doubleValue);

          case 3
          /* TimestampValue */
          :
            return this.fd(t.timestampValue);

          case 4
          /* ServerTimestampValue */
          :
            return this.dd(t);

          case 5
          /* StringValue */
          :
            return t.stringValue;

          case 6
          /* BlobValue */
          :
            return new Pi(Vt(t.bytesValue));

          case 7
          /* RefValue */
          :
            return this.wd(t.referenceValue);

          case 8
          /* GeoPointValue */
          :
            return this.Td(t.geoPointValue);

          case 9
          /* ArrayValue */
          :
            return this.Ed(t.arrayValue);

          case 10
          /* ObjectValue */
          :
            return this.Id(t.mapValue);

          default:
            throw p();
        }
      }, t.prototype.Id = function (t) {
        var e = this,
            n = {};
        return N(t.fields || {}, function (t, r) {
          n[t] = e._d(r);
        }), n;
      }, t.prototype.Td = function (t) {
        return new Gi(Ot(t.latitude), Ot(t.longitude));
      }, t.prototype.Ed = function (t) {
        var e = this;
        return (t.values || []).map(function (t) {
          return e._d(t);
        });
      }, t.prototype.dd = function (t) {
        switch (this.ud) {
          case "previous":
            var e = function t(e) {
              var n = e.mapValue.fields.__previous_value__;
              return Nt(n) ? t(n) : n;
            }(t);

            return null == e ? null : this._d(e);

          case "estimate":
            return this.fd(Tt(t));

          default:
            return null;
        }
      }, t.prototype.fd = function (t) {
        var e = Lt(t),
            n = new S(e.seconds, e.nanos);
        return this.timestampsInSnapshots ? n : n.toDate();
      }, t.prototype.wd = function (t) {
        var e = R.$(t);
        d(me(e));
        var n = new I(e.get(1), e.get(3)),
            r = new V(e.g(5));
        return n.isEqual(this.s) || // TODO(b/64130202): Somehow support foreign references.
        f("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this.s.projectId + "/" + this.s.database + ") instead."), this.ld(r);
      }, t;
    }(),
        fs = ei._h,
        ls =
    /** @class */
    function () {
      function t(t) {
        var e, n, r, i;

        if (void 0 === t.host) {
          if (void 0 !== t.ssl) throw new D(x.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
          this.host = "firestore.googleapis.com", this.ssl = !0;
        } else yi("settings", "non-empty string", "host", t.host), this.host = t.host, vi("settings", "boolean", "ssl", t.ssl), this.ssl = null === (e = t.ssl) || void 0 === e || e;

        if (Ei("settings", t, ["host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling", "ignoreUndefinedProperties"]), vi("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, vi("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), vi("settings", "boolean", "ignoreUndefinedProperties", t.ignoreUndefinedProperties), // Nobody should set timestampsInSnapshots anymore, but the error depends on
        // whether they set it to true or false...
        !0 === t.timestampsInSnapshots ? f("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : !1 === t.timestampsInSnapshots && f("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n, this.ignoreUndefinedProperties = null !== (r = t.ignoreUndefinedProperties) && void 0 !== r && r, vi("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = ei.dh;else {
          if (t.cacheSizeBytes !== fs && t.cacheSizeBytes < ei.fh) throw new D(x.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + ei.fh);
          this.cacheSizeBytes = t.cacheSizeBytes;
        }
        vi("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), this.forceLongPolling = null !== (i = t.experimentalForceLongPolling) && void 0 !== i && i;
      }

      return t.prototype.isEqual = function (t) {
        return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.forceLongPolling === t.forceLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
      }, t;
    }(),
        ps =
    /** @class */
    function () {
      // Note: We are using `MemoryComponentProvider` as a default
      // ComponentProvider to ensure backwards compatibility with the format
      // expected by the console build.
      function t(n, r, i) {
        var o = this;

        if (void 0 === i && (i = new os()), this.md = null, // Public for use in tests.
        // TODO(mikelehen): Use modularized initialization instead.
        this.Ad = new Hr(), this.INTERNAL = {
          "delete": function _delete() {
            return e.__awaiter(o, void 0, void 0, function () {
              return e.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    // The client must be initalized to ensure that all subsequent API usage
                    // throws an exception.
                    return this.Rd(), [4
                    /*yield*/
                    , this.Pd.terminate()];

                  case 1:
                    // The client must be initalized to ensure that all subsequent API usage
                    // throws an exception.
                    return t.sent(), [2
                    /*return*/
                    ];
                }
              });
            });
          }
        }, "object" == typeof n.options) {
          // This is very likely a Firebase app object
          // TODO(b/34177605): Can we somehow use instanceof?
          var s = n;
          this.md = s, this.ya = t.Vd(s), this.gd = s.name, this.yd = new po(r);
        } else {
          var u = n;
          if (!u.projectId) throw new D(x.INVALID_ARGUMENT, "Must provide projectId");
          this.ya = new I(u.projectId, u.database), // Use a default persistenceKey that lines up with FirebaseApp.
          this.gd = "[DEFAULT]", this.yd = new lo();
        }

        this.pd = i, this.bd = new ls({});
      }

      return Object.defineProperty(t.prototype, "vd", {
        get: function get() {
          return this.Sd || ( // Lazy initialize UserDataReader once the settings are frozen
          this.Sd = new $i(this.ya, this.bd.ignoreUndefinedProperties)), this.Sd;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.settings = function (t) {
        hi("Firestore.settings", arguments, 1), pi("Firestore.settings", "object", 1, t);
        var e = new ls(t);
        if (this.Pd && !this.bd.isEqual(e)) throw new D(x.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
        this.bd = e, void 0 !== e.credentials && (this.yd = function (t) {
          if (!t) return new lo();

          switch (t.type) {
            case "gapi":
              var e = t.Dd; // Make sure this really is a Gapi client.

              return d(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new vo(e, t.Ya || "0");

            case "provider":
              return t.Dd;

            default:
              throw new D(x.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
          }
        }(e.credentials));
      }, t.prototype.enableNetwork = function () {
        return this.Rd(), this.Pd.enableNetwork();
      }, t.prototype.disableNetwork = function () {
        return this.Rd(), this.Pd.disableNetwork();
      }, t.prototype.enablePersistence = function (t) {
        var e, n;
        if (this.Pd) throw new D(x.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
        var r = !1,
            i = !1;
        if (t && (void 0 !== t.experimentalTabSynchronization && f("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), r = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n, i = !!t.experimentalForceOwningTab && t.experimentalForceOwningTab, r && i)) throw new D(x.INVALID_ARGUMENT, "The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.");
        return this.Cd(this.pd, {
          Jf: !0,
          cacheSizeBytes: this.bd.cacheSizeBytes,
          synchronizeTabs: r,
          qi: i
        });
      }, t.prototype.clearPersistence = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t,
              n = this;
          return e.__generator(this, function (r) {
            if (void 0 !== this.Pd && !this.Pd.sd) throw new D(x.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
            return t = new Rn(), [2
            /*return*/
            , (this.Ad.Lo(function () {
              return e.__awaiter(n, void 0, void 0, function () {
                var n, r;
                return e.__generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return e.trys.push([0, 2,, 3]), n = this.Fd(), [4
                      /*yield*/
                      , this.pd.clearPersistence(n)];

                    case 1:
                      return e.sent(), t.resolve(), [3
                      /*break*/
                      , 3];

                    case 2:
                      return r = e.sent(), t.reject(r), [3
                      /*break*/
                      , 3];

                    case 3:
                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            }), t.promise)];
          });
        });
      }, t.prototype.terminate = function () {
        return this.app._removeServiceInstance("firestore"), this.INTERNAL["delete"]();
      }, Object.defineProperty(t.prototype, "Nd", {
        get: function get() {
          return this.Rd(), this.Pd.sd;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.waitForPendingWrites = function () {
        return this.Rd(), this.Pd.waitForPendingWrites();
      }, t.prototype.onSnapshotsInSync = function (t) {
        if (this.Rd(), cs(t)) return ds(this.Pd, t);
        pi("Firestore.onSnapshotsInSync", "function", 1, t);
        var e = {
          next: t
        };
        return ds(this.Pd, e);
      }, t.prototype.Rd = function () {
        return this.Pd || // Kick off starting the client but don't actually wait for it.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Cd(new os(), {
          Jf: !1
        }), this.Pd;
      }, t.prototype.Fd = function () {
        return new _(this.ya, this.gd, this.bd.host, this.bd.ssl, this.bd.forceLongPolling);
      }, t.prototype.Cd = function (t, e) {
        var n = this.Fd();
        return this.Pd = new us(this.yd, this.Ad), this.Pd.start(n, t, e);
      }, t.Vd = function (t) {
        if (e = t.options, "projectId", !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new D(x.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        var e,
            n = t.options.projectId;
        /**
        * @license
        * Copyright 2017 Google LLC
        *
        * Licensed under the Apache License, Version 2.0 (the "License");
        * you may not use this file except in compliance with the License.
        * You may obtain a copy of the License at
        *
        *   http://www.apache.org/licenses/LICENSE-2.0
        *
        * Unless required by applicable law or agreed to in writing, software
        * distributed under the License is distributed on an "AS IS" BASIS,
        * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        * See the License for the specific language governing permissions and
        * limitations under the License.
        */

        if (!n || "string" != typeof n) throw new D(x.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
        return new I(n);
      }, Object.defineProperty(t.prototype, "app", {
        get: function get() {
          if (!this.md) throw new D(x.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
          return this.md;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.collection = function (t) {
        return hi("Firestore.collection", arguments, 1), pi("Firestore.collection", "non-empty string", 1, t), this.Rd(), new As(R.$(t), this,
        /* converter= */
        null);
      }, t.prototype.doc = function (t) {
        return hi("Firestore.doc", arguments, 1), pi("Firestore.doc", "non-empty string", 1, t), this.Rd(), gs.$d(R.$(t), this,
        /* converter= */
        null);
      }, t.prototype.collectionGroup = function (t) {
        if (hi("Firestore.collectionGroup", arguments, 1), pi("Firestore.collectionGroup", "non-empty string", 1, t), t.indexOf("/") >= 0) throw new D(x.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
        return this.Rd(), new Es(new rn(R.k(), t), this,
        /* converter= */
        null);
      }, t.prototype.runTransaction = function (t) {
        var e = this;
        return hi("Firestore.runTransaction", arguments, 1), pi("Firestore.runTransaction", "function", 1, t), this.Rd().transaction(function (n) {
          return t(new ys(e, n));
        });
      }, t.prototype.batch = function () {
        return this.Rd(), new vs(this);
      }, Object.defineProperty(t, "logLevel", {
        get: function get() {
          switch (c()) {
            case r.LogLevel.DEBUG:
              return "debug";

            case r.LogLevel.ERROR:
              return "error";

            case r.LogLevel.SILENT:
              return "silent";

            case r.LogLevel.WARN:
              return "warn";

            case r.LogLevel.INFO:
              return "info";

            case r.LogLevel.VERBOSE:
              return "verbose";

            default:
              // The default log level is error
              return "error";
          }
        },
        enumerable: !1,
        configurable: !0
      }), t.setLogLevel = function (t) {
        var e;
        hi("Firestore.setLogLevel", arguments, 1), mi("setLogLevel", ["debug", "error", "silent", "warn", "info", "verbose"], 1, t), e = t, a.setLogLevel(e);
      }, // Note: this is not a property because the minifier can't work correctly with
      // the way TypeScript compiler outputs properties.
      t.prototype.kd = function () {
        return this.bd.timestampsInSnapshots;
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // settings() defaults:

    /** Registers the listener for onSnapshotsInSync() */


    function ds(t, e) {
      var n = new as({
        next: function next() {
          e.next && e.next();
        },
        error: function error(t) {
          throw p();
        }
      });
      return t.Q_(n), function () {
        n.ad(), t.W_(n);
      }
      /**
      * A reference to a transaction.
      */
      ;
    }

    var ys =
    /** @class */
    function () {
      function t(t, e) {
        this.xd = t, this.Md = e;
      }

      return t.prototype.get = function (t) {
        var e = this;
        hi("Transaction.get", arguments, 1);
        var n = Ps("Transaction.get", t, this.xd);
        return this.Md.Mu([n.pa]).then(function (t) {
          if (!t || 1 !== t.length) return p();
          var r = t[0];
          if (r instanceof en) return new bs(e.xd, n.pa, null,
          /* fromCache= */
          !1,
          /* hasPendingWrites= */
          !1, n.ba);
          if (r instanceof tn) return new bs(e.xd, n.pa, r,
          /* fromCache= */
          !1,
          /* hasPendingWrites= */
          !1, n.ba);
          throw p();
        });
      }, t.prototype.set = function (t, e, n) {
        li("Transaction.set", arguments, 2, 3);
        var r = Ps("Transaction.set", t, this.xd);
        n = xs("Transaction.set", n);
        var i = Rs(r.ba, e, n),
            o = Ji(this.xd.vd, "Transaction.set", r.pa, i, null !== r.ba, n);
        return this.Md.set(r.pa, o), this;
      }, t.prototype.update = function (t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) {
          o[s - 3] = arguments[s];
        }

        return "string" == typeof e || e instanceof Ri ? (fi("Transaction.update", arguments, 3), r = Ps("Transaction.update", t, this.xd), i = to(this.xd.vd, "Transaction.update", r.pa, e, n, o)) : (hi("Transaction.update", arguments, 2), r = Ps("Transaction.update", t, this.xd), i = Zi(this.xd.vd, "Transaction.update", r.pa, e)), this.Md.update(r.pa, i), this;
      }, t.prototype["delete"] = function (t) {
        hi("Transaction.delete", arguments, 1);
        var e = Ps("Transaction.delete", t, this.xd);
        return this.Md["delete"](e.pa), this;
      }, t;
    }(),
        vs =
    /** @class */
    function () {
      function t(t) {
        this.xd = t, this.Od = [], this.Ld = !1;
      }

      return t.prototype.set = function (t, e, n) {
        li("WriteBatch.set", arguments, 2, 3), this.Bd();
        var r = Ps("WriteBatch.set", t, this.xd);
        n = xs("WriteBatch.set", n);
        var i = Rs(r.ba, e, n),
            o = Ji(this.xd.vd, "WriteBatch.set", r.pa, i, null !== r.ba, n);
        return this.Od = this.Od.concat(o.va(r.pa, Oe.Qe())), this;
      }, t.prototype.update = function (t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) {
          o[s - 3] = arguments[s];
        }

        return this.Bd(), "string" == typeof e || e instanceof Ri ? (fi("WriteBatch.update", arguments, 3), r = Ps("WriteBatch.update", t, this.xd), i = to(this.xd.vd, "WriteBatch.update", r.pa, e, n, o)) : (hi("WriteBatch.update", arguments, 2), r = Ps("WriteBatch.update", t, this.xd), i = Zi(this.xd.vd, "WriteBatch.update", r.pa, e)), this.Od = this.Od.concat(i.va(r.pa, Oe.exists(!0))), this;
      }, t.prototype["delete"] = function (t) {
        hi("WriteBatch.delete", arguments, 1), this.Bd();
        var e = Ps("WriteBatch.delete", t, this.xd);
        return this.Od = this.Od.concat(new Ke(e.pa, Oe.Qe())), this;
      }, t.prototype.commit = function () {
        return this.Bd(), this.Ld = !0, this.Od.length > 0 ? this.xd.Rd().write(this.Od) : Promise.resolve();
      }, t.prototype.Bd = function () {
        if (this.Ld) throw new D(x.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
      }, t;
    }(),
        gs =
    /** @class */
    function (t) {
      function n(e, n, r) {
        var i = this;
        return (i = t.call(this, n.ya, e, r) || this).pa = e, i.firestore = n, i.ba = r, i.Pd = i.firestore.Rd(), i;
      }

      return e.__extends(n, t), n.$d = function (t, e, r) {
        if (t.length % 2 != 0) throw new D(x.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.N() + " has " + t.length);
        return new n(new V(t), e, r);
      }, Object.defineProperty(n.prototype, "id", {
        get: function get() {
          return this.pa.path.S();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(n.prototype, "parent", {
        get: function get() {
          return new As(this.pa.path.p(), this.firestore, this.ba);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(n.prototype, "path", {
        get: function get() {
          return this.pa.path.N();
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype.collection = function (t) {
        if (hi("DocumentReference.collection", arguments, 1), pi("DocumentReference.collection", "non-empty string", 1, t), !t) throw new D(x.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
        var e = R.$(t);
        return new As(this.pa.path.child(e), this.firestore,
        /* converter= */
        null);
      }, n.prototype.isEqual = function (t) {
        if (!(t instanceof n)) throw Ni("isEqual", "DocumentReference", 1, t);
        return this.firestore === t.firestore && this.pa.isEqual(t.pa) && this.ba === t.ba;
      }, n.prototype.set = function (t, e) {
        li("DocumentReference.set", arguments, 1, 2), e = xs("DocumentReference.set", e);
        var n = Rs(this.ba, t, e),
            r = Ji(this.firestore.vd, "DocumentReference.set", this.pa, n, null !== this.ba, e);
        return this.Pd.write(r.va(this.pa, Oe.Qe()));
      }, n.prototype.update = function (t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++) {
          r[i - 2] = arguments[i];
        }

        return "string" == typeof t || t instanceof Ri ? (fi("DocumentReference.update", arguments, 2), n = to(this.firestore.vd, "DocumentReference.update", this.pa, t, e, r)) : (hi("DocumentReference.update", arguments, 1), n = Zi(this.firestore.vd, "DocumentReference.update", this.pa, t)), this.Pd.write(n.va(this.pa, Oe.exists(!0)));
      }, n.prototype["delete"] = function () {
        return hi("DocumentReference.delete", arguments, 0), this.Pd.write([new Ke(this.pa, Oe.Qe())]);
      }, n.prototype.onSnapshot = function () {
        for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) {
          i[o] = arguments[o];
        }

        li("DocumentReference.onSnapshot", arguments, 1, 4);
        var s = {
          includeMetadataChanges: !1
        },
            u = 0;
        "object" != typeof i[u] || cs(i[u]) || (Ei("DocumentReference.onSnapshot", s = i[u], ["includeMetadataChanges"]), vi("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), u++);
        var a = {
          includeMetadataChanges: s.includeMetadataChanges
        };

        if (cs(i[u])) {
          var c = i[u];
          i[u] = null === (t = c.next) || void 0 === t ? void 0 : t.bind(c), i[u + 1] = null === (e = c.error) || void 0 === e ? void 0 : e.bind(c), i[u + 2] = null === (n = c.complete) || void 0 === n ? void 0 : n.bind(c);
        } else pi("DocumentReference.onSnapshot", "function", u, i[u]), di("DocumentReference.onSnapshot", "function", u + 1, i[u + 1]), di("DocumentReference.onSnapshot", "function", u + 2, i[u + 2]);

        var h = {
          next: function next(t) {
            i[u] && i[u](r.qd(t));
          },
          error: i[u + 1],
          complete: i[u + 2]
        };
        return ms(this.Pd, this.pa, a, h);
      }, n.prototype.get = function (t) {
        var e = this;
        return li("DocumentReference.get", arguments, 0, 1), Ss("DocumentReference.get", t), t && "cache" === t.source ? this.firestore.Rd().rd(this.pa).then(function (t) {
          return new bs(e.firestore, e.pa, t,
          /*fromCache=*/
          !0, t instanceof tn && t.Ge, e.ba);
        }) :
        /**
         * Retrieves a latency-compensated document from the backend via a
         * SnapshotListener.
         */
        function (t, e, n) {
          var r = new Rn(),
              i = ms(t, e, {
            includeMetadataChanges: !0,
            J_: !0
          }, {
            next: function next(t) {
              // Remove query first before passing event to user to avoid
              // user actions affecting the now stale query.
              i();
              var o = t.docs.has(e);
              !o && t.fromCache ? // TODO(dimond): If we're online and the document doesn't
              // exist then we resolve with a doc.exists set to false. If
              // we're offline however, we reject the Promise in this
              // case. Two options: 1) Cache the negative response from
              // the server so we can deliver that even when you're
              // offline 2) Actually reject the Promise in the online case
              // if the document doesn't exist.
              r.reject(new D(x.UNAVAILABLE, "Failed to get document because the client is offline.")) : o && t.fromCache && n && "server" === n.source ? r.reject(new D(x.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : r.resolve(t);
            },
            error: function error(t) {
              return r.reject(t);
            }
          });
          return r.promise;
        }(this.Pd, this.pa, t).then(function (t) {
          return e.qd(t);
        });
      }, n.prototype.withConverter = function (t) {
        return new n(this.pa, this.firestore, t);
      },
      /**
       * Converts a ViewSnapshot that contains the current document to a
       * DocumentSnapshot.
       */
      n.prototype.qd = function (t) {
        var e = t.docs.get(this.pa);
        return new bs(this.firestore, this.pa, e, t.fromCache, t.hasPendingWrites, this.ba);
      }, n;
    }(Qi);
    /** Registers an internal snapshot listener for `ref`. */


    function ms(t, e, n, r) {
      var i = function i(t) {
        console.error("Uncaught Error in onSnapshot:", t);
      };

      r.error && (i = r.error.bind(r));
      var o = new as({
        next: function next(t) {
          r.next && r.next(t);
        },
        error: i
      }),
          s = t.listen(rn.hn(e.path), o, n);
      return function () {
        o.ad(), t.Rc(s);
      };
    }

    var ws =
    /** @class */
    function () {
      function t(t, e) {
        this.hasPendingWrites = t, this.fromCache = e;
      }

      return t.prototype.isEqual = function (t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
      }, t;
    }(),
        bs =
    /** @class */
    function () {
      function t(t, e, n, r, i, o) {
        this.xd = t, this.pa = e, this.Ud = n, this.Qd = r, this.Wd = i, this.ba = o;
      }

      return t.prototype.data = function (t) {
        var e = this;

        if (li("DocumentSnapshot.data", arguments, 0, 1), t = Ds("DocumentSnapshot.data", t), this.Ud) {
          // We only want to use the converter and create a new DocumentSnapshot
          // if a converter has been provided.
          if (this.ba) {
            var n = new _s(this.xd, this.pa, this.Ud, this.Qd, this.Wd,
            /* converter= */
            null);
            return this.ba.fromFirestore(n, t);
          }

          return new hs(this.xd.ya, this.xd.kd(), t.serverTimestamps || "none", function (t) {
            return new gs(t, e.xd,
            /* converter= */
            null);
          })._d(this.Ud.tn());
        }
      }, t.prototype.get = function (t, e) {
        var n = this;

        if (li("DocumentSnapshot.get", arguments, 1, 2), e = Ds("DocumentSnapshot.get", e), this.Ud) {
          var r = this.Ud.data().field(so("DocumentSnapshot.get", t, this.pa));
          if (null !== r) return new hs(this.xd.ya, this.xd.kd(), e.serverTimestamps || "none", function (t) {
            return new gs(t, n.xd, n.ba);
          })._d(r);
        }
      }, Object.defineProperty(t.prototype, "id", {
        get: function get() {
          return this.pa.path.S();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "ref", {
        get: function get() {
          return new gs(this.pa, this.xd, this.ba);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "exists", {
        get: function get() {
          return null !== this.Ud;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "metadata", {
        get: function get() {
          return new ws(this.Wd, this.Qd);
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) throw Ni("isEqual", "DocumentSnapshot", 1, e);
        return this.xd === e.xd && this.Qd === e.Qd && this.pa.isEqual(e.pa) && (null === this.Ud ? null === e.Ud : this.Ud.isEqual(e.Ud)) && this.ba === e.ba;
      }, t;
    }(),
        _s =
    /** @class */
    function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return e.__extends(n, t), n.prototype.data = function (e) {
        return t.prototype.data.call(this, e);
      }, n;
    }(bs);
    /** The query class that is shared between the full, lite and legacy SDK. */


    function Is(t) {
      if (t.mn() && 0 === t.en.length) throw new D(x.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
    }

    var Es =
    /** @class */
    function (t) {
      function n(e, n, r) {
        var i = this;
        return (i = t.call(this, n.ya, n.vd, e) || this).jd = e, i.firestore = n, i.ba = r, i;
      }

      return e.__extends(n, t), n.prototype.where = function (t, e, r) {
        hi("Query.where", arguments, 3), Ii("Query.where", 3, r); // Enumerated from the WhereFilterOp type in index.d.ts.

        var i = mi("Query.where", ["<"
        /* LESS_THAN */
        , "<="
        /* LESS_THAN_OR_EQUAL */
        , "=="
        /* EQUAL */
        , ">="
        /* GREATER_THAN_OR_EQUAL */
        , ">"
        /* GREATER_THAN */
        , "array-contains"
        /* ARRAY_CONTAINS */
        , "in"
        /* IN */
        , "array-contains-any"
        /* ARRAY_CONTAINS_ANY */
        ], 2, e),
            o = so("Query.where", t),
            s = this.Kd(o, i, r);
        return new n(this.jd.cn(s), this.firestore, this.ba);
      }, n.prototype.orderBy = function (t, e) {
        var r;
        if (li("Query.orderBy", arguments, 1, 2), di("Query.orderBy", "non-empty string", 2, e), void 0 === e || "asc" === e) r = "asc"
        /* ASCENDING */
        ;else {
          if ("desc" !== e) throw new D(x.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + e + "', expected 'asc' or 'desc'.");
          r = "desc"
          /* DESCENDING */
          ;
        }
        var i = so("Query.orderBy", t),
            o = this.Yd(i, r);
        return new n(this.jd.ln(o), this.firestore, this.ba);
      }, n.prototype.limit = function (t) {
        return hi("Query.limit", arguments, 1), pi("Query.limit", "number", 1, t), Ti("Query.limit", 1, t), new n(this.jd._n(t), this.firestore, this.ba);
      }, n.prototype.limitToLast = function (t) {
        return hi("Query.limitToLast", arguments, 1), pi("Query.limitToLast", "number", 1, t), Ti("Query.limitToLast", 1, t), new n(this.jd.fn(t), this.firestore, this.ba);
      }, n.prototype.startAt = function (t) {
        for (var e = [], r = 1; r < arguments.length; r++) {
          e[r - 1] = arguments[r];
        }

        fi("Query.startAt", arguments, 1);
        var i = this.ew("Query.startAt", t, e,
        /*before=*/
        !0);
        return new n(this.jd.dn(i), this.firestore, this.ba);
      }, n.prototype.startAfter = function (t) {
        for (var e = [], r = 1; r < arguments.length; r++) {
          e[r - 1] = arguments[r];
        }

        fi("Query.startAfter", arguments, 1);
        var i = this.ew("Query.startAfter", t, e,
        /*before=*/
        !1);
        return new n(this.jd.dn(i), this.firestore, this.ba);
      }, n.prototype.endBefore = function (t) {
        for (var e = [], r = 1; r < arguments.length; r++) {
          e[r - 1] = arguments[r];
        }

        fi("Query.endBefore", arguments, 1);
        var i = this.ew("Query.endBefore", t, e,
        /*before=*/
        !0);
        return new n(this.jd.wn(i), this.firestore, this.ba);
      }, n.prototype.endAt = function (t) {
        for (var e = [], r = 1; r < arguments.length; r++) {
          e[r - 1] = arguments[r];
        }

        fi("Query.endAt", arguments, 1);
        var i = this.ew("Query.endAt", t, e,
        /*before=*/
        !1);
        return new n(this.jd.wn(i), this.firestore, this.ba);
      }, n.prototype.isEqual = function (t) {
        if (!(t instanceof n)) throw Ni("isEqual", "Query", 1, t);
        return this.firestore === t.firestore && on(this.jd, t.jd) && this.ba === t.ba;
      }, n.prototype.withConverter = function (t) {
        return new n(this.jd, this.firestore, t);
      },
      /** Helper function to create a bound from a document or fields */
      n.prototype.ew = function (t, n, r, i) {
        if (Ii(t, 1, n), n instanceof bs) return hi(t, e.__spreadArrays([n], r), 1), this.Xd(t, n.Ud, i);
        var o = [n].concat(r);
        return this.Zd(t, o, i);
      }, n.prototype.onSnapshot = function () {
        for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) {
          i[o] = arguments[o];
        }

        li("Query.onSnapshot", arguments, 1, 4);
        var s = {},
            u = 0;

        if ("object" != typeof i[u] || cs(i[u]) || (Ei("Query.onSnapshot", s = i[u], ["includeMetadataChanges"]), vi("Query.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), u++), cs(i[u])) {
          var a = i[u];
          i[u] = null === (t = a.next) || void 0 === t ? void 0 : t.bind(a), i[u + 1] = null === (e = a.error) || void 0 === e ? void 0 : e.bind(a), i[u + 2] = null === (n = a.complete) || void 0 === n ? void 0 : n.bind(a);
        } else pi("Query.onSnapshot", "function", u, i[u]), di("Query.onSnapshot", "function", u + 1, i[u + 1]), di("Query.onSnapshot", "function", u + 2, i[u + 2]);

        var c = {
          next: function next(t) {
            i[u] && i[u](new Ts(r.firestore, r.jd, t, r.ba));
          },
          error: i[u + 1],
          complete: i[u + 2]
        };
        return Is(this.jd), Ns(this.firestore.Rd(), this.jd, s, c);
      }, n.prototype.get = function (t) {
        var e = this;
        li("Query.get", arguments, 0, 1), Ss("Query.get", t), Is(this.jd);
        var n = this.firestore.Rd();
        return (t && "cache" === t.source ? n.od(this.jd) :
        /**
        * Retrieves a latency-compensated query snapshot from the backend via a
        * SnapshotListener.
        */
        function (t, e, n) {
          var r = new Rn(),
              i = Ns(t, e, {
            includeMetadataChanges: !0,
            J_: !0
          }, {
            next: function next(t) {
              // Remove query first before passing event to user to avoid
              // user actions affecting the now stale query.
              i(), t.fromCache && n && "server" === n.source ? r.reject(new D(x.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : r.resolve(t);
            },
            error: function error(t) {
              return r.reject(t);
            }
          });
          return r.promise;
        }(n, this.jd, t)).then(function (t) {
          return new Ts(e.firestore, e.jd, t, e.ba);
        });
      }, n;
    }(
    /** @class */
    function () {
      function t(t, e, n) {
        this.ya = t, this.vd = e, this.jd = n;
      }

      return t.prototype.Kd = function (t, e, n) {
        var r;

        if (t.O()) {
          if ("array-contains"
          /* ARRAY_CONTAINS */
          === e || "array-contains-any"
          /* ARRAY_CONTAINS_ANY */
          === e) throw new D(x.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + e + "' queries on FieldPath.documentId().");

          if ("in"
          /* IN */
          === e) {
            this.Gd(n, e);

            for (var i = [], o = 0, s = n; o < s.length; o++) {
              var u = s[o];
              i.push(this.zd(u));
            }

            r = {
              arrayValue: {
                values: i
              }
            };
          } else r = this.zd(n);
        } else "in"
        /* IN */
        !== e && "array-contains-any"
        /* ARRAY_CONTAINS_ANY */
        !== e || this.Gd(n, e), r = eo(this.vd, "Query.where", n, "in"
        /* IN */
        === e);

        var a = hn.create(t, e, r);
        return this.Hd(a), a;
      }, t.prototype.Yd = function (t, e) {
        if (null !== this.jd.startAt) throw new D(x.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
        if (null !== this.jd.endAt) throw new D(x.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
        var n = new bn(t, e);
        return this.Jd(n), n;
      },
      /**
       * Create a Bound from a query and a document.
       *
       * Note that the Bound will always include the key of the document
       * and so only the provided document will compare equal to the returned
       * position.
       *
       * Will throw if the document does not contain all fields of the order by
       * of the query or if any of the fields in the order by are an uncommitted
       * server timestamp.
       */
      t.prototype.Xd = function (t, e, n) {
        if (!e) throw new D(x.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "()."); // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.

        for (var r = [], i = 0, o = this.jd.orderBy; i < o.length; i++) {
          var s = o[i];
          if (s.field.O()) r.push(Ut(this.ya, e.key));else {
            var u = e.field(s.field);
            if (Nt(u)) throw new D(x.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + s.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');

            if (null === u) {
              var a = s.field.N();
              throw new D(x.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + a + "' (used as the orderBy) does not exist.");
            }

            r.push(u);
          }
        }

        return new vn(r, n);
      },
      /**
       * Converts a list of field values to a Bound for the given query.
       */
      t.prototype.Zd = function (t, e, n) {
        // Use explicit order by's because it has to match the query the user made
        var r = this.jd.en;
        if (e.length > r.length) throw new D(x.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");

        for (var i = [], o = 0; o < e.length; o++) {
          var s = e[o];

          if (r[o].field.O()) {
            if ("string" != typeof s) throw new D(x.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof s);
            if (!this.jd.Vn() && -1 !== s.indexOf("/")) throw new D(x.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + t + "() must be a plain document ID, but '" + s + "' contains a slash.");
            var u = this.jd.path.child(R.$(s));
            if (!V.W(u)) throw new D(x.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + t + "() must result in a valid document path, but '" + u + "' is not because it contains an odd number of segments.");
            var a = new V(u);
            i.push(Ut(this.ya, a));
          } else {
            var c = eo(this.vd, t, s);
            i.push(c);
          }
        }

        return new vn(i, n);
      },
      /**
       * Parses the given documentIdValue into a ReferenceValue, throwing
       * appropriate errors if the value is anything other than a DocumentReference
       * or String, or if the string is malformed.
       */
      t.prototype.zd = function (t) {
        if ("string" == typeof t) {
          if ("" === t) throw new D(x.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
          if (!this.jd.Vn() && -1 !== t.indexOf("/")) throw new D(x.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + t + "' contains a '/' character.");
          var e = this.jd.path.child(R.$(t));
          if (!V.W(e)) throw new D(x.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + e + "' is not because it has an odd number of segments (" + e.length + ").");
          return Ut(this.ya, new V(e));
        }

        if (t instanceof Qi) return Ut(this.ya, t.pa);
        throw new D(x.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + _i(t) + ".");
      },
      /**
       * Validates that the value passed into a disjunctrive filter satisfies all
       * array requirements.
       */
      t.prototype.Gd = function (t, e) {
        if (!Array.isArray(t) || 0 === t.length) throw new D(x.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
        if (t.length > 10) throw new D(x.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
        if (t.indexOf(null) >= 0) throw new D(x.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
        if (t.filter(function (t) {
          return Number.isNaN(t);
        }).length > 0) throw new D(x.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.");
      }, t.prototype.Hd = function (t) {
        if (t instanceof hn) {
          var e = ["array-contains"
          /* ARRAY_CONTAINS */
          , "array-contains-any"
          /* ARRAY_CONTAINS_ANY */
          ],
              n = ["in"
          /* IN */
          , "array-contains-any"
          /* ARRAY_CONTAINS_ANY */
          ],
              r = e.indexOf(t.op) >= 0,
              i = n.indexOf(t.op) >= 0;

          if (t.An()) {
            var o = this.jd.an();
            if (null !== o && !o.isEqual(t.field)) throw new D(x.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + o.toString() + "' and '" + t.field.toString() + "'");
            var s = this.jd.un();
            null !== s && this.tw(t.field, s);
          } else if (i || r) {
            // You can have at most 1 disjunctive filter and 1 array filter. Check if
            // the new filter conflicts with an existing one.
            var u = null;
            if (i && (u = this.jd.Rn(n)), null === u && r && (u = this.jd.Rn(e)), null !== u) // We special case when it's a duplicate op to give a slightly clearer error message.
              throw u === t.op ? new D(x.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + t.op.toString() + "' filter.") : new D(x.INVALID_ARGUMENT, "Invalid query. You cannot use '" + t.op.toString() + "' filters with '" + u.toString() + "' filters.");
          }
        }
      }, t.prototype.Jd = function (t) {
        if (null === this.jd.un()) {
          // This is the first order by. It must match any inequality.
          var e = this.jd.an();
          null !== e && this.tw(e, t.field);
        }
      }, t.prototype.tw = function (t, e) {
        if (!e.isEqual(t)) throw new D(x.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t.toString() + "' and so you must also use '" + t.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + e.toString() + "' instead.");
      }, t;
    }());

    function Ns(t, e, n, r) {
      var i = function i(t) {
        console.error("Uncaught Error in onSnapshot:", t);
      };

      r.error && (i = r.error.bind(r));
      var o = new as({
        next: function next(t) {
          r.next && r.next(t);
        },
        error: i
      }),
          s = t.listen(e, o, n);
      return function () {
        o.ad(), t.Rc(s);
      };
    }

    var Ts =
    /** @class */
    function () {
      function t(t, e, n, r) {
        this.xd = t, this.nw = e, this.sw = n, this.ba = r, this.iw = null, this.rw = null, this.metadata = new ws(n.hasPendingWrites, n.fromCache);
      }

      return Object.defineProperty(t.prototype, "docs", {
        get: function get() {
          var t = [];
          return this.forEach(function (e) {
            return t.push(e);
          }), t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "empty", {
        get: function get() {
          return this.sw.docs._();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "size", {
        get: function get() {
          return this.sw.docs.size;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.forEach = function (t, e) {
        var n = this;
        li("QuerySnapshot.forEach", arguments, 1, 2), pi("QuerySnapshot.forEach", "function", 1, t), this.sw.docs.forEach(function (r) {
          t.call(e, n.ow(r, n.metadata.fromCache, n.sw.Lt.has(r.key)));
        });
      }, Object.defineProperty(t.prototype, "query", {
        get: function get() {
          return new Es(this.nw, this.xd, this.ba);
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.docChanges = function (t) {
        t && (Ei("QuerySnapshot.docChanges", t, ["includeMetadataChanges"]), vi("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
        var e = !(!t || !t.includeMetadataChanges);
        if (e && this.sw.qt) throw new D(x.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.iw && this.rw === e || (this.iw =
        /**
        * Calculates the array of firestore.DocumentChange's for a given ViewSnapshot.
        *
        * Exported for testing.
        *
        * @param snapshot The ViewSnapshot that represents the expected state.
        * @param includeMetadataChanges Whether to include metadata changes.
        * @param converter A factory function that returns a QueryDocumentSnapshot.
        * @return An objecyt that matches the firestore.DocumentChange API.
        */
        function (t, e, n) {
          if (t.Ot._()) {
            // Special case the first snapshot because index calculation is easy and
            // fast
            var r = 0;
            return t.docChanges.map(function (e) {
              var i = n(e.doc, t.fromCache, t.Lt.has(e.doc.key));
              return e.doc, {
                type: "added",
                doc: i,
                oldIndex: -1,
                newIndex: r++
              };
            });
          } // A DocumentSet that is updated incrementally as changes are applied to use
          // to lookup the index of a document.


          var i = t.Ot;
          return t.docChanges.filter(function (t) {
            return e || 3
            /* Metadata */
            !== t.type;
          }).map(function (e) {
            var r = n(e.doc, t.fromCache, t.Lt.has(e.doc.key)),
                o = -1,
                s = -1;
            return 0
            /* Added */
            !== e.type && (o = i.indexOf(e.doc.key), i = i["delete"](e.doc.key)), 1
            /* Removed */
            !== e.type && (s = (i = i.add(e.doc)).indexOf(e.doc.key)), {
              type: ks(e.type),
              doc: r,
              oldIndex: o,
              newIndex: s
            };
          });
        }(this.sw, e, this.ow.bind(this)), this.rw = e), this.iw;
      },
      /** Check the equality. The call can be very expensive. */
      t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) throw Ni("isEqual", "QuerySnapshot", 1, e);
        return this.xd === e.xd && on(this.nw, e.nw) && this.sw.isEqual(e.sw) && this.ba === e.ba;
      }, t.prototype.ow = function (t, e, n) {
        return new _s(this.xd, t.key, t, e, n, this.ba);
      }, t;
    }(),
        As =
    /** @class */
    function (t) {
      function n(e, n, r) {
        var i = this;
        if ((i = t.call(this, rn.hn(e), n, r) || this).hw = e, e.length % 2 != 1) throw new D(x.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + e.N() + " has " + e.length);
        return i;
      }

      return e.__extends(n, t), Object.defineProperty(n.prototype, "id", {
        get: function get() {
          return this.jd.path.S();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(n.prototype, "parent", {
        get: function get() {
          var t = this.jd.path.p();
          return t._() ? null : new gs(new V(t), this.firestore,
          /* converter= */
          null);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(n.prototype, "path", {
        get: function get() {
          return this.jd.path.N();
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype.doc = function (t) {
        li("CollectionReference.doc", arguments, 0, 1), // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        0 === arguments.length && (t = g.t()), pi("CollectionReference.doc", "non-empty string", 1, t);
        var e = R.$(t);
        return gs.$d(this.jd.path.child(e), this.firestore, this.ba);
      }, n.prototype.add = function (t) {
        hi("CollectionReference.add", arguments, 1), pi("CollectionReference.add", "object", 1, this.ba ? this.ba.toFirestore(t) : t);
        var e = this.doc();
        return e.set(t).then(function () {
          return e;
        });
      }, n.prototype.withConverter = function (t) {
        return new n(this.hw, this.firestore, t);
      }, n;
    }(Es);

    function xs(t, e) {
      if (void 0 === e) return {
        merge: !1
      };
      if (Ei(t, e, ["merge", "mergeFields"]), vi(t, "boolean", "merge", e.merge), function (t, e, n, r, i) {
        void 0 !== r && function (t, e, n, r, i) {
          if (!(r instanceof Array)) throw new D(x.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + _i(r));

          for (var o = 0; o < r.length; ++o) {
            if (!i(r[o])) throw new D(x.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + _i(r[o]));
          }
        }(t, e, n, r, i);
      }(t, "mergeFields", "a string or a FieldPath", e.mergeFields, function (t) {
        return "string" == typeof t || t instanceof Ri;
      }), void 0 !== e.mergeFields && void 0 !== e.merge) throw new D(x.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
      return e;
    }

    function Ds(t, e) {
      return void 0 === e ? {} : (Ei(t, e, ["serverTimestamps"]), gi(t, 0, "serverTimestamps", e.serverTimestamps, ["estimate", "previous", "none"]), e);
    }

    function Ss(t, e) {
      di(t, "object", 1, e), e && (Ei(t, e, ["source"]), gi(t, 0, "source", e.source, ["default", "server", "cache"]));
    }

    function Ps(t, e, n) {
      if (e instanceof Qi) {
        if (e.firestore !== n) throw new D(x.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
        return e;
      }

      throw Ni(t, "DocumentReference", 1, e);
    }

    function ks(t) {
      switch (t) {
        case 0
        /* Added */
        :
          return "added";

        case 2
        /* Modified */
        :
        case 3
        /* Metadata */
        :
          return "modified";

        case 1
        /* Removed */
        :
          return "removed";

        default:
          return p();
      }
    }
    /**
     * Converts custom model object of type T into DocumentData by applying the
     * converter if it exists.
     *
     * This function is used when converting user objects to DocumentData
     * because we want to provide the user with a more specific error message if
     * their set() or fails due to invalid data originating from a toFirestore()
     * call.
     */


    function Rs(t, e, n) {
      // Cast to `any` in order to satisfy the union type constraint on
      // toFirestore().
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e;
    }

    var Ls = {
      Firestore: ps,
      GeoPoint: Gi,
      Timestamp: S,
      Blob: Pi,
      Transaction: ys,
      WriteBatch: vs,
      DocumentReference: gs,
      DocumentSnapshot: bs,
      Query: Es,
      QueryDocumentSnapshot: _s,
      QuerySnapshot: Ts,
      CollectionReference: As,
      FieldPath: Ri,
      FieldValue: qi,
      setLogLevel: ps.setLogLevel,
      CACHE_SIZE_UNLIMITED: fs
    };
    /**
     * Configures Firestore as part of the Firebase SDK by calling registerService.
     *
     * @param firebase The FirebaseNamespace to register Firestore with
     * @param firestoreFactory A factory function that returns a new Firestore
     *    instance.
     */

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Registers the main Firestore build with the components framework.
     * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
     */

    function Os(t) {
      !function (t, e) {
        t.INTERNAL.registerComponent(new s.Component("firestore", function (t) {
          return function (t, e) {
            return new ps(t, e, new ss());
          }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"));
        }, "PUBLIC"
        /* PUBLIC */
        ).setServiceProps(Object.assign({}, Ls)));
      }(t), t.registerVersion("@firebase/firestore", "1.16.0");
    }

    Os(n), exports.__PRIVATE_registerFirestore = Os; //# sourceMappingURL=index.cjs.js.map

    /***/
  },

  /***/
  "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js ***!
    \*********************************************************************/

  /*! exports provided: default, ErrorCode, EventType, WebChannel, XhrIo, createWebChannelTransport */

  /***/
  function node_modulesFirebaseWebchannelWrapperDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorCode", function () {
      return esm_2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventType", function () {
      return esm_3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebChannel", function () {
      return esm_4;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XhrIo", function () {
      return esm_5;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createWebChannelTransport", function () {
      return esm_1;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */


    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
    var g,
        goog = goog || {},
        k = commonjsGlobal || self;

    function aa() {}

    function ba(a) {
      var b = typeof a;
      if ("object" == b) {
        if (a) {
          if (a instanceof Array) return "array";
          if (a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if ("[object Window]" == c) return "object";
          if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
          if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
        } else return "null";
      } else if ("function" == b && "undefined" == typeof a.call) return "object";
      return b;
    }

    function da(a) {
      var b = ba(a);
      return "array" == b || "object" == b && "number" == typeof a.length;
    }

    function m(a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b;
    }

    function ea(a) {
      return Object.prototype.hasOwnProperty.call(a, fa) && a[fa] || (a[fa] = ++ha);
    }

    var fa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ha = 0;

    function ia(a, b, c) {
      return a.call.apply(a.bind, arguments);
    }

    function ja(a, b, c) {
      if (!a) throw Error();

      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }

      return function () {
        return a.apply(b, arguments);
      };
    }

    function n(a, b, c) {
      Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? n = ia : n = ja;
      return n.apply(null, arguments);
    }

    function ka(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    }

    var q = Date.now || function () {
      return +new Date();
    };

    function r(a, b) {
      function c() {}

      c.prototype = b.prototype;
      a.M = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
    }

    function t() {
      this.j = this.j;
      this.i = this.i;
    }

    var la = 0;
    t.prototype.j = !1;

    t.prototype.da = function () {
      if (!this.j && (this.j = !0, this.C(), 0 != la)) {
        var a = ea(this);
      }
    };

    t.prototype.C = function () {
      if (this.i) for (; this.i.length;) {
        this.i.shift()();
      }
    };

    var na = Array.prototype.indexOf ? function (a, b) {
      return Array.prototype.indexOf.call(a, b, void 0);
    } : function (a, b) {
      if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);

      for (var c = 0; c < a.length; c++) {
        if (c in a && a[c] === b) return c;
      }

      return -1;
    },
        oa = Array.prototype.forEach ? function (a, b, c) {
      Array.prototype.forEach.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) {
        f in e && b.call(c, e[f], f, a);
      }
    };

    function pa(a) {
      a: {
        var b = qa;

        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) {
          if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a;
          }
        }

        b = -1;
      }

      return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
    }

    function ra(a) {
      return Array.prototype.concat.apply([], arguments);
    }

    function sa(a) {
      var b = a.length;

      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) {
          c[d] = a[d];
        }

        return c;
      }

      return [];
    }

    function wa(a) {
      return /^[\s\xa0]*$/.test(a);
    }

    var xa = String.prototype.trim ? function (a) {
      return a.trim();
    } : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    };

    function u(a, b) {
      return -1 != a.indexOf(b);
    }

    function ya(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }

    var v;

    a: {
      var za = k.navigator;

      if (za) {
        var Aa = za.userAgent;

        if (Aa) {
          v = Aa;
          break a;
        }
      }

      v = "";
    }

    function Ba(a, b, c) {
      for (var d in a) {
        b.call(c, a[d], d, a);
      }
    }

    function Ca(a) {
      var b = {};

      for (var c in a) {
        b[c] = a[c];
      }

      return b;
    }

    var Da = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Ea(a, b) {
      var c, d;

      for (var e = 1; e < arguments.length; e++) {
        d = arguments[e];

        for (c in d) {
          a[c] = d[c];
        }

        for (var f = 0; f < Da.length; f++) {
          c = Da[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
      }
    }

    function Fa(a) {
      Fa[" "](a);
      return a;
    }

    Fa[" "] = aa;

    function Ga(a, b) {
      var c = Ha;
      return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
    }

    var Ia = u(v, "Opera"),
        w = u(v, "Trident") || u(v, "MSIE"),
        Ja = u(v, "Edge"),
        Ka = Ja || w,
        La = u(v, "Gecko") && !(u(v.toLowerCase(), "webkit") && !u(v, "Edge")) && !(u(v, "Trident") || u(v, "MSIE")) && !u(v, "Edge"),
        Ma = u(v.toLowerCase(), "webkit") && !u(v, "Edge");

    function Na() {
      var a = k.document;
      return a ? a.documentMode : void 0;
    }

    var Oa;

    a: {
      var Pa = "",
          Qa = function () {
        var a = v;
        if (La) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Ja) return /Edge\/([\d\.]+)/.exec(a);
        if (w) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Ma) return /WebKit\/(\S+)/.exec(a);
        if (Ia) return /(?:Version)[ \/]?(\S+)/.exec(a);
      }();

      Qa && (Pa = Qa ? Qa[1] : "");

      if (w) {
        var Ra = Na();

        if (null != Ra && Ra > parseFloat(Pa)) {
          Oa = String(Ra);
          break a;
        }
      }

      Oa = Pa;
    }

    var Ha = {};

    function Sa(a) {
      return Ga(a, function () {
        {
          var b = 0;
          var e = xa(String(Oa)).split("."),
              f = xa(String(a)).split("."),
              h = Math.max(e.length, f.length);

          for (var l = 0; 0 == b && l < h; l++) {
            var c = e[l] || "",
                d = f[l] || "";

            do {
              c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
              d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
              if (0 == c[0].length && 0 == d[0].length) break;
              b = ya(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || ya(0 == c[2].length, 0 == d[2].length) || ya(c[2], d[2]);
              c = c[3];
              d = d[3];
            } while (0 == b);
          }
        }
        return 0 <= b;
      });
    }

    var Ta;

    if (k.document && w) {
      var Ua = Na();
      Ta = Ua ? Ua : parseInt(Oa, 10) || void 0;
    } else Ta = void 0;

    var Va = Ta;

    var Wa = !w || 9 <= Number(Va),
        Xa = w && !Sa("9"),
        Ya = function () {
      if (!k.addEventListener || !Object.defineProperty) return !1;
      var a = !1,
          b = Object.defineProperty({}, "passive", {
        get: function get() {
          a = !0;
        }
      });

      try {
        k.addEventListener("test", aa, b), k.removeEventListener("test", aa, b);
      } catch (c) {}

      return a;
    }();

    function x(a, b) {
      this.type = a;
      this.a = this.target = b;
      this.defaultPrevented = !1;
    }

    x.prototype.b = function () {
      this.defaultPrevented = !0;
    };

    function y(a, b) {
      x.call(this, a ? a.type : "");
      this.relatedTarget = this.a = this.target = null;
      this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
      this.key = "";
      this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
      this.pointerId = 0;
      this.pointerType = "";
      this.c = null;

      if (a) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;

        if (b = a.relatedTarget) {
          if (La) {
            a: {
              try {
                Fa(b.nodeName);
                var e = !0;
                break a;
              } catch (f) {}

              e = !1;
            }

            e || (b = null);
          }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);

        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Za[a.pointerType] || "";
        this.c = a;
        a.defaultPrevented && this.b();
      }
    }

    r(y, x);
    var Za = {
      2: "touch",
      3: "pen",
      4: "mouse"
    };

    y.prototype.b = function () {
      y.M.b.call(this);
      var a = this.c;
      if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, Xa) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
      } catch (b) {}
    };

    var A = "closure_listenable_" + (1E6 * Math.random() | 0),
        $a = 0;

    function ab(a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.aa = e;
      this.key = ++$a;
      this.V = this.X = !1;
    }

    function bb(a) {
      a.V = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.aa = null;
    }

    function cb(a) {
      this.src = a;
      this.a = {};
      this.b = 0;
    }

    cb.prototype.add = function (a, b, c, d, e) {
      var f = a.toString();
      a = this.a[f];
      a || (a = this.a[f] = [], this.b++);
      var h = db(a, b, d, e);
      -1 < h ? (b = a[h], c || (b.X = !1)) : (b = new ab(b, this.src, f, !!d, e), b.X = c, a.push(b));
      return b;
    };

    function eb(a, b) {
      var c = b.type;

      if (c in a.a) {
        var d = a.a[c],
            e = na(d, b),
            f;
        (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
        f && (bb(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
      }
    }

    function db(a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.V && f.listener == b && f.capture == !!c && f.aa == d) return e;
      }

      return -1;
    }

    var fb = "closure_lm_" + (1E6 * Math.random() | 0),
        gb = {};

    function ib(a, b, c, d, e) {
      if (d && d.once) return jb(a, b, c, d, e);

      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) {
          ib(a, b[f], c, d, e);
        }

        return null;
      }

      c = kb(c);
      return a && a[A] ? a.ra(b, c, m(d) ? !!d.capture : !!d, e) : lb(a, b, c, !1, d, e);
    }

    function lb(a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var h = m(e) ? !!e.capture : !!e;
      if (h && !Wa) return null;
      var l = mb(a);
      l || (a[fb] = l = new cb(a));
      c = l.add(b, c, d, h, f);
      if (c.proxy) return c;
      d = nb();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) Ya || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(ob(b.toString()), d);else if (a.addListener && a.removeListener) a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
      return c;
    }

    function nb() {
      var a = pb,
          b = Wa ? function (c) {
        return a.call(b.src, b.listener, c);
      } : function (c) {
        c = a.call(b.src, b.listener, c);
        if (!c) return c;
      };
      return b;
    }

    function jb(a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) {
          jb(a, b[f], c, d, e);
        }

        return null;
      }

      c = kb(c);
      return a && a[A] ? a.sa(b, c, m(d) ? !!d.capture : !!d, e) : lb(a, b, c, !0, d, e);
    }

    function qb(a, b, c, d, e) {
      if (Array.isArray(b)) for (var f = 0; f < b.length; f++) {
        qb(a, b[f], c, d, e);
      } else (d = m(d) ? !!d.capture : !!d, c = kb(c), a && a[A]) ? (a = a.c, b = String(b).toString(), b in a.a && (f = a.a[b], c = db(f, c, d, e), -1 < c && (bb(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = mb(a)) && (b = a.a[b.toString()], a = -1, b && (a = db(b, c, d, e)), (c = -1 < a ? b[a] : null) && rb(c));
    }

    function rb(a) {
      if ("number" !== typeof a && a && !a.V) {
        var b = a.src;
        if (b && b[A]) eb(b.c, a);else {
          var c = a.type,
              d = a.proxy;
          b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(ob(c), d) : b.addListener && b.removeListener && b.removeListener(d);
          (c = mb(b)) ? (eb(c, a), 0 == c.b && (c.src = null, b[fb] = null)) : bb(a);
        }
      }
    }

    function ob(a) {
      return a in gb ? gb[a] : gb[a] = "on" + a;
    }

    function sb(a, b) {
      var c = a.listener,
          d = a.aa || a.src;
      a.X && rb(a);
      return c.call(d, b);
    }

    function pb(a, b) {
      if (a.V) return !0;

      if (!Wa) {
        if (!b) a: {
          b = ["window", "event"];

          for (var c = k, d = 0; d < b.length; d++) {
            if (c = c[b[d]], null == c) {
              b = null;
              break a;
            }
          }

          b = c;
        }
        b = new y(b, this);
        return sb(a, b);
      }

      return sb(a, new y(b, this));
    }

    function mb(a) {
      a = a[fb];
      return a instanceof cb ? a : null;
    }

    var tb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function kb(a) {
      if ("function" == ba(a)) return a;
      a[tb] || (a[tb] = function (b) {
        return a.handleEvent(b);
      });
      return a[tb];
    }

    function B() {
      t.call(this);
      this.c = new cb(this);
      this.J = this;
      this.A = null;
    }

    r(B, t);
    B.prototype[A] = !0;
    g = B.prototype;

    g.addEventListener = function (a, b, c, d) {
      ib(this, a, b, c, d);
    };

    g.removeEventListener = function (a, b, c, d) {
      qb(this, a, b, c, d);
    };

    g.dispatchEvent = function (a) {
      var b,
          c = this.A;
      if (c) for (b = []; c; c = c.A) {
        b.push(c);
      }
      c = this.J;
      var d = a.type || a;
      if ("string" === typeof a) a = new x(a, c);else if (a instanceof x) a.target = a.target || c;else {
        var e = a;
        a = new x(d, c);
        Ea(a, e);
      }
      e = !0;
      if (b) for (var f = b.length - 1; 0 <= f; f--) {
        var h = a.a = b[f];
        e = ub(h, d, !0, a) && e;
      }
      h = a.a = c;
      e = ub(h, d, !0, a) && e;
      e = ub(h, d, !1, a) && e;
      if (b) for (f = 0; f < b.length; f++) {
        h = a.a = b[f], e = ub(h, d, !1, a) && e;
      }
      return e;
    };

    g.C = function () {
      B.M.C.call(this);

      if (this.c) {
        var a = this.c,
            c;

        for (c in a.a) {
          for (var d = a.a[c], e = 0; e < d.length; e++) {
            bb(d[e]);
          }

          delete a.a[c];
          a.b--;
        }
      }

      this.A = null;
    };

    g.ra = function (a, b, c, d) {
      return this.c.add(String(a), b, !1, c, d);
    };

    g.sa = function (a, b, c, d) {
      return this.c.add(String(a), b, !0, c, d);
    };

    function ub(a, b, c, d) {
      b = a.c.a[String(b)];
      if (!b) return !0;
      b = b.concat();

      for (var e = !0, f = 0; f < b.length; ++f) {
        var h = b[f];

        if (h && !h.V && h.capture == c) {
          var l = h.listener,
              p = h.aa || h.src;
          h.X && eb(a.c, h);
          e = !1 !== l.call(p, d) && e;
        }
      }

      return e && !d.defaultPrevented;
    }

    var vb = k.JSON.stringify;

    function wb() {
      this.b = this.a = null;
    }

    var yb = new (
    /** @class */
    function () {
      function class_1(a, b, c) {
        this.f = c;
        this.c = a;
        this.g = b;
        this.b = 0;
        this.a = null;
      }

      class_1.prototype.get = function () {
        var a;
        0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
        return a;
      };

      return class_1;
    }())(function () {
      return new xb();
    }, function (a) {
      a.reset();
    }, 100);

    wb.prototype.add = function (a, b) {
      var c = yb.get();
      c.set(a, b);
      this.b ? this.b.next = c : this.a = c;
      this.b = c;
    };

    function zb() {
      var a = Ab,
          b = null;
      a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
      return b;
    }

    function xb() {
      this.next = this.b = this.a = null;
    }

    xb.prototype.set = function (a, b) {
      this.a = a;
      this.b = b;
      this.next = null;
    };

    xb.prototype.reset = function () {
      this.next = this.b = this.a = null;
    };

    function Bb(a) {
      k.setTimeout(function () {
        throw a;
      }, 0);
    }

    function Cb(a, b) {
      Db || Eb();
      Fb || (Db(), Fb = !0);
      Ab.add(a, b);
    }

    var Db;

    function Eb() {
      var a = k.Promise.resolve(void 0);

      Db = function Db() {
        a.then(Gb);
      };
    }

    var Fb = !1,
        Ab = new wb();

    function Gb() {
      for (var a; a = zb();) {
        try {
          a.a.call(a.b);
        } catch (c) {
          Bb(c);
        }

        var b = yb;
        b.g(a);
        b.b < b.f && (b.b++, a.next = b.a, b.a = a);
      }

      Fb = !1;
    }

    function Hb(a, b) {
      B.call(this);
      this.b = a || 1;
      this.a = b || k;
      this.f = n(this.Ua, this);
      this.g = q();
    }

    r(Hb, B);
    g = Hb.prototype;
    g.Z = !1;
    g.L = null;

    g.Ua = function () {
      if (this.Z) {
        var a = q() - this.g;
        0 < a && a < .8 * this.b ? this.L = this.a.setTimeout(this.f, this.b - a) : (this.L && (this.a.clearTimeout(this.L), this.L = null), this.dispatchEvent("tick"), this.Z && (Ib(this), this.start()));
      }
    };

    g.start = function () {
      this.Z = !0;
      this.L || (this.L = this.a.setTimeout(this.f, this.b), this.g = q());
    };

    function Ib(a) {
      a.Z = !1;
      a.L && (a.a.clearTimeout(a.L), a.L = null);
    }

    g.C = function () {
      Hb.M.C.call(this);
      Ib(this);
      delete this.a;
    };

    function Jb(a, b, c) {
      if ("function" == ba(a)) c && (a = n(a, c));else if (a && "function" == typeof a.handleEvent) a = n(a.handleEvent, a);else throw Error("Invalid listener argument");
      return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0);
    }

    function Kb(a, b, c) {
      t.call(this);
      this.f = null != c ? n(a, c) : a;
      this.c = b;
      this.b = n(this.Pa, this);
      this.a = [];
    }

    r(Kb, t);
    g = Kb.prototype;
    g.ba = !1;
    g.T = null;

    g.Ia = function (a) {
      this.a = arguments;
      this.T ? this.ba = !0 : Lb(this);
    };

    g.C = function () {
      Kb.M.C.call(this);
      this.T && (k.clearTimeout(this.T), this.T = null, this.ba = !1, this.a = []);
    };

    g.Pa = function () {
      this.T = null;
      this.ba && (this.ba = !1, Lb(this));
    };

    function Lb(a) {
      a.T = Jb(a.b, a.c);
      a.f.apply(null, a.a);
    }

    function C(a) {
      t.call(this);
      this.b = a;
      this.a = {};
    }

    r(C, t);
    var Mb = [];

    function Nb(a, b, c, d) {
      Array.isArray(c) || (c && (Mb[0] = c.toString()), c = Mb);

      for (var e = 0; e < c.length; e++) {
        var f = ib(b, c[e], d || a.handleEvent, !1, a.b || a);
        if (!f) break;
        a.a[f.key] = f;
      }
    }

    function Ob(a) {
      Ba(a.a, function (b, c) {
        this.a.hasOwnProperty(c) && rb(b);
      }, a);
      a.a = {};
    }

    C.prototype.C = function () {
      C.M.C.call(this);
      Ob(this);
    };

    C.prototype.handleEvent = function () {
      throw Error("EventHandler.handleEvent not implemented");
    };

    function Pb() {}

    var Qb = null;

    function Rb() {
      return Qb = Qb || new B();
    }

    function Sb(a) {
      x.call(this, "serverreachability", a);
    }

    r(Sb, x);

    function E(a) {
      var b = Rb();
      b.dispatchEvent(new Sb(b, a));
    }

    function Tb(a) {
      x.call(this, "statevent", a);
    }

    r(Tb, x);

    function F(a) {
      var b = Rb();
      b.dispatchEvent(new Tb(b, a));
    }

    function Ub(a) {
      x.call(this, "timingevent", a);
    }

    r(Ub, x);

    function Vb(a, b) {
      if ("function" != ba(a)) throw Error("Fn must not be null and must be a function");
      return k.setTimeout(function () {
        a();
      }, b);
    }

    var Wb = {
      NO_ERROR: 0,
      Va: 1,
      bb: 2,
      ab: 3,
      Ya: 4,
      $a: 5,
      cb: 6,
      za: 7,
      TIMEOUT: 8,
      gb: 9
    };
    var Xb = {
      Xa: "complete",
      kb: "success",
      Aa: "error",
      za: "abort",
      ib: "ready",
      jb: "readystatechange",
      TIMEOUT: "timeout",
      eb: "incrementaldata",
      hb: "progress",
      Za: "downloadprogress",
      lb: "uploadprogress"
    };

    function Yb() {}

    Yb.prototype.a = null;

    function Zb(a) {
      var b;
      (b = a.a) || (b = a.a = {});
      return b;
    }

    function $b() {}

    var G = {
      OPEN: "a",
      Wa: "b",
      Aa: "c",
      fb: "d"
    };

    function ac() {
      x.call(this, "d");
    }

    r(ac, x);

    function bc() {
      x.call(this, "c");
    }

    r(bc, x);
    var cc;

    function dc() {}

    r(dc, Yb);
    cc = new dc();

    function H(a, b, c) {
      this.g = a;
      this.W = b;
      this.U = c || 1;
      this.G = new C(this);
      this.N = ec;
      a = Ka ? 125 : void 0;
      this.O = new Hb(a);
      this.m = null;
      this.b = !1;
      this.j = this.A = this.f = this.B = this.s = this.P = this.h = null;
      this.i = [];
      this.a = null;
      this.w = 0;
      this.c = this.v = null;
      this.H = -1;
      this.l = !1;
      this.J = 0;
      this.D = null;
      this.o = this.R = this.F = !1;
    }

    var ec = 45E3,
        fc = {},
        gc = {};
    g = H.prototype;

    g.setTimeout = function (a) {
      this.N = a;
    };

    function hc(a, b, c) {
      a.B = 1;
      a.f = ic(I(b));
      a.j = c;
      a.F = !0;
      jc(a, null);
    }

    function jc(a, b) {
      a.s = q();
      J(a);
      a.A = I(a.f);
      var c = a.A,
          d = a.U;
      Array.isArray(d) || (d = [String(d)]);
      kc(c.b, "t", d);
      a.w = 0;
      a.a = lc(a.g, a.g.w ? b : null);
      0 < a.J && (a.D = new Kb(n(a.ya, a, a.a), a.J));
      Nb(a.G, a.a, "readystatechange", a.Sa);
      b = a.m ? Ca(a.m) : {};
      a.j ? (a.v || (a.v = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.$(a.A, a.v, a.j, b)) : (a.v = "GET", a.a.$(a.A, a.v, null, b));
      E(1);
    }

    g.Sa = function (a) {
      a = a.target;
      var b = this.D;
      b && 3 == K(a) ? b.Ia() : this.ya(a);
    };

    g.ya = function (a) {
      try {
        if (a == this.a) a: {
          var b = K(this.a),
              c = this.a.qa(),
              d = this.a.S();

          if (!(3 > b || 3 == b && !Ka && !this.a.Y())) {
            this.l || 4 != b || 7 == c || (8 == c || 0 >= d ? E(3) : E(2));
            mc(this);
            var e = this.a.S();
            this.H = e;
            var f = this.a.Y();

            if (this.b = 200 == e) {
              if (this.R && !this.o) {
                b: {
                  if (this.a) {
                    var h,
                        l = this.a;

                    if ((h = l.a ? l.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !wa(h)) {
                      var p = h;
                      break b;
                    }
                  }

                  p = null;
                }

                if (p) this.o = !0, nc(this, p);else {
                  this.b = !1;
                  this.c = 3;
                  F(12);
                  L(this);
                  pc(this);
                  break a;
                }
              }

              this.F ? (qc(this, b, f), Ka && this.b && 3 == b && (Nb(this.G, this.O, "tick", this.Ra), this.O.start())) : nc(this, f);
              4 == b && L(this);
              this.b && !this.l && (4 == b ? rc(this.g, this) : (this.b = !1, J(this)));
            } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.c = 3, F(12)) : (this.c = 0, F(13)), L(this), pc(this);
          }
        }
      } catch (D) {} finally {}
    };

    function qc(a, b, c) {
      for (var d = !0; !a.l && a.w < c.length;) {
        var e = tc(a, c);

        if (e == gc) {
          4 == b && (a.c = 4, F(14), d = !1);
          break;
        } else if (e == fc) {
          a.c = 4;
          F(15);
          d = !1;
          break;
        } else nc(a, e);
      }

      4 == b && 0 == c.length && (a.c = 1, F(16), d = !1);
      a.b = a.b && d;
      d || (L(a), pc(a));
    }

    g.Ra = function () {
      if (this.a) {
        var a = K(this.a),
            b = this.a.Y();
        this.w < b.length && (mc(this), qc(this, a, b), this.b && 4 != a && J(this));
      }
    };

    function tc(a, b) {
      var c = a.w,
          d = b.indexOf("\n", c);
      if (-1 == d) return gc;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return fc;
      d += 1;
      if (d + c > b.length) return gc;
      b = b.substr(d, c);
      a.w = d + c;
      return b;
    }

    g.cancel = function () {
      this.l = !0;
      L(this);
    };

    function J(a) {
      a.P = q() + a.N;
      uc(a, a.N);
    }

    function uc(a, b) {
      if (null != a.h) throw Error("WatchDog timer not null");
      a.h = Vb(n(a.Qa, a), b);
    }

    function mc(a) {
      a.h && (k.clearTimeout(a.h), a.h = null);
    }

    g.Qa = function () {
      this.h = null;
      var a = q();
      0 <= a - this.P ? (2 != this.B && (E(3), F(17)), L(this), this.c = 2, pc(this)) : uc(this, this.P - a);
    };

    function pc(a) {
      0 == a.g.u || a.l || rc(a.g, a);
    }

    function L(a) {
      mc(a);
      var b = a.D;
      b && "function" == typeof b.da && b.da();
      a.D = null;
      Ib(a.O);
      Ob(a.G);
      a.a && (b = a.a, a.a = null, b.abort(), b.da());
    }

    function nc(a, b) {
      try {
        var c = a.g;
        if (0 != c.u && (c.a == a || vc(c.b, a))) if (c.A = a.H, !a.o && vc(c.b, a) && 3 == c.u) {
          try {
            var d = c.ja.a.parse(b);
          } catch (oc) {
            d = null;
          }

          if (Array.isArray(d) && 3 == d.length) {
            var e = d;
            if (0 == e[0]) a: {
              if (!c.i) {
                if (c.a) if (c.a.s + 3E3 < a.s) wc(c), c.a.cancel(), c.a = null;else break a;
                xc(c);
                F(18);
              }
            } else c.ia = e[1], 0 < c.ia - c.G && 37500 > e[2] && c.U && 0 == c.m && !c.l && (c.l = Vb(n(c.Na, c), 6E3));

            if (1 >= yc(c.b) && c.O) {
              try {
                c.O();
              } catch (oc) {}

              c.O = void 0;
            }
          } else M(c, 11);
        } else if ((a.o || c.a == a) && wc(c), !wa(b)) for (b = d = c.ja.a.parse(b), d = 0; d < b.length; d++) {
          if (e = b[d], c.G = e[0], e = e[1], 2 == c.u) {
            if ("c" == e[0]) {
              c.B = e[1];
              c.R = e[2];
              var f = e[3];
              null != f && (c.oa = f);
              var h = e[5];
              null != h && "number" === typeof h && 0 < h && (c.D = 1.5 * h);
              var l = c,
                  p = a.a;

              if (p) {
                var D = p.a ? p.a.getResponseHeader("X-Client-Wire-Protocol") : null;

                if (D) {
                  var z = l.b;
                  !z.a && (u(D, "spdy") || u(D, "quic") || u(D, "h2")) && (z.f = z.g, z.a = new Set(), z.b && (zc(z, z.b), z.b = null));
                }

                if (l.s) {
                  var ta = p.a ? p.a.getResponseHeader("X-HTTP-Session-Id") : null;
                  ta && (l.ha = ta, N(l.v, l.s, ta));
                }
              }

              c.u = 3;
              c.c && c.c.na();
              l = c;
              var ua = a;
              l.ea = Ac(l, l.w ? l.R : null, l.P);

              if (ua.o) {
                Bc(l.b, ua);
                var va = ua,
                    sc = l.D;
                sc && va.setTimeout(sc);
                va.h && (mc(va), J(va));
                l.a = ua;
              } else Cc(l);

              0 < c.f.length && Dc(c);
            } else "stop" != e[0] && "close" != e[0] || M(c, 7);
          } else 3 == c.u && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? M(c, 7) : Ec(c) : "noop" != e[0] && c.c && c.c.ma(e), c.m = 0);
        }
        E(4);
      } catch (oc) {}
    }

    function Fc(a) {
      if (a.I && "function" == typeof a.I) return a.I();
      if ("string" === typeof a) return a.split("");

      if (da(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) {
          b.push(a[d]);
        }

        return b;
      }

      b = [];
      c = 0;

      for (d in a) {
        b[c++] = a[d];
      }

      return a = b;
    }

    function Gc(a, b) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);else if (da(a) || "string" === typeof a) oa(a, b, void 0);else {
        if (a.K && "function" == typeof a.K) var c = a.K();else if (a.I && "function" == typeof a.I) c = void 0;else if (da(a) || "string" === typeof a) {
          c = [];

          for (var d = a.length, e = 0; e < d; e++) {
            c.push(e);
          }
        } else for (e in c = [], d = 0, a) {
          c[d++] = e;
        }
        d = Fc(a);
        e = d.length;

        for (var f = 0; f < e; f++) {
          b.call(void 0, d[f], c && c[f], a);
        }
      }
    }

    function O(a, b) {
      this.b = {};
      this.a = [];
      this.c = 0;
      var c = arguments.length;

      if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");

        for (var d = 0; d < c; d += 2) {
          this.set(arguments[d], arguments[d + 1]);
        }
      } else if (a) if (a instanceof O) for (c = a.K(), d = 0; d < c.length; d++) {
        this.set(c[d], a.get(c[d]));
      } else for (d in a) {
        this.set(d, a[d]);
      }
    }

    g = O.prototype;

    g.I = function () {
      Hc(this);

      for (var a = [], b = 0; b < this.a.length; b++) {
        a.push(this.b[this.a[b]]);
      }

      return a;
    };

    g.K = function () {
      Hc(this);
      return this.a.concat();
    };

    function Hc(a) {
      if (a.c != a.a.length) {
        for (var b = 0, c = 0; b < a.a.length;) {
          var d = a.a[b];
          P(a.b, d) && (a.a[c++] = d);
          b++;
        }

        a.a.length = c;
      }

      if (a.c != a.a.length) {
        var e = {};

        for (c = b = 0; b < a.a.length;) {
          d = a.a[b], P(e, d) || (a.a[c++] = d, e[d] = 1), b++;
        }

        a.a.length = c;
      }
    }

    g.get = function (a, b) {
      return P(this.b, a) ? this.b[a] : b;
    };

    g.set = function (a, b) {
      P(this.b, a) || (this.c++, this.a.push(a));
      this.b[a] = b;
    };

    g.forEach = function (a, b) {
      for (var c = this.K(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);
        a.call(b, f, e, this);
      }
    };

    function P(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }

    var Ic = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Jc(a, b) {
      if (a) {
        a = a.split("&");

        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
              e = null;

          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];

          b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
        }
      }
    }

    function Q(a, b) {
      this.c = this.j = this.f = "";
      this.h = null;
      this.i = this.g = "";
      this.a = !1;

      if (a instanceof Q) {
        this.a = void 0 !== b ? b : a.a;
        Kc(this, a.f);
        this.j = a.j;
        Lc(this, a.c);
        Mc(this, a.h);
        this.g = a.g;
        b = a.b;
        var c = new R();
        c.c = b.c;
        b.a && (c.a = new O(b.a), c.b = b.b);
        Nc(this, c);
        this.i = a.i;
      } else a && (c = String(a).match(Ic)) ? (this.a = !!b, Kc(this, c[1] || "", !0), this.j = S(c[2] || ""), Lc(this, c[3] || "", !0), Mc(this, c[4]), this.g = S(c[5] || "", !0), Nc(this, c[6] || "", !0), this.i = S(c[7] || "")) : (this.a = !!b, this.b = new R(null, this.a));
    }

    Q.prototype.toString = function () {
      var a = [],
          b = this.f;
      b && a.push(T(b, Oc, !0), ":");
      var c = this.c;
      if (c || "file" == b) a.push("//"), (b = this.j) && a.push(T(b, Oc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c));
      if (c = this.g) this.c && "/" != c.charAt(0) && a.push("/"), a.push(T(c, "/" == c.charAt(0) ? Pc : Qc, !0));
      (c = this.b.toString()) && a.push("?", c);
      (c = this.i) && a.push("#", T(c, Rc));
      return a.join("");
    };

    function I(a) {
      return new Q(a);
    }

    function Kc(a, b, c) {
      a.f = c ? S(b, !0) : b;
      a.f && (a.f = a.f.replace(/:$/, ""));
    }

    function Lc(a, b, c) {
      a.c = c ? S(b, !0) : b;
    }

    function Mc(a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.h = b;
      } else a.h = null;
    }

    function Nc(a, b, c) {
      b instanceof R ? (a.b = b, Sc(a.b, a.a)) : (c || (b = T(b, Tc)), a.b = new R(b, a.a));
    }

    function N(a, b, c) {
      a.b.set(b, c);
    }

    function ic(a) {
      N(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36));
      return a;
    }

    function Uc(a) {
      return a instanceof Q ? I(a) : new Q(a, void 0);
    }

    function Vc(a, b, c, d) {
      var e = new Q(null, void 0);
      a && Kc(e, a);
      b && Lc(e, b);
      c && Mc(e, c);
      d && (e.g = d);
      return e;
    }

    function S(a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    }

    function T(a, b, c) {
      return "string" === typeof a ? (a = encodeURI(a).replace(b, Wc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    }

    function Wc(a) {
      a = a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    }

    var Oc = /[#\/\?@]/g,
        Qc = /[#\?:]/g,
        Pc = /[#\?]/g,
        Tc = /[#\?@]/g,
        Rc = /#/g;

    function R(a, b) {
      this.b = this.a = null;
      this.c = a || null;
      this.f = !!b;
    }

    function U(a) {
      a.a || (a.a = new O(), a.b = 0, a.c && Jc(a.c, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
      }));
    }

    g = R.prototype;

    g.add = function (a, b) {
      U(this);
      this.c = null;
      a = V(this, a);
      var c = this.a.get(a);
      c || this.a.set(a, c = []);
      c.push(b);
      this.b += 1;
      return this;
    };

    function Xc(a, b) {
      U(a);
      b = V(a, b);
      P(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, P(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Hc(a)));
    }

    function Yc(a, b) {
      U(a);
      b = V(a, b);
      return P(a.a.b, b);
    }

    g.forEach = function (a, b) {
      U(this);
      this.a.forEach(function (c, d) {
        oa(c, function (e) {
          a.call(b, e, d, this);
        }, this);
      }, this);
    };

    g.K = function () {
      U(this);

      for (var a = this.a.I(), b = this.a.K(), c = [], d = 0; d < b.length; d++) {
        for (var e = a[d], f = 0; f < e.length; f++) {
          c.push(b[d]);
        }
      }

      return c;
    };

    g.I = function (a) {
      U(this);
      var b = [];
      if ("string" === typeof a) Yc(this, a) && (b = ra(b, this.a.get(V(this, a))));else {
        a = this.a.I();

        for (var c = 0; c < a.length; c++) {
          b = ra(b, a[c]);
        }
      }
      return b;
    };

    g.set = function (a, b) {
      U(this);
      this.c = null;
      a = V(this, a);
      Yc(this, a) && (this.b -= this.a.get(a).length);
      this.a.set(a, [b]);
      this.b += 1;
      return this;
    };

    g.get = function (a, b) {
      if (!a) return b;
      a = this.I(a);
      return 0 < a.length ? String(a[0]) : b;
    };

    function kc(a, b, c) {
      Xc(a, b);
      0 < c.length && (a.c = null, a.a.set(V(a, b), sa(c)), a.b += c.length);
    }

    g.toString = function () {
      if (this.c) return this.c;
      if (!this.a) return "";

      for (var a = [], b = this.a.K(), c = 0; c < b.length; c++) {
        var d = b[c],
            e = encodeURIComponent(String(d));
        d = this.I(d);

        for (var f = 0; f < d.length; f++) {
          var h = e;
          "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
          a.push(h);
        }
      }

      return this.c = a.join("&");
    };

    function V(a, b) {
      b = String(b);
      a.f && (b = b.toLowerCase());
      return b;
    }

    function Sc(a, b) {
      b && !a.f && (U(a), a.c = null, a.a.forEach(function (c, d) {
        var e = d.toLowerCase();
        d != e && (Xc(this, d), kc(this, e, c));
      }, a));
      a.f = b;
    }

    function Zc(a, b) {
      this.b = a;
      this.a = b;
    }

    function $c(a) {
      this.g = a || ad;
      k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.ca && k.ca.ua && k.ca.ua() && k.ca.ua().mb);
      this.f = a ? this.g : 1;
      this.a = null;
      1 < this.f && (this.a = new Set());
      this.b = null;
      this.c = [];
    }

    var ad = 10;

    function bd(a) {
      return a.b ? !0 : a.a ? a.a.size >= a.f : !1;
    }

    function yc(a) {
      return a.b ? 1 : a.a ? a.a.size : 0;
    }

    function vc(a, b) {
      return a.b ? a.b == b : a.a ? a.a.has(b) : !1;
    }

    function zc(a, b) {
      a.a ? a.a.add(b) : a.b = b;
    }

    function Bc(a, b) {
      a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a["delete"](b);
    }

    $c.prototype.cancel = function () {
      var e_1, _a;

      this.c = cd(this);
      if (this.b) this.b.cancel(), this.b = null;else if (this.a && 0 !== this.a.size) {
        try {
          for (var _b = __values(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var a = _c.value;
            a.cancel();
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        this.a.clear();
      }
    };

    function cd(a) {
      var e_2, _a;

      if (null != a.b) return a.c.concat(a.b.i);

      if (null != a.a && 0 !== a.a.size) {
        var b = a.c;

        try {
          for (var _b = __values(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var c = _c.value;
            b = b.concat(c.i);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
          } finally {
            if (e_2) throw e_2.error;
          }
        }

        return b;
      }

      return sa(a.c);
    }

    function dd() {}

    dd.prototype.stringify = function (a) {
      return k.JSON.stringify(a, void 0);
    };

    dd.prototype.parse = function (a) {
      return k.JSON.parse(a, void 0);
    };

    function ed() {
      this.a = new dd();
    }

    function fd(a, b, c) {
      var d = c || "";

      try {
        Gc(a, function (e, f) {
          var h = e;
          m(e) && (h = vb(e));
          b.push(d + f + "=" + encodeURIComponent(h));
        });
      } catch (e) {
        throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
      }
    }

    function gd(a, b) {
      var c = new Pb();

      if (k.Image) {
        var d = new Image();
        d.onload = ka(hd, c, d, "TestLoadImage: loaded", !0, b);
        d.onerror = ka(hd, c, d, "TestLoadImage: error", !1, b);
        d.onabort = ka(hd, c, d, "TestLoadImage: abort", !1, b);
        d.ontimeout = ka(hd, c, d, "TestLoadImage: timeout", !1, b);
        k.setTimeout(function () {
          if (d.ontimeout) d.ontimeout();
        }, 1E4);
        d.src = a;
      } else b(!1);
    }

    function hd(a, b, c, d, e) {
      try {
        b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
      } catch (f) {}
    }

    var id = k.JSON.parse;

    function W(a) {
      B.call(this);
      this.headers = new O();
      this.G = a || null;
      this.b = !1;
      this.s = this.a = null;
      this.D = "";
      this.h = 0;
      this.f = "";
      this.g = this.w = this.l = this.v = !1;
      this.o = 0;
      this.m = null;
      this.H = jd;
      this.B = this.F = !1;
    }

    r(W, B);
    var jd = "",
        kd = /^https?$/i,
        ld = ["POST", "PUT"];
    g = W.prototype;

    g.$ = function (a, b, c, d) {
      if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + a);
      b = b ? b.toUpperCase() : "GET";
      this.D = a;
      this.f = "";
      this.h = 0;
      this.v = !1;
      this.b = !0;
      this.a = new XMLHttpRequest();
      this.s = this.G ? Zb(this.G) : Zb(cc);
      this.a.onreadystatechange = n(this.va, this);

      try {
        this.w = !0, this.a.open(b, String(a), !0), this.w = !1;
      } catch (f) {
        md(this, f);
        return;
      }

      a = c || "";
      var e = new O(this.headers);
      d && Gc(d, function (f, h) {
        e.set(h, f);
      });
      d = pa(e.K());
      c = k.FormData && a instanceof k.FormData;
      !(0 <= na(ld, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
      e.forEach(function (f, h) {
        this.a.setRequestHeader(h, f);
      }, this);
      this.H && (this.a.responseType = this.H);
      "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);

      try {
        nd(this), 0 < this.o && ((this.B = od(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = n(this.ta, this)) : this.m = Jb(this.ta, this.o, this)), this.l = !0, this.a.send(a), this.l = !1;
      } catch (f) {
        md(this, f);
      }
    };

    function od(a) {
      return w && Sa(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout;
    }

    function qa(a) {
      return "content-type" == a.toLowerCase();
    }

    g.ta = function () {
      "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8));
    };

    function md(a, b) {
      a.b = !1;
      a.a && (a.g = !0, a.a.abort(), a.g = !1);
      a.f = b;
      a.h = 5;
      pd(a);
      qd(a);
    }

    function pd(a) {
      a.v || (a.v = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
    }

    g.abort = function (a) {
      this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), qd(this));
    };

    g.C = function () {
      this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), qd(this, !0));
      W.M.C.call(this);
    };

    g.va = function () {
      this.j || (this.w || this.l || this.g ? rd(this) : this.Oa());
    };

    g.Oa = function () {
      rd(this);
    };

    function rd(a) {
      if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != K(a) || 2 != a.S())) if (a.l && 4 == K(a)) Jb(a.va, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == K(a)) {
        a.b = !1;

        try {
          var b = a.S();

          a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var c = !0;
              break a;

            default:
              c = !1;
          }

          var d;

          if (!(d = c)) {
            var e;

            if (e = 0 === b) {
              var f = String(a.D).match(Ic)[1] || null;

              if (!f && k.self && k.self.location) {
                var h = k.self.location.protocol;
                f = h.substr(0, h.length - 1);
              }

              e = !kd.test(f ? f.toLowerCase() : "");
            }

            d = e;
          }

          if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");else {
            a.h = 6;

            try {
              var l = 2 < K(a) ? a.a.statusText : "";
            } catch (p) {
              l = "";
            }

            a.f = l + " [" + a.S() + "]";
            pd(a);
          }
        } finally {
          qd(a);
        }
      }
    }

    function qd(a, b) {
      if (a.a) {
        nd(a);
        var c = a.a,
            d = a.s[0] ? aa : null;
        a.a = null;
        a.s = null;
        b || a.dispatchEvent("ready");

        try {
          c.onreadystatechange = d;
        } catch (e) {}
      }
    }

    function nd(a) {
      a.a && a.B && (a.a.ontimeout = null);
      a.m && (k.clearTimeout(a.m), a.m = null);
    }

    function K(a) {
      return a.a ? a.a.readyState : 0;
    }

    g.S = function () {
      try {
        return 2 < K(this) ? this.a.status : -1;
      } catch (a) {
        return -1;
      }
    };

    g.Y = function () {
      try {
        return this.a ? this.a.responseText : "";
      } catch (a) {
        return "";
      }
    };

    g.Ja = function (a) {
      if (this.a) {
        var b = this.a.responseText;
        a && 0 == b.indexOf(a) && (b = b.substring(a.length));
        return id(b);
      }
    };

    g.qa = function () {
      return this.h;
    };

    g.Ma = function () {
      return "string" === typeof this.f ? this.f : String(this.f);
    };

    function sd(a) {
      var b = "";
      Ba(a, function (c, d) {
        b += d;
        b += ":";
        b += c;
        b += "\r\n";
      });
      return b;
    }

    function td(a, b, c) {
      a: {
        for (d in c) {
          var d = !1;
          break a;
        }

        d = !0;
      }

      d || (c = sd(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : N(a, b, c));
    }

    function X(a, b, c) {
      return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b;
    }

    function ud(a) {
      this.f = [];
      this.R = this.ea = this.v = this.P = this.a = this.ha = this.s = this.N = this.h = this.F = this.j = null;
      this.Fa = this.H = 0;
      this.Ca = X("failFast", !1, a);
      this.U = this.l = this.i = this.g = this.c = null;
      this.W = !0;
      this.A = this.ia = this.G = -1;
      this.J = this.m = this.o = 0;
      this.Ba = X("baseRetryDelayMs", 5E3, a);
      this.Ga = X("retryDelaySeedMs", 1E4, a);
      this.Da = X("forwardChannelMaxRetries", 2, a);
      this.ga = X("forwardChannelRequestTimeoutMs", 2E4, a);
      this.Ea = a && a.nb || void 0;
      this.D = void 0;
      this.w = a && a.supportsCrossDomainXhr || !1;
      this.B = "";
      this.b = new $c(a && a.concurrentRequestLimit);
      this.ja = new ed();
      this.fa = a && a.fastHandshake || !1;
      a && a.forceLongPolling && (this.W = !1);
      this.O = void 0;
    }

    g = ud.prototype;
    g.oa = 8;
    g.u = 1;

    function Ec(a) {
      vd(a);

      if (3 == a.u) {
        var b = a.H++,
            c = I(a.v);
        N(c, "SID", a.B);
        N(c, "RID", b);
        N(c, "TYPE", "terminate");
        wd(a, c);
        b = new H(a, b, void 0);
        b.B = 2;
        b.f = ic(I(c));
        c = !1;
        k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b.f.toString(), ""));
        !c && k.Image && (new Image().src = b.f, c = !0);
        c || (b.a = lc(b.g, null), b.a.$(b.f));
        b.s = q();
        J(b);
      }

      xd(a);
    }

    function vd(a) {
      a.a && (a.a.cancel(), a.a = null);
      a.i && (k.clearTimeout(a.i), a.i = null);
      wc(a);
      a.b.cancel();
      a.g && ("number" === typeof a.g && k.clearTimeout(a.g), a.g = null);
    }

    function yd(a, b) {
      a.f.push(new Zc(a.Fa++, b));
      3 == a.u && Dc(a);
    }

    function Dc(a) {
      bd(a.b) || a.g || (a.g = !0, Cb(a.xa, a), a.o = 0);
    }

    function zd(a, b) {
      if (yc(a.b) >= a.b.f - (a.g ? 1 : 0)) return !1;
      if (a.g) return a.f = b.i.concat(a.f), !0;
      if (1 == a.u || 2 == a.u || a.o >= (a.Ca ? 0 : a.Da)) return !1;
      a.g = Vb(n(a.xa, a, b), Ad(a, a.o));
      a.o++;
      return !0;
    }

    g.xa = function (a) {
      if (this.g) if (this.g = null, 1 == this.u) {
        if (!a) {
          this.H = Math.floor(1E5 * Math.random());
          a = this.H++;
          var b = new H(this, a, void 0),
              c = this.j;
          this.F && (c ? (c = Ca(c), Ea(c, this.F)) : c = this.F);
          null === this.h && (b.m = c);
          var d;
          if (this.fa) a: {
            for (var e = d = 0; e < this.f.length; e++) {
              b: {
                var f = this.f[e];

                if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
                  f = f.length;
                  break b;
                }

                f = void 0;
              }

              if (void 0 === f) break;
              d += f;

              if (4096 < d) {
                d = e;
                break a;
              }

              if (4096 === d || e === this.f.length - 1) {
                d = e + 1;
                break a;
              }
            }

            d = 1E3;
          } else d = 1E3;
          d = Bd(this, b, d);
          e = I(this.v);
          N(e, "RID", a);
          N(e, "CVER", 22);
          this.s && N(e, "X-HTTP-Session-Id", this.s);
          wd(this, e);
          this.h && c && td(e, this.h, c);
          zc(this.b, b);
          this.fa ? (N(e, "$req", d), N(e, "SID", "null"), b.R = !0, hc(b, e, null)) : hc(b, e, d);
          this.u = 2;
        }
      } else 3 == this.u && (a ? Cd(this, a) : 0 == this.f.length || bd(this.b) || Cd(this));
    };

    function Cd(a, b) {
      var c;
      b ? c = b.W : c = a.H++;
      var d = I(a.v);
      N(d, "SID", a.B);
      N(d, "RID", c);
      N(d, "AID", a.G);
      wd(a, d);
      a.h && a.j && td(d, a.h, a.j);
      c = new H(a, c, a.o + 1);
      null === a.h && (c.m = a.j);
      b && (a.f = b.i.concat(a.f));
      b = Bd(a, c, 1E3);
      c.setTimeout(Math.round(.5 * a.ga) + Math.round(.5 * a.ga * Math.random()));
      zc(a.b, c);
      hc(c, d, b);
    }

    function wd(a, b) {
      a.c && Gc({}, function (c, d) {
        N(b, d, c);
      });
    }

    function Bd(a, b, c) {
      c = Math.min(a.f.length, c);
      var d = a.c ? n(a.c.Ha, a.c, a) : null;

      a: for (var e = a.f, f = -1;;) {
        var h = ["count=" + c];
        -1 == f ? 0 < c ? (f = e[0].b, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);

        for (var l = !0, p = 0; p < c; p++) {
          var D = e[p].b,
              z = e[p].a;
          D -= f;
          if (0 > D) f = Math.max(0, e[p].b - 100), l = !1;else try {
            fd(z, h, "req" + D + "_");
          } catch (ta) {
            d && d(z);
          }
        }

        if (l) {
          d = h.join("&");
          break a;
        }
      }

      a = a.f.splice(0, c);
      b.i = a;
      return d;
    }

    function Cc(a) {
      a.a || a.i || (a.J = 1, Cb(a.wa, a), a.m = 0);
    }

    function xc(a) {
      if (a.a || a.i || 3 <= a.m) return !1;
      a.J++;
      a.i = Vb(n(a.wa, a), Ad(a, a.m));
      a.m++;
      return !0;
    }

    g.wa = function () {
      this.i = null;
      this.a = new H(this, "rpc", this.J);
      null === this.h && (this.a.m = this.j);
      this.a.J = 0;
      var a = I(this.ea);
      N(a, "RID", "rpc");
      N(a, "SID", this.B);
      N(a, "CI", this.U ? "0" : "1");
      N(a, "AID", this.G);
      wd(this, a);
      N(a, "TYPE", "xmlhttp");
      this.h && this.j && td(a, this.h, this.j);
      this.D && this.a.setTimeout(this.D);
      var b = this.a,
          c = this.R;
      b.B = 1;
      b.f = ic(I(a));
      b.j = null;
      b.F = !0;
      jc(b, c);
    };

    g.Na = function () {
      null != this.l && (this.l = null, this.a.cancel(), this.a = null, xc(this), F(19));
    };

    function wc(a) {
      null != a.l && (k.clearTimeout(a.l), a.l = null);
    }

    function rc(a, b) {
      var c = null;

      if (a.a == b) {
        wc(a);
        a.a = null;
        var d = 2;
      } else if (vc(a.b, b)) c = b.i, Bc(a.b, b), d = 1;else return;

      a.A = b.H;
      if (0 != a.u) if (b.b) {
        if (1 == d) {
          c = b.j ? b.j.length : 0;
          b = q() - b.s;
          var e = a.o;
          d = Rb();
          d.dispatchEvent(new Ub(d, c, b, e));
          Dc(a);
        } else Cc(a);
      } else if (e = b.c, 3 == e || 0 == e && 0 < a.A || !(1 == d && zd(a, b) || 2 == d && xc(a))) switch (c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e) {
        case 1:
          M(a, 5);
          break;

        case 4:
          M(a, 10);
          break;

        case 3:
          M(a, 6);
          break;

        default:
          M(a, 2);
      }
    }

    function Ad(a, b) {
      var c = a.Ba + Math.floor(Math.random() * a.Ga);
      a.c || (c *= 2);
      return c * b;
    }

    function M(a, b) {
      if (2 == b) {
        var c = null;
        a.c && (c = null);
        var d = n(a.Ta, a);
        c || (c = new Q("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Kc(c, "https"), ic(c));
        gd(c.toString(), d);
      } else F(2);

      a.u = 0;
      a.c && a.c.la(b);
      xd(a);
      vd(a);
    }

    g.Ta = function (a) {
      a ? F(2) : F(1);
    };

    function xd(a) {
      a.u = 0;
      a.A = -1;

      if (a.c) {
        if (0 != cd(a.b).length || 0 != a.f.length) a.b.c.length = 0, sa(a.f), a.f.length = 0;
        a.c.ka();
      }
    }

    function Ac(a, b, c) {
      var d = Uc(c);
      if ("" != d.c) b && Lc(d, b + "." + d.c), Mc(d, d.h);else {
        var e = k.location;
        d = Vc(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.N && Ba(a.N, function (f, h) {
        N(d, h, f);
      });
      b = a.s;
      c = a.ha;
      b && c && N(d, b, c);
      N(d, "VER", a.oa);
      wd(a, d);
      return d;
    }

    function lc(a, b) {
      if (b && !a.w) throw Error("Can't create secondary domain capable XhrIo object.");
      b = new W(a.Ea);
      b.F = a.w;
      return b;
    }

    function Dd() {}

    g = Dd.prototype;

    g.na = function () {};

    g.ma = function () {};

    g.la = function () {};

    g.ka = function () {};

    g.Ha = function () {};

    function Ed() {
      if (w && !(10 <= Number(Va))) throw Error("Environmental error: no available transport.");
    }

    Ed.prototype.a = function (a, b) {
      return new Y(a, b);
    };

    function Y(a, b) {
      B.call(this);
      this.a = new ud(b);
      this.l = a;
      this.b = b && b.messageUrlParams || null;
      a = b && b.messageHeaders || null;
      b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
        "X-Client-Protocol": "webchannel"
      });
      this.a.j = a;
      a = b && b.initMessageHeaders || null;
      b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = {
        "X-WebChannel-Content-Type": b.messageContentType
      });
      b && b.pa && (a ? a["X-WebChannel-Client-Profile"] = b.pa : a = {
        "X-WebChannel-Client-Profile": b.pa
      });
      this.a.F = a;
      (a = b && b.httpHeadersOverwriteParam) && !wa(a) && (this.a.h = a);
      this.h = b && b.supportsCrossDomainXhr || !1;
      this.g = b && b.sendRawJson || !1;
      (b = b && b.httpSessionIdParam) && !wa(b) && (this.a.s = b, a = this.b, null !== a && b in a && (a = this.b, b in a && delete a[b]));
      this.f = new Z(this);
    }

    r(Y, B);
    g = Y.prototype;

    g.addEventListener = function (a, b, c, d) {
      Y.M.addEventListener.call(this, a, b, c, d);
    };

    g.removeEventListener = function (a, b, c, d) {
      Y.M.removeEventListener.call(this, a, b, c, d);
    };

    g.Ka = function () {
      this.a.c = this.f;
      this.h && (this.a.w = !0);
      var a = this.a,
          b = this.l,
          c = this.b || void 0;
      F(0);
      a.P = b;
      a.N = c || {};
      a.U = a.W;
      a.v = Ac(a, null, a.P);
      Dc(a);
    };

    g.close = function () {
      Ec(this.a);
    };

    g.La = function (a) {
      if ("string" === typeof a) {
        var b = {};
        b.__data__ = a;
        yd(this.a, b);
      } else this.g ? (b = {}, b.__data__ = vb(a), yd(this.a, b)) : yd(this.a, a);
    };

    g.C = function () {
      this.a.c = null;
      delete this.f;
      Ec(this.a);
      delete this.a;
      Y.M.C.call(this);
    };

    function Fd(a) {
      ac.call(this);
      var b = a.__sm__;

      if (b) {
        a: {
          for (var c in b) {
            a = c;
            break a;
          }

          a = void 0;
        }

        (this.c = a) ? (a = this.c, this.data = null !== b && a in b ? b[a] : void 0) : this.data = b;
      } else this.data = a;
    }

    r(Fd, ac);

    function Gd() {
      bc.call(this);
      this.status = 1;
    }

    r(Gd, bc);

    function Z(a) {
      this.a = a;
    }

    r(Z, Dd);

    Z.prototype.na = function () {
      this.a.dispatchEvent("a");
    };

    Z.prototype.ma = function (a) {
      this.a.dispatchEvent(new Fd(a));
    };

    Z.prototype.la = function (a) {
      this.a.dispatchEvent(new Gd(a));
    };

    Z.prototype.ka = function () {
      this.a.dispatchEvent("b");
    };
    /*
    Copyright 2017 Google Inc.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */


    Ed.prototype.createWebChannel = Ed.prototype.a;
    Y.prototype.send = Y.prototype.La;
    Y.prototype.open = Y.prototype.Ka;
    Y.prototype.close = Y.prototype.close;
    Wb.NO_ERROR = 0;
    Wb.TIMEOUT = 8;
    Wb.HTTP_ERROR = 6;
    Xb.COMPLETE = "complete";
    $b.EventType = G;
    G.OPEN = "a";
    G.CLOSE = "b";
    G.ERROR = "c";
    G.MESSAGE = "d";
    B.prototype.listen = B.prototype.ra;
    W.prototype.listenOnce = W.prototype.sa;
    W.prototype.getLastError = W.prototype.Ma;
    W.prototype.getLastErrorCode = W.prototype.qa;
    W.prototype.getStatus = W.prototype.S;
    W.prototype.getResponseJson = W.prototype.Ja;
    W.prototype.getResponseText = W.prototype.Y;
    W.prototype.send = W.prototype.$;
    var esm = {
      createWebChannelTransport: function createWebChannelTransport() {
        return new Ed();
      },
      ErrorCode: Wb,
      EventType: Xb,
      WebChannel: $b,
      XhrIo: W
    };
    var esm_1 = esm.createWebChannelTransport;
    var esm_2 = esm.ErrorCode;
    var esm_3 = esm.EventType;
    var esm_4 = esm.WebChannel;
    var esm_5 = esm.XhrIo;
    /* harmony default export */

    __webpack_exports__["default"] = esm; //# sourceMappingURL=index.esm.js.map

    /***/
  },

  /***/
  "./node_modules/firebase/firestore/dist/index.esm.js":
  /*!***********************************************************!*\
    !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
    \***********************************************************/

  /*! no exports provided */

  /***/
  function node_modulesFirebaseFirestoreDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @firebase/firestore */
    "./node_modules/@firebase/firestore/dist/index.cjs.js");
    /* harmony import */


    var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__); //# sourceMappingURL=index.esm.js.map

    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(AFauth, router, db) {
        _classCallCheck(this, AuthService);

        this.AFauth = AFauth;
        this.router = router;
        this.db = db;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(email, password) {
          var _this2 = this;

          return new Promise(function (resolve, rejected) {
            _this2.AFauth.signInWithEmailAndPassword(email, password).then(function (user) {
              resolve(user);
            })["catch"](function (err) {
              return rejected(err);
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this3 = this;

          this.AFauth.signOut().then(function () {
            _this3.router.navigate(['/login']);
          });
        }
      }, {
        key: "register",
        value: function register(email, password, name) {
          var _this4 = this;

          return new Promise(function (resolve, reject) {
            _this4.AFauth.createUserWithEmailAndPassword(email, password).then(function (res) {
              // console.log(res.user.uid);
              var uid = res.user.uid;

              _this4.db.collection('users').doc(uid).set({
                name: name,
                uid: uid,
                setting: true,
                monitor: 25
              });

              resolve(res);
            })["catch"](function (err) {
              return reject(err);
            });
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  }
}]);
//# sourceMappingURL=default~components-login-login-module~components-register-register-module~home-home-module-es5.js.map