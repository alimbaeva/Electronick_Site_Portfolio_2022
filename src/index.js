import Post from "./Post";
import json from '@/asset/json.json';
import xml from '@@/data.xml';
import csv from './asset/data.csv';
import person from './asset/SamsungGalaxyS22.png';
import './bable';
import './syles/styles.css';
import './syles/less.less';
import './syles/scss.scss';

const post = new Post('Webpack Post Title Asel', person);

console.log('Post to String: ', post.toString());

const worn = 42;

console.log('JSON: ', json);
console.log('XML: ', xml)
console.log('CSV===: ', csv)