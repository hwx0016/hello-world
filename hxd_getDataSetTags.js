const _ = require('lodash');
const uuidv5 = require('uuid/v5');
const uuidv4 = require('uuid/v4');
// console.log(uuidv4());


const getUUID = (tag, resourceType, tagType) => {
	const nameSpace = 'ddeb27fb-d9a0-4624-be4d-4615062daed4';
	const str = `${tag}${resourceType}${tagType}`;
	console.log(str);
	// return uuidv5('hello word', nameSpace);
	return uuidv4();
};

const dimtions = [{ 'dimMamping': 'tags.manage_yellow.keyword', 'zhCN': 'yellow' },
{ 'dimMamping': 'tags.manage_red.keyword', 'zhCN': 'red' },
{ 'dimMamping': 'tags.manage_black.keyword', 'zhCN': 'black' },
{ 'dimMamping': 'tags.tenant_red.keyword', 'zhCN': 'red' },
{ 'dimMamping': 'tags.tenant_black.keyword', 'zhCN': 'black' }];



const resourceTypes_1 = ['res1', 'res2', 'res3'];

const resourceTypes_2 = ['res1', 'res2', 'res3'];

const getTags = () => {
	const tags = [];
	_.forEach(dimtions, item => {
		const tag = item.zhCN;
		const dimMapping = item.dimMamping;
		_.forEach(resourceTypes_1, resourceType => {
			if (dimMapping.indexOf('tags.manage_') === 0 && dimMapping.indexOf('.keyword') > 0) {
				const uuid = getUUID(tag, resourceType, 'manage');
				tags.push({ uuid, tag, resourceType, tegType: 'manage' });
			} else if (dimMapping.indexOf('tags.tenant_') === 0 && dimMapping.indexOf('.keyword') > 0) {
				const newuuid = getUUID(tag, resourceType, 'tenant');
				tags.push({ uuid: newuuid, tag, resourceType, tagType: 'tenant' });
			}
		});
	});
	console.log(`tags is ${JSON.stringify(tags)}`);

};
console.log(getTags());


