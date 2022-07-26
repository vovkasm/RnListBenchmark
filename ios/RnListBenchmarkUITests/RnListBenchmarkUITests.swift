import XCTest

class RnListBenchmarkUITests: XCTestCase {

  override func setUpWithError() throws {
    // Put setup code here. This method is called before the invocation of each test method in the class.

    // In UI tests it is usually best to stop immediately when a failure occurs.
    continueAfterFailure = false

    // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
  }

  override func tearDownWithError() throws {
    // Put teardown code here. This method is called after the invocation of each test method in the class.
  }

  func testLaunchPerformance() throws {
    if #available(macOS 10.15, iOS 13.0, tvOS 13.0, watchOS 7.0, *) {
      let app = XCUIApplication()
      app.launch()

      app.buttons["fill_data"].tap()
      let list = app.scrollViews.firstMatch
      wait(for: [XCTNSPredicateExpectation(predicate: NSPredicate(format:"exists == true"), object: list)], timeout: TimeInterval(2))

      let lastLabel = list.staticTexts["id9999"]

      while !lastLabel.exists {
        list.swipeUp(velocity: XCUIGestureVelocity(5000.0))
      }

//      measure(metrics: [XCTCPUMetric(application: app), XCTMemoryMetric(application: app)]) {
//        app.buttons["fill_data"].tap();
//      }
    }
  }
}
