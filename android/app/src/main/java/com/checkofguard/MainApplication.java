package com.checkofguard;

import android.content.Context;
import android.app.Application;
import com.abtguard.modules.GuardNativeModule;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactNativeHost;
import com.facebook.soloader.SoLoader;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new DefaultReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }

        @Override
        protected boolean isNewArchEnabled() {
          return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
        }

        @Override
        protected Boolean isHermesEnabled() {
          return BuildConfig.IS_HERMES_ENABLED;
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() { 
    super.onCreate();
    new Thread(new Runnable() {
      public void run() {
          try {
              //GUARD-INIT
              GuardNativeModule guardNativeModule = new GuardNativeModule(getApplicationContext());
              guardNativeModule.initGuard(null);

              // telefon ayarlarından font size değiştirildiğinde uygulamanın etkilenmemesi için eklendi.
/*               adjustFontScale(getApplicationContext(), getResources().getConfiguration());

              boolean screenRecordFlag = new ScreenRecordEvent().isScreenRecord();
              ((MainApplication) getApplicationContext()).setScreenRecordFlag(screenRecordFlag); */
          } catch (Exception ex) {
          }
      }
  }).start();
  }
}


