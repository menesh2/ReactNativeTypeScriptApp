//
//  CustomView.swift
//  TestApp
//
//  Created by Menashe, Or on 11 Nisan 5779.
//  Copyright © 5779 Facebook. All rights reserved.
//

import UIKit

class CustomView: UIView {

  @objc var count: NSNumber = 0 {
    didSet {
      button.setTitle(String(describing: count), for: .normal)
    }
  }
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.addSubview(button)
    increment()
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  lazy var button: UIButton = {
    let b = UIButton.init(type: UIButton.ButtonType.system)
    b.titleLabel?.font = UIFont.systemFont(ofSize: 50)
    b.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    b.addTarget(
      self,
      action: #selector(increment),
      for: .touchUpInside
    )
    return b
  }()
  
  @objc func increment() {
     count = count.intValue + 1 as NSNumber
  }
}
