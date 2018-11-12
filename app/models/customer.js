import DS from 'ember-data';
import {attr, hasMany} from '@ember-decorators/data'
const { Model } = DS;

export default class CustomerModel extends Model {
  @attr('string') name;
  @attr('string') email;
  @hasMany('premise') premises;
}
