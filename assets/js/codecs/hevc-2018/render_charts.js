var data_overall_graph = {"title": {"text": "Average bitrate ratio for a fixed quality\u2014YUV-SSIM metric."}, "exporting": {"sourceWidth": 960, "scale": 2, "sourceHeight": 540}, "yAxis": {"title": {"text": "Average relative bitrate"}}, "plotOptions": {"series": {"tooltip": {"pointFormat": "<span style=\"font-size: 11px\">{point.name} quality score is {point.y}%</span>", "headerFormat": "", "valueDecimals": 1}}}, "credits": {"position": {"x": -10, "alignTo": "plotBox", "align": "right", "y": 10, "verticalAlign": "top"}, "href": "http://compression.ru/video/", "enabled": true, "text": "compression.ru/video/", "style": {"color": "#909090", "cursor": "pointer", "fontSize": "15px"}}, "chart": {"type": "bar"}, "annotation": {"xAxis": {"text": "Better", "direction": "inverse"}}, "xAxis": {"title": {"text": "Codec"}, "labels": {"useHTML": true}, "type": "category"}, "legend": {"enabled": false}, "series": [{"data": [{"name": "HW265", "y": 69.32727970768534}, {"name": "Tencent Shannon Encoder", "y": 76.43056708643851}, {"name": "Intel MSDK HEVC (SW)", "y": 81.61040890453397}, {"name": "Kingsoft HEVC Encoder", "y": 82.12883362042183}, {"name": "x265", "y": 86.93829560306872}, {"name": "sz265", "y": 95.26977054988463}, {"name": "sz264", "y": 99.36881391219107}, {"name": "x264", "y": 100.0}, {"name": "UC265", "y": 106.34273060357107}]}]};
var data_rd_graph = {"series": [{"data": [[0.9534194821217021, 0.98082667751024], [1.9214618401449235, 0.9866986079803093], [3.847015881147541, 0.9896218437762535], [5.781494398586085, 0.9907422209046577], [7.7015708704463774, 0.9913934947403727], [9.579181475717514, 0.9918806858136843], [11.504167025206518, 0.9922487478438624]], "marker": {"radius": 4.0, "enabled": true, "symbol": "diamond"}, "lineWidth": 2, "color": "rgb(255,127,0)", "name": "HW265"}, {"data": [[0.9139199725917129, 0.9788044821878111], [1.8216445797779521, 0.9855165143339524], [3.687359856777504, 0.9890395701644036], [5.55212106861052, 0.9904722262560671], [7.395299340857834, 0.9912215980390707], [9.253150908673396, 0.9917833362833236], [11.124748089274423, 0.9921823881281528]], "marker": {"radius": 4.0, "enabled": true, "symbol": "circle"}, "lineWidth": 2, "color": "rgb(178,223,138)", "name": "Intel MSDK HEVC (GA)"}, {"data": [[0.9131058317716004, 0.9781282006004632], [1.8237395364730085, 0.9852194946584968], [3.6908999818270325, 0.9887506977191878], [5.566065624111989, 0.9901798417781545], [7.402102478214952, 0.9909415861968297], [9.258240754487085, 0.9915096379022618], [11.125292738930124, 0.9919221563865253]], "marker": {"radius": 4.0, "fillColor": "rgba(255,255,255,0)", "enabled": true, "symbol": "circle"}, "lineWidth": 2, "color": "rgb(178,223,138)", "name": "Intel MSDK HEVC (SW)"}, {"data": [[0.7994845265247783, 0.9759515694805669], [1.672215539900983, 0.9843462830501014], [3.451034670970479, 0.9886302264010319], [5.2870779741005824, 0.9901508046772148], [7.184057939248007, 0.9909657048356664], [9.101242510998835, 0.9915263091768723], [10.985094406565683, 0.9919374792180099]], "marker": {"radius": 4.0, "enabled": true, "symbol": "triangle-right"}, "lineWidth": 2, "color": "rgb(166,206,227)", "name": "Kingsoft HEVC Encoder"}, {"data": [[0.9431549760161854, 0.9739794146900621], [1.8881489018924902, 0.9835317493747167], [3.786345192643463, 0.9880781104798363], [5.656543129780253, 0.9895376071761377], [7.552750970496506, 0.9903662240265008], [9.427783919162438, 0.9909268191257299], [11.288268253451488, 0.9913814794882887]], "marker": {"radius": 4.0, "fillColor": "rgba(255,255,255,0)", "enabled": true, "symbol": "triangle"}, "lineWidth": 2, "color": "rgb(51,160,44)", "name": "sz264"}, {"data": [[0.8945001930486961, 0.9738978795055808], [1.806667202808818, 0.9828533252874196], [3.6236002796986067, 0.9877585450828562], [5.448116630804344, 0.9894349804870745], [7.2557435661065774, 0.9905679726698359], [9.068309869922576, 0.9912170506810231], [10.877651660168757, 0.9915787591777049]], "marker": {"radius": 4.0, "enabled": true, "symbol": "triangle"}, "lineWidth": 2, "color": "rgb(51,160,44)", "name": "sz265"}, {"data": [[0.924518069282907, 0.9807537870959995], [1.8267604171252643, 0.9864332477760609], [3.6283500858994784, 0.9893690639587699], [5.434154877897169, 0.9904967363557367], [7.034798137477187, 0.991101608708338], [8.752582698571878, 0.991536754962118], [10.475176279662085, 0.991886271967914]], "marker": {"radius": 4.0, "enabled": true, "symbol": "pentagon"}, "lineWidth": 2, "color": "rgb(106,61,154)", "name": "Tencent Shannon Encoder"}, {"data": [[0.8947284495244261, 0.975282103596815], [1.781047758508901, 0.980847807672343], [3.5937299493883477, 0.9867631797195294], [5.383055327368565, 0.9882032032445317], [7.196476615843226, 0.9894255572431238], [8.986737298183755, 0.9899605363912758], [10.771225710384181, 0.9907232572126095]], "marker": {"radius": 4.0, "enabled": true, "symbol": "square"}, "lineWidth": 2, "color": "rgb(0,84,185)", "name": "UC265"}, {"data": [[0.9638913342210114, 0.9710221934269686], [1.93259168843754, 0.9816807832243176], [3.8741342356947603, 0.9868624619834248], [5.806665733212331, 0.9887388497998154], [7.728825827113917, 0.9897828371024849], [9.655263971109859, 0.9904777611315739], [11.582036878241867, 0.9910035676175291]], "marker": {"radius": 4.0, "fillColor": "rgba(255,255,255,0)", "enabled": true, "symbol": "triangle-left"}, "lineWidth": 2, "color": "rgb(227,26,28)", "name": "x264"}, {"data": [[0.9262286248754282, 0.97588599138369], [1.8774683358239346, 0.983600125144251], [3.7968156767673182, 0.9880257918412894], [5.716339291119184, 0.989725872507838], [7.637077472249016, 0.9906810810738573], [9.55371407211804, 0.9913386730528106], [11.460188959465652, 0.9918336502983758]], "marker": {"radius": 4.0, "fillColor": "rgba(255,255,255,0)", "enabled": true, "symbol": "pentagon"}, "lineWidth": 2, "color": "rgb(253,191,111)", "name": "x265"}], "xAxis": {"title": {"text": "Bitrate, Mbps"}}, "credits": {"href": "http://compression.ru/video/", "text": "compression.ru/video/", "style": {"cursor": "pointer", "fontSize": "15px", "color": "#909090"}, "position": {"verticalAlign": "bottom", "align": "right", "alignTo": "plotBox", "y": -10, "x": -10}, "enabled": true}, "exporting": {"sourceWidth": 960, "scale": 2, "sourceHeight": 540}, "annotation": {"yAxis": {"text": "Better"}}, "yAxis": {"title": {"text": "Metric value, SSIM, YUV_O"}}, "chart": {"type": "line"}, "plotOptions": {"series": {"tooltip": {"headerFormat": "<span style=\"color:{series.color}\">\u25cf</span><span style=\"font-size: 11px\">{series.name}</span><br/>", "valueDecimals": 2, "pointFormat": "<span style=\"font-size: 11px\">Bitrate = {point.x:.2f} Mbps, SSIM, YUV_O = {point.y:.4f}</span>"}, "marker": {"radius": 5, "lineColor": null, "lineWidth": 2}}}, "title": {"text": "Bitrate/quality\u2014usecase \u201cUniversal use case,\u201d Forest Dog sequence, YUV-SSIM metric"}};
var data_speed_quality_graph = {"yAxis": {"title": {"text": "Average relative bitrate"}, "reversed": true}, "annotation": {"yAxis": {"text": "Better"}, "xAxis": {"direction": "inverse", "text": "Faster"}}, "xAxis": {"title": {"text": "Relative Encoding Time"}}, "plotOptions": {"series": {"marker": {"lineWidth": 2, "radius": 5, "lineColor": null}, "tooltip": {"headerFormat": "<span style=\"color:{series.color}\">\u25cf</span><span style=\"font-size: 11px\">{series.name}</span><br/>", "pointFormat": "<span style=\"font-size: 11px\">Rel. speed = {point.x:.2f},<br/>Rel. bitrate = {point.y}</span>", "valueDecimals": 2}}}, "exporting": {"sourceWidth": 960, "scale": 2, "sourceHeight": 540}, "title": {"text": "Speed/quality trade-off \u201cUniversal use case,\u201d all sequences"}, "chart": {"type": "scatter"}, "series": [{"lineWidth": 2, "name": "HW265", "marker": {"enabled": true, "radius": 4.0, "symbol": "diamond"}, "data": [[0.991735326190766, 0.7074270854844379]], "color": "rgb(255,127,0)"}, {"lineWidth": 2, "name": "Intel MSDK HEVC (GA)", "marker": {"enabled": true, "radius": 4.0, "symbol": "circle"}, "data": [[0.9092511859872178, 0.7932754830258208]], "color": "rgb(178,223,138)"}, {"lineWidth": 2, "name": "Intel MSDK HEVC (SW)", "marker": {"enabled": true, "radius": 4.0, "symbol": "circle", "fillColor": "rgba(255,255,255,0)"}, "data": [[0.85239682078251, 0.8469075434119234]], "color": "rgb(178,223,138)"}, {"lineWidth": 2, "name": "Kingsoft HEVC Encoder", "marker": {"enabled": true, "radius": 4.0, "symbol": "triangle-right"}, "data": [[0.9953209555538881, 0.8150271910920452]], "color": "rgb(166,206,227)"}, {"lineWidth": 2, "name": "sz264", "marker": {"enabled": true, "radius": 4.0, "symbol": "triangle", "fillColor": "rgba(255,255,255,0)"}, "data": [[0.9265123230791825, 0.9835725901412344]], "color": "rgb(51,160,44)"}, {"lineWidth": 2, "name": "sz265", "marker": {"enabled": true, "radius": 4.0, "symbol": "triangle"}, "data": [[0.9161862930861937, 0.9553888850348311]], "color": "rgb(51,160,44)"}, {"lineWidth": 2, "name": "Tencent Shannon Encoder", "marker": {"enabled": true, "radius": 4.0, "symbol": "pentagon"}, "data": [[0.9253488112486756, 0.7628461237601238]], "color": "rgb(106,61,154)"}, {"lineWidth": 2, "name": "UC265", "marker": {"enabled": true, "radius": 4.0, "symbol": "square"}, "data": [[0.784904585513374, 1.140373469968416]], "color": "rgb(0,84,185)"}, {"lineWidth": 2, "name": "x264", "marker": {"enabled": true, "radius": 4.0, "symbol": "triangle-left", "fillColor": "rgba(255,255,255,0)"}, "data": [[1.0, 1.0]], "color": "rgb(227,26,28)"}, {"lineWidth": 2, "name": "x265", "marker": {"enabled": true, "radius": 4.0, "symbol": "pentagon", "fillColor": "rgba(255,255,255,0)"}, "data": [[0.9695806115408016, 0.8436792909911183]], "color": "rgb(253,191,111)"}], "credits": {"enabled": true, "href": "http://compression.ru/video/", "text": "compression.ru/video/", "position": {"align": "right", "y": -10, "alignTo": "plotBox", "x": -10, "verticalAlign": "bottom"}, "style": {"cursor": "pointer", "color": "#909090", "fontSize": "15px"}}};
var data_subjective_rd_graph = {"title":{"text":"Bitrate/quality\u2014usecase \u201cRipping usecase,\u201d Red Kayak (short) sequence, YUV-Subjective metric"},"annotation":{"yAxis":{"text":"Better"}},"exporting":{"sourceWidth":960,"scale":2,"sourceHeight":540},"plotOptions":{"series":{"marker":{"radius":5,"lineColor":null,"lineWidth":2},"tooltip":{"valueDecimals":2,"headerFormat":"<span style=\"color:{series.color}\">●</span><span style=\"font-size: 11px\">{series.name}</span><br/>","pointFormat":"<span style=\"font-size: 11px\">Bitrate = {point.x:.2f} Mbps, Subjective, YUV_O = {point.y:.4f}</span>"}}},"yAxis":{"title":{"text":"Metric value, Subjective, YUV_O"}},"xAxis":{"title":{"text":"Bitrate, Mbps"}},"credits":{"enabled":true,"href":"http://compression.ru/video/","position":{"alignTo":"plotBox","y":-10,"x":-10,"verticalAlign":"bottom","align":"right"},"text":"compression.ru/video/","style":{"fontSize":"15px","color":"#909090","cursor":"pointer"}},"series":[{"marker":{"enabled":true,"radius":4,"symbol":"triangle-right"},"lineWidth":2,"data":[[0.8636020660400391,1.824011073853765],[1.8175125122070312,3.124239551939087],[3.796690368652344,4.33951219177053]],"name":"Kingsoft HEVC Encoder","color":"rgb(166,206,227)"},{"marker":{"enabled":true,"radius":4,"symbol":"triangle-down","fillColor":"rgba(255,255,255,0)"},"lineWidth":2,"data":[[1.0065773010253907,0.3622626614251909],[1.9343879699707032,0.905940532848913],[3.8031959533691406,3.146040831967014]],"name":"SIF Encoder","color":"rgb(251,154,153)"},{"marker":{"enabled":true,"radius":4,"symbol":"triangle","fillColor":"rgba(255,255,255,0)"},"lineWidth":2,"data":[[0.9530517578125001,0.023944898735091646],[1.8686470031738283,1.9704472210016446],[3.7071147918701173,4.1618443912045215]],"name":"sz264","color":"rgb(51,160,44)"},{"marker":{"enabled":true,"radius":4,"symbol":"triangle"},"lineWidth":2,"data":[[0.9612617492675781,1.325615543631674],[1.9032569885253907,2.612528958606073],[3.761510467529297,4.59187615447334]],"name":"sz265","color":"rgb(51,160,44)"},{"marker":{"enabled":true,"radius":4,"symbol":"pentagon"},"lineWidth":2,"data":[[0.9263904571533204,3.022063153879542],[1.8577308654785156,4.681176851725105],[3.763618850708008,5.045601218397845]],"name":"Tencent Shannon Encoder","color":"rgb(106,61,154)"},{"marker":{"enabled":true,"radius":4,"symbol":"square"},"lineWidth":2,"data":[[0.9349582672119141,0.2699268982260199],[1.8539722442626954,1.0588440989841974],[3.647108840942383,3.109167921215092]],"name":"UC265","color":"rgb(0,84,185)"},{"marker":{"enabled":true,"radius":4,"symbol":"square"},"lineWidth":2,"data":[[0.9754810333251953,2.8302261292054087],[1.9456634521484375,4.005340779526586],[3.889894485473633,5.26096495227173]],"name":"VITEC HEVC GEN2+ Encoder","color":"rgb(251,154,153)"},{"marker":{"enabled":true,"radius":4,"symbol":"star"},"lineWidth":2,"data":[[0.9568607330322266,2.0501376776985194],[1.9046951293945313,3.7847466661685956],[3.807368850708008,5.244108271293149]],"name":"VP9","color":"rgb(255,127,0)"},{"marker":{"enabled":true,"radius":4,"symbol":"triangle-left","fillColor":"rgba(255,255,255,0)"},"lineWidth":2,"data":[[0.9262168884277344,0],[1.8455955505371096,1.377788149919439],[3.640803146362305,3.8874231579222505]],"name":"x264","color":"rgb(227,26,28)"},{"marker":{"enabled":true,"radius":4,"symbol":"pentagon","fillColor":"rgba(255,255,255,0)"},"lineWidth":2,"data":[[0.900570297241211,1.9883242778494392],[1.7293399810791017,3.7285138722331856],[3.3304927825927737,4.919271721457045]],"name":"x265","color":"rgb(253,191,111)"}],"chart":{"type":"line"}};
var data_subjective_sq_graph = {"title":{"text":"Speed/quality trade-off \u201cRipping usecase,\u201d Crowd Run (short) sequence"},"annotation":{"yAxis":{"text":"Better"},"xAxis":{"text":"Faster","direction":"inverse"}},"exporting":{"sourceWidth":960,"scale":2,"sourceHeight":540},"plotOptions":{"series":{"marker":{"radius":5,"lineColor":null,"lineWidth":2},"tooltip":{"valueDecimals":2,"headerFormat":"<span style=\"color:{series.color}\">●</span><span style=\"font-size: 11px\">{series.name}</span><br/>","pointFormat":"<span style=\"font-size: 11px\">Rel. speed = {point.x:.2f},<br/>Rel. bitrate = {point.y}</span>"}}},"yAxis":{"title":{"text":"Average relative bitrate"},"reversed":true},"xAxis":{"title":{"text":"Relative Encoding Time"}},"credits":{"enabled":true,"href":"http://compression.ru/video/","position":{"alignTo":"plotBox","y":-10,"x":-10,"verticalAlign":"bottom","align":"right"},"text":"compression.ru/video/","style":{"fontSize":"15px","color":"#909090","cursor":"pointer"}},"series":[{"marker":{"enabled":true,"radius":4,"symbol":"triangle-right"},"lineWidth":2,"data":[[1.0157326908539068,0.9264119922331878]],"name":"Kingsoft HEVC Encoder","color":"rgb(166,206,227)"},{"marker":{"enabled":true,"radius":4,"symbol":"triangle-down","fillColor":"rgba(255,255,255,0)"},"lineWidth":2,"data":[[0.49121018055627735,1.2106758356663345]],"name":"SIF Encoder","color":"rgb(251,154,153)"},{"marker":{"enabled":true,"radius":4,"symbol":"triangle","fillColor":"rgba(255,255,255,0)"},"lineWidth":2,"data":[[5.66983479847454,0.9567271277371917]],"name":"sz264","color":"rgb(51,160,44)"},{"marker":{"enabled":true,"radius":4,"symbol":"triangle"},"lineWidth":2,"data":[[1.9962724243960037,0.8983677514277036]],"name":"sz265","color":"rgb(51,160,44)"},{"marker":{"enabled":true,"radius":4,"symbol":"pentagon"},"lineWidth":2,"data":[[0.7699960368164352,0.8309794719789779]],"name":"Tencent Shannon Encoder","color":"rgb(106,61,154)"},{"marker":{"enabled":true,"radius":4,"symbol":"square"},"lineWidth":2,"data":[[0.6936970758769418,1.1241961807474892]],"name":"UC265","color":"rgb(0,84,185)"},{"marker":{"enabled":true,"radius":4,"symbol":"square"},"lineWidth":2,"data":[[0.056799190285925664,0.8180982900775293]],"name":"VITEC HEVC GEN2+ Encoder","color":"rgb(251,154,153)"},{"marker":{"enabled":true,"radius":4,"symbol":"star"},"lineWidth":2,"data":[[3.6716768877034665,0.6313313257240923]],"name":"VP9","color":"rgb(255,127,0)"},{"marker":{"enabled":true,"radius":4,"symbol":"triangle-left","fillColor":"rgba(255,255,255,0)"},"lineWidth":2,"data":[[1,1]],"name":"x264","color":"rgb(227,26,28)"},{"marker":{"enabled":true,"radius":4,"symbol":"pentagon","fillColor":"rgba(255,255,255,0)"},"lineWidth":2,"data":[[1.4476770195866167,0.7679482739061071]],"name":"x265","color":"rgb(253,191,111)"}],"chart":{"type":"scatter"}};
var data_4k_rd_graph = {"chart":{"type":"line"},"title":{"text":"Bitrate/quality\u2014usecase \u201c4K encoding,\u201d House Demolition sequence, YUV-SSIM metric"},"xAxis":{"title":{"text":"Bitrate, Mbps"}},"yAxis":{"title":{"text":"Metric value, SSIM, YUV_O"}},"plotOptions":{"series":{"marker":{"lineWidth":2,"radius":5,"lineColor":null},"tooltip":{"valueDecimals":2,"headerFormat":"<span style=\"color:{series.color}\">●</span><span style=\"font-size: 11px\">{series.name}</span><br/>","pointFormat":"<span style=\"font-size: 11px\">Bitrate = {point.x:.2f} Mbps, SSIM, YUV_O = {point.y:.4f}</span>"}}},"credits":{"enabled":true,"href":"http://compression.ru/video/","text":"compression.ru/video/","position":{"align":"right","x":-10,"verticalAlign":"bottom","y":-10,"alignTo":"plotBox"},"style":{"cursor":"pointer","color":"#909090","fontSize":"15px"}},"exporting":{"sourceWidth":960,"sourceHeight":540,"scale":2},"series":[{"name":"HW265","data":[[1.8284638117569159,0.9296459205929759],[3.617324273770494,0.9489767880093122],[5.3953051593776244,0.9573156617668058],[8.989905670268538,0.9659219951427621],[12.56362910767285,0.9704051783176979],[16.137016527062702,0.9734389522196686],[17.921798765859574,0.9746402167270504]],"color":"rgb(255,127,0)","lineWidth":2,"marker":{"enabled":true,"symbol":"diamond","radius":4}},{"name":"sz264","data":[[1.947136096164067,0.8866620089534772],[3.832846638336694,0.9325831451603795],[5.725816041064289,0.9486681035691654],[9.50382574408212,0.9619327357241181],[13.280316573908722,0.9681996096644484],[17.050580690048577,0.9720887853199086],[18.93316390666556,0.9735827556616249]],"color":"rgb(51,160,44)","lineWidth":2,"marker":{"enabled":true,"symbol":"triangle","radius":4,"fillColor":"rgba(255,255,255,0)"}},{"name":"sz265","data":[[1.8550589583889234,0.9211552394620072],[3.6725159374890644,0.9436775058919523],[5.472967739468325,0.9532295729451858],[9.05453262243666,0.9625579812614363],[12.636405714148237,0.9676653414564197],[16.223375463539114,0.9710468294105231],[18.01812162324536,0.9723572377595229]],"color":"rgb(51,160,44)","lineWidth":2,"marker":{"enabled":true,"symbol":"triangle","radius":4}},{"name":"Tencent Shannon Encoder","data":[[1.9066819365053935,0.9316366468905602],[3.813676438967031,0.9508708821009592],[5.722610926441223,0.9589953587577164],[9.54036661385155,0.9669638833822978],[13.336301250393687,0.9711039256987264],[17.151030853374007,0.9739178219541057],[19.06283174623701,0.9751341215217678]],"color":"rgb(106,61,154)","lineWidth":2,"marker":{"enabled":true,"symbol":"pentagon","radius":4}},{"name":"x264","data":[[1.9234648957631624,0.8937251643653501],[3.8183546760448017,0.9354261448519939],[5.709867488096436,0.9504312242910729],[9.486762385352328,0.9627351829557553],[13.256561945694157,0.9687993453927518],[17.024108442453894,0.9727047605773058],[18.905067315694332,0.9742054955511673]],"color":"rgb(227,26,28)","lineWidth":2,"marker":{"enabled":true,"symbol":"triangle-left","radius":4,"fillColor":"rgba(255,255,255,0)"}},{"name":"x265","data":[[1.8209943952912846,0.9161289515069013],[3.628333541340417,0.9397614491757905],[5.4197902615366695,0.9499323986034066],[8.980640825739366,0.9600456882074905],[12.535305813472188,0.9655649810250724],[16.081379274237996,0.9692349459485093],[17.85911769375689,0.9707012054590024]],"color":"rgb(253,191,111)","lineWidth":2,"marker":{"enabled":true,"symbol":"pentagon","radius":4,"fillColor":"rgba(255,255,255,0)"}}],"annotation":{"yAxis":{"text":"Better"}}};
var data_4k_sq_graph = {"chart":{"type":"scatter"},"title":{"text":"Speed/quality trade-off \u201c4K encoding,\u201d Ducks Take Off sequence"},"xAxis":{"title":{"text":"Relative Encoding Time"}},"yAxis":{"title":{"text":"Average relative bitrate"},"reversed":true},"plotOptions":{"series":{"marker":{"lineWidth":2,"radius":5,"lineColor":null},"tooltip":{"valueDecimals":2,"headerFormat":"<span style=\"color:{series.color}\">●</span><span style=\"font-size: 11px\">{series.name}</span><br/>","pointFormat":"<span style=\"font-size: 11px\">Rel. speed = {point.x:.2f},<br/>Rel. bitrate = {point.y}</span>"}}},"credits":{"enabled":true,"href":"http://compression.ru/video/","text":"compression.ru/video/","position":{"align":"right","x":-10,"verticalAlign":"bottom","y":-10,"alignTo":"plotBox"},"style":{"cursor":"pointer","color":"#909090","fontSize":"15px"}},"annotation":{"xAxis":{"text":"Faster","direction":"inverse"},"yAxis":{"text":"Better"}},"exporting":{"sourceWidth":960,"sourceHeight":540,"scale":2},"series":[{"name":"HW265","data":[[1.2737599590558897,0.4524436295773685]],"color":"rgb(255,127,0)","lineWidth":2,"marker":{"enabled":true,"symbol":"diamond","radius":4}},{"name":"sz264","data":[[0.960550598306218,1.0708531429776658]],"color":"rgb(51,160,44)","lineWidth":2,"marker":{"enabled":true,"symbol":"triangle","radius":4,"fillColor":"rgba(255,255,255,0)"}},{"name":"sz265","data":[[1.0887063860258919,0.46240650689406587]],"color":"rgb(51,160,44)","lineWidth":2,"marker":{"enabled":true,"symbol":"triangle","radius":4}},{"name":"Tencent Shannon Encoder","data":[[1.443855130146477,0.43216749838862484]],"color":"rgb(106,61,154)","lineWidth":2,"marker":{"enabled":true,"symbol":"pentagon","radius":4}},{"name":"x264","data":[[1,1]],"color":"rgb(227,26,28)","lineWidth":2,"marker":{"enabled":true,"symbol":"triangle-left","radius":4,"fillColor":"rgba(255,255,255,0)"}},{"name":"x265","data":[[1.2975791778428776,0.5485426309269238]],"color":"rgb(253,191,111)","lineWidth":2,"marker":{"enabled":true,"symbol":"pentagon","radius":4,"fillColor":"rgba(255,255,255,0)"}}]};
var data_4k_overall_graph = {"chart":{"type":"bar"},"title":{"text":"Average bitrate ratio for a fixed quality\u2014usecase \u201c4K encoding,\u201d YUV-SSIM metric."},"xAxis":{"title":{"text":"Codec"},"type":"category","labels":{"useHTML":true}},"yAxis":{"title":{"text":"Average relative bitrate"}},"plotOptions":{"series":{"tooltip":{"valueDecimals":1,"headerFormat":"","pointFormat":"<span style=\"font-size: 11px\">{point.name} quality score is {point.y}%</span>"}}},"credits":{"enabled":true,"href":"http://compression.ru/video/","text":"compression.ru/video/","position":{"align":"right","x":-10,"verticalAlign":"top","y":10,"alignTo":"plotBox"},"style":{"cursor":"pointer","color":"#909090","fontSize":"15px"}},"legend":{"enabled":false},"annotation":{"xAxis":{"text":"Better","direction":"inverse"}},"exporting":{"sourceWidth":960,"sourceHeight":540,"scale":2},"series":[{"data":[{"name":"HW265","y":54.30840670761391},{"name":"Tencent Shannon Encoder","y":55.23150188077102},{"name":"sz265","y":62.44830540240718},{"name":"x265","y":70.00468908528545},{"name":"x264","y":100},{"name":"sz264","y":108.45452277618801}]}]};
var data_hq_rd_graph = {"yAxis":{"title":{"text":"Metric value, SSIM, YUV_O"}},"credits":{"text":"compression.ru/video/","position":{"align":"right","y":-10,"x":-10,"verticalAlign":"bottom","alignTo":"plotBox"},"href":"http://compression.ru/video/","style":{"color":"#909090","fontSize":"15px","cursor":"pointer"},"enabled":true},"title":{"text":"Bitrate/quality-usecase \"High quality use case,\" Fire sequence, YUV-SSIM metric"},"series":[{"marker":{"symbol":"pentagon","radius":4,"enabled":true},"name":"AV1","color":"rgb(255,127,0)","data":[[11.888249503594272,0.9937067659312463],[9.133202144984597,0.9923531037532682],[7.183202213534897,0.9911256312199982],[5.4433451317709425,0.989731365584428],[4.400421815386628,0.9887034760305635],[3.553100750966001,0.9876660938832869],[2.3780416529904587,0.9858238116543093],[1.6467327682825177,0.9841060577765215],[1.1686559921493151,0.9822160374833953],[0.8632228299107608,0.9800151805215193]],"lineWidth":2},{"marker":{"fillColor":"rgba(255,255,255,0)","symbol":"triangle-down","radius":4,"enabled":true},"name":"SIF Encoder","color":"rgb(251,154,153)","data":[[1.2895079500068247,0.9705515565702932],[1.9924125734859222,0.976745793836618],[3.6703576264087854,0.981377366312464],[5.476287359405874,0.983680569441267],[7.282931158030887,0.9850224913059177],[9.168015541927193,0.9860011270095161],[11.029832176678195,0.9867954241257539]],"lineWidth":2},{"marker":{"fillColor":"rgba(255,255,255,0)","symbol":"triangle","radius":4,"enabled":true},"name":"sz264","color":"rgb(51,160,44)","data":[[0.9530081725160215,0.9629715104534173],[1.9070465037112627,0.9779121711627021],[3.8151837823394934,0.984593671573511],[5.722073508975114,0.9871962107160126],[7.627864526631234,0.9888422010147234],[9.535479426582326,0.990101584281382],[11.441672859890094,0.9911371416108051]],"lineWidth":2},{"marker":{"symbol":"triangle","radius":4,"enabled":true},"name":"sz265","color":"rgb(51,160,44)","data":[[0.9041425987408682,0.9763468221796927],[1.8194538186274831,0.9823955091680346],[3.6300567144562126,0.9863172008868264],[5.427030477666618,0.9883429420966277],[7.211548397426003,0.9897627305039022],[8.991630224142218,0.9908763686948131],[10.765233095394397,0.9917072320705115]],"lineWidth":2},{"marker":{"symbol":"star","radius":4,"enabled":true},"name":"VP9","color":"rgb(255,127,0)","data":[[0.9537320763814867,0.9760869672182065],[1.9052327770163338,0.982326193643952],[3.8081519813981908,0.9865792158141905],[5.711772556907921,0.9888250541667176],[7.611124289412666,0.9904211898578646],[9.509864781739907,0.9917079560041295],[11.404736942538804,0.992747725345529]],"lineWidth":2},{"marker":{"fillColor":"rgba(255,255,255,0)","symbol":"triangle-left","radius":4,"enabled":true},"name":"x264","color":"rgb(227,26,28)","data":[[0.9520345043620334,0.9622749098624644],[1.9068291103978723,0.9779533742535994],[3.8152948592149483,0.9845786868401918],[5.718101717271345,0.9872466730727663],[7.617281756662887,0.9888960379762115],[9.515993051640008,0.9901530705289053],[11.414909045430468,0.9911968962258917]],"lineWidth":2},{"marker":{"fillColor":"rgba(255,255,255,0)","symbol":"pentagon","radius":4,"enabled":true},"name":"x265","color":"rgb(253,191,111)","data":[[0.9419030238705349,0.9752417134200608],[1.8915503274977903,0.9822145250361954],[3.7720951581755022,0.9865163943202907],[5.679536778200883,0.9887595011403808],[7.586236722060726,0.9902098355727001],[9.408085358123019,0.9912108730026833],[11.359080221014294,0.992063960133826]],"lineWidth":2}],"plotOptions":{"series":{"marker":{"lineColor":null,"lineWidth":2,"radius":5},"tooltip":{"valueDecimals":2,"headerFormat":"<span style=\"color:{series.color}\">●</span><span style=\"font-size: 11px\">{series.name}</span><br/>","pointFormat":"<span style=\"font-size: 11px\">Bitrate = {point.x:.2f} Mbps, SSIM, YUV_O = {point.y:.4f}</span>"}}},"chart":{"type":"line"},"exporting":{"sourceWidth":960,"scale":2,"sourceHeight":540},"annotation":{"yAxis":{"text":"Better"}},"xAxis":{"title":{"text":"Bitrate, Mbps"}}};
var data_hq_sq_graph = {"yAxis":{"title":{"text":"Average relative bitrate"},"reversed":true},"credits":{"text":"compression.ru/video/","position":{"align":"right","y":-10,"x":-10,"verticalAlign":"bottom","alignTo":"plotBox"},"href":"http://compression.ru/video/","style":{"color":"#909090","fontSize":"15px","cursor":"pointer"},"enabled":true},"title":{"text":"Speed/quality trade-off \"High quality use case,\" Bay Time-Lapse sequence"},"series":[{"marker":{"symbol":"pentagon","radius":4,"enabled":true},"name":"AV1","color":"rgb(255,127,0)","data":[[277.8694732796245,0.8647680262135795]],"lineWidth":2},{"marker":{"fillColor":"rgba(255,255,255,0)","symbol":"triangle-down","radius":4,"enabled":true},"name":"SIF Encoder","color":"rgb(251,154,153)","data":[[0.7590953315277671,2.6765664913597074]],"lineWidth":2},{"marker":{"fillColor":"rgba(255,255,255,0)","symbol":"triangle","radius":4,"enabled":true},"name":"sz264","color":"rgb(51,160,44)","data":[[26.59993504251225,0.9886354993455774]],"lineWidth":2},{"marker":{"symbol":"triangle","radius":4,"enabled":true},"name":"sz265","color":"rgb(51,160,44)","data":[[102.96030735338955,0.8260820319005824]],"lineWidth":2},{"marker":{"symbol":"star","radius":4,"enabled":true},"name":"VP9","color":"rgb(255,127,0)","data":[[16.111145692992654,1.0609776520287384]],"lineWidth":2},{"marker":{"fillColor":"rgba(255,255,255,0)","symbol":"triangle-left","radius":4,"enabled":true},"name":"x264","color":"rgb(227,26,28)","data":[[1,1]],"lineWidth":2},{"marker":{"fillColor":"rgba(255,255,255,0)","symbol":"pentagon","radius":4,"enabled":true},"name":"x265","color":"rgb(253,191,111)","data":[[14.537636679616206,0.810625791668192]],"lineWidth":2}],"plotOptions":{"series":{"marker":{"lineColor":null,"lineWidth":2,"radius":5},"tooltip":{"valueDecimals":2,"headerFormat":"<span style=\"color:{series.color}\">●</span><span style=\"font-size: 11px\">{series.name}</span><br/>","pointFormat":"<span style=\"font-size: 11px\">Rel. speed = {point.x:.2f},<br/>Rel. bitrate = {point.y}</span>"}}},"chart":{"type":"scatter"},"exporting":{"sourceWidth":960,"scale":2,"sourceHeight":540},"annotation":{"yAxis":{"text":"Better"},"xAxis":{"text":"Faster","direction":"inverse"}},"xAxis":{"title":{"text":"Relative Encoding Time"}}};
var data_hq_overall_graph = {"yAxis":{"title":{"text":"Average relative bitrate"}},"credits":{"text":"compression.ru/video/","position":{"align":"right","y":10,"x":-10,"verticalAlign":"top","alignTo":"plotBox"},"href":"http://compression.ru/video/","style":{"color":"#909090","fontSize":"15px","cursor":"pointer"},"enabled":true},"title":{"text":"Average bitrate ratio for a fixed quality YUV-SSIM metric."},"series":[{"data":[{"y":52.66981130229521,"name":"AV1"},{"y":68.08347598480074,"name":"VP9"},{"y":68.79119288447703,"name":"x265"},{"y":70.49266284901665,"name":"sz265"},{"y":97.94352360334389,"name":"sz264"},{"y":100,"name":"x264"},{"y":234.36282575271733,"name":"SIF Encoder"}]}],"plotOptions":{"series":{"tooltip":{"valueDecimals":1,"headerFormat":"","pointFormat":"<span style=\"font-size: 11px\">{point.name} quality score is {point.y}%</span>"}}},"legend":{"enabled":false},"chart":{"type":"bar"},"exporting":{"sourceWidth":960,"scale":2,"sourceHeight":540},"annotation":{"xAxis":{"text":"Better","direction":"inverse"}},"xAxis":{"title":{"text":"Codec"},"labels":{"useHTML":true},"type":"category"}};
var renderCharts = function() {
    // Main report
    $('#container_rd_graph').highcharts(data_rd_graph);
    $('#container_speed_quality_graph').highcharts(data_speed_quality_graph);
    $('#container_overall_graph').highcharts(data_overall_graph);
    // Subjective report
    $('#container_subjective_rd_graph').highcharts(data_subjective_rd_graph);
    $('#container_subjective_sq_graph').highcharts(data_subjective_sq_graph);
    // 4K report
    $('#container_4k_rd_graph').highcharts(data_4k_rd_graph);
    $('#container_4k_sq_graph').highcharts(data_4k_sq_graph);
    $('#container_4k_overall_graph').highcharts(data_4k_overall_graph);
    // High quality report
    $('#container_hq_rd_graph').highcharts(data_hq_rd_graph);
    $('#container_hq_sq_graph').highcharts(data_hq_sq_graph);
    $('#container_hq_overall_graph').highcharts(data_hq_overall_graph);

}
$(function () { 
    renderCharts();
});