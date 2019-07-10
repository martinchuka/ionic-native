
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

@Plugin({
  pluginName: 'DnD',
  plugin: 'io.electrosoft.dnd',
  pluginRef: 'cordova.plugins.DnD',
  repo: 'https://github.com/martinchuka/cordova-plugin-dnd',
  platforms: ['Android']
})
@Injectable()
export class DnD extends IonicNativePlugin {

  @Cordova()
  on(arg1: string): Promise<any> {
    return;
  }
  @Cordova()
  off(arg1: string): Promise<any> {
    return;
  }
  @Cordova()
  alarm(arg1: string): Promise<any> {
    return;
  }
  @Cordova()
  priority(arg1: string): Promise<any> {
    return;
  }

}
