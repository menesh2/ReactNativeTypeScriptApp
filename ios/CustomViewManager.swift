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
    let label = UILabel()
    label.text = "Swift Counter"
    label.textAlignment = .center
    return label
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
