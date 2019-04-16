//
//  CounterViewManager.m
//  TestApp
//
//  Created by Menashe, Or on 10 Nisan 5779.
//  Copyright © 5779 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(CustomViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(count, NSNumber)
@end