const excue1 = () => {
	const arr1 = [{"uuid":"67c4a3bd-7bcc-41cb-9e5e-863b10c93013","tag":"yellow","resourceType":"res1","tegType":"manage"},{"uuid":"a2d03e5f-3e53-4bcc-86f3-0f415e63e3bc","tag":"yellow","resourceType":"res2","tegType":"manage"},{"uuid":"96e99aee-0116-4290-8a8d-01e692cda023","tag":"yellow","resourceType":"res3","tegType":"manage"},{"uuid":"105c8001-28dc-46a5-bf6d-123b6b058420","tag":"red","resourceType":"res1","tegType":"manage"},{"uuid":"6f173e23-a098-4c2d-9a8a-6e4d0663f747","tag":"red","resourceType":"res2","tegType":"manage"},{"uuid":"7d0cf1f3-d14a-46de-88ca-02c64561960f","tag":"red","resourceType":"res3","tegType":"manage"},{"uuid":"ab2f3c72-f3da-489f-b63c-89d4b62a99cd","tag":"black","resourceType":"res1","tegType":"manage"},{"uuid":"0f6903d4-7326-44ae-a615-3b985980600d","tag":"black","resourceType":"res2","tegType":"manage"},{"uuid":"01ed83ef-1fa5-46c4-9fe5-7a7b4b92fefc","tag":"black","resourceType":"res3","tegType":"manage"},{"uuid":"f15bb14a-4c59-4460-94e3-d11f5978eb0e","tag":"red","resourceType":"res1","tagType":"tenant"},{"uuid":"934305e2-3b2e-4a0d-958e-dc1123e8d413","tag":"red","resourceType":"res2","tagType":"tenant"},{"uuid":"d83f4676-3697-45de-903f-188d240a432a","tag":"red","resourceType":"res3","tagType":"tenant"},{"uuid":"af54b037-a041-44aa-9524-3247a728c2a7","tag":"black","resourceType":"res1","tagType":"tenant"},{"uuid":"dfb149e4-bac7-47f1-ac1a-7c1959107bd1","tag":"black","resourceType":"res2","tagType":"tenant"},{"uuid":"fdf87b29-f0e0-4a76-9433-78c36f37602b","tag":"black","resourceType":"res3","tagType":"tenant"}];
	const arr2 = [{"uuid":"67c4a3bd-7bcc-41cb-9e5e-863b10c93013","tag":"yellow","resourceType":"res1","tegType":"manage"},{"uuid":"a2d03e5f-3e53-4bcc-86f3-0f415e63e3bc","tag":"yellow","resourceType":"res2","tegType":"manage"},{"uuid":"96e99aee-0116-4290-8a8d-01e692cda023","tag":"yellow","resourceType":"res3","tegType":"manage"},{"uuid":"105c8001-28dc-46a5-bf6d-123b6b058420","tag":"red","resourceType":"res1","tegType":"manage"},{"uuid":"6f173e23-a098-4c2d-9a8a-6e4d0663f747","tag":"red","resourceType":"res2","tegType":"manage"},{"uuid":"7d0cf1f3-d14a-46de-88ca-02c64561960f","tag":"red","resourceType":"res3","tegType":"manage"},{"uuid":"ab2f3c72-f3da-489f-b63c-89d4b62a99cd","tag":"black","resourceType":"res1","tegType":"manage"},{"uuid":"0f6903d4-7326-44ae-a615-3b985980600d","tag":"black","resourceType":"res2","tegType":"manage"},{"uuid":"01ed83ef-1fa5-46c4-9fe5-7a7b4b92fefc","tag":"black","resourceType":"res3","tegType":"manage"},{"uuid":"f15bb14a-4c59-4460-94e3-d11f5978eb0e","tag":"red","resourceType":"res1","tagType":"tenant"},{"uuid":"934305e2-3b2e-4a0d-958e-dc1123e8d413","tag":"red","resourceType":"res2","tagType":"tenant"},{"uuid":"d83f4676-3697-45de-903f-188d240a432a","tag":"red","resourceType":"res3","tagType":"tenant"},{"uuid":"af54b037-a041-44aa-9524-3247a728c2a7","tag":"black","resourceType":"res1","tagType":"tenant"},{"uuid":"dfb149e4-bac7-47f1-ac1a-7c1959107bd1","tag":"black","resourceType":"res2","tagType":"tenant"},{"uuid":"fdf87b29-f0e0-4a76-9433-78c36f37602b","tag":"black","resourceType":"res3","tagType":"tenant"}];
	const arr3 = [{"uuid":"67c4a3bd-7bcc-41cb-9e5e-863b10c93013","tag":"yellow","resourceType":"res1","tegType":"manage"},{"uuid":"a2d03e5f-3e53-4bcc-86f3-0f415e63e3bc","tag":"yellow","resourceType":"res2","tegType":"manage"},{"uuid":"96e99aee-0116-4290-8a8d-01e692cda023","tag":"yellow","resourceType":"res3","tegType":"manage"},{"uuid":"105c8001-28dc-46a5-bf6d-123b6b058420","tag":"red","resourceType":"res1","tegType":"manage"},{"uuid":"6f173e23-a098-4c2d-9a8a-6e4d0663f747","tag":"red","resourceType":"res2","tegType":"manage"},{"uuid":"7d0cf1f3-d14a-46de-88ca-02c64561960f","tag":"red","resourceType":"res3","tegType":"manage"},{"uuid":"ab2f3c72-f3da-489f-b63c-89d4b62a99cd","tag":"black","resourceType":"res1","tegType":"manage"},{"uuid":"0f6903d4-7326-44ae-a615-3b985980600d","tag":"black","resourceType":"res2","tegType":"manage"},{"uuid":"01ed83ef-1fa5-46c4-9fe5-7a7b4b92fefc","tag":"black","resourceType":"res3","tegType":"manage"},{"uuid":"f15bb14a-4c59-4460-94e3-d11f5978eb0e","tag":"red","resourceType":"res1","tagType":"tenant"},{"uuid":"934305e2-3b2e-4a0d-958e-dc1123e8d413","tag":"red","resourceType":"res2","tagType":"tenant"},{"uuid":"d83f4676-3697-45de-903f-188d240a432a","tag":"red","resourceType":"res3","tagType":"tenant"},{"uuid":"af54b037-a041-44aa-9524-3247a728c2a7","tag":"black","resourceType":"res1","tagType":"tenant"},{"uuid":"dfb149e4-bac7-47f1-ac1a-7c1959107bd1","tag":"black","resourceType":"res2","tagType":"tenant"},{"uuid":"fdf87b29-f0e0-4a76-9433-78c36f37602b","tag":"black","resourceType":"res3","tagType":"tenant"}];
	const allof = [arr1, arr2, arr3];
	var addArr = [];
	_.forEach(allof, item => {
		addArr = addArr.concat(item);
	});
	console.log(addArr);
	const end = [];
	const counts = _.countBy(addArr, 'uuid');
	console.log('counts is : '+ JSON.stringify(counts));
	const uniqArr = _.uniq(addArr);
	console.log('uuiqArr is ' + JSON.stringify(uniqArr));
	for (i in counts) {
		uniqArr.forEach((item) => {
			const uuid = item.uuid;
			const tag = item.tag;
			const resourceType = item.resourceType;
			const tagType = item.tagType;

			if (i === uuid) {
				console.log('counts.i is :'+ counts[uuid]);
				end.push({ uuid, tag, resourceType, tagType, count: counts[uuid] })
			}
		});
	}
	console.log('end : '+JSON.stringify(end));
};

console.log(excue1());
