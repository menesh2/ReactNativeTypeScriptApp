//
//  CustomViewManager.swift
//  TestApp
//
//  Created by Menashe, Or on 10 Nisan 5779.
//  Copyright © 5779 Facebook. All rights reserved.
//

import Foundation
@objc (CustomViewManager)

class CustomViewManager: RCTViewManager {
  override func view() -> UIView! {
    return CustomView()
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
