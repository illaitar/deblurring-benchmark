$(function () {
    $(document).ready(function() {
            Highcharts.chart('vidnum_plot', {
            
            chart: {
                zoomType: 'xy',
            },
            credits: {
                text: 'videoprocessing.ai',
                href: 'https://videoprocessing.ai/'
            },
            title: {
                text: 'Mean VMAF to Sequence Number'
            },
            subtitle: {
                text: ''
            },
            yAxis: {
                title: {
                    text: 'VMAF'
                }
            },
            xAxis: {
                title: {
                        text: 'Sequence Number'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'middle'
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },series: [{
		name: 'NNEDI',
		data: [99.87035369873047, 91.76808166503906, 99.77607727050781, 99.90560913085938, 99.77214050292969, 99.07877349853516, 88.76454162597656, 86.3855209350586, 99.85302734375, 97.80392456054688, 95.91411590576172, 57.40816116333008, 94.69599151611328, 99.80623626708984, 96.1583023071289, 93.44475555419922, 94.1287612915039, 97.46585083007812, 98.80089569091797, 99.83889770507812, 90.77867889404297, 90.19206237792969, 99.78854370117188, 98.53903198242188, 97.96517181396484, 87.5064468383789, 75.9615478515625, 79.52827453613281]
},{
		name: 'ST-Deint',
		data: [99.60211944580078, 91.31085205078125, 99.71766662597656, 99.85415649414062, 99.7736587524414, 98.18272399902344, 95.58155822753906, 88.56059265136719, 99.86338806152344, 96.6738052368164, 97.07941436767578, 58.694969177246094, 99.80974578857422, 99.67804718017578, 96.41241455078125, 97.40046691894531, 92.06240844726562, 98.37427520751953, 98.03710174560547, 99.76007080078125, 91.75252532958984, 88.88705444335938, 97.26036071777344, 98.16273498535156, 97.07410430908203, 94.24754333496094, 87.76991271972656, 82.8785629272461]
},{
		name: 'PAL Interpolation',
		data: [84.741943359375, 75.7600326538086, 86.68573760986328, 95.66986846923828, 93.09773254394531, 92.62176513671875, 72.76923370361328, 70.78426361083984, 99.57616424560547, 85.35066986083984, 89.95036315917969, 38.806602478027344, 84.59809875488281, 85.7239761352539, 84.39128875732422, 96.05304718017578, 78.99146270751953, 82.6590576171875, 95.92579650878906, 88.24736022949219, 74.13521575927734, 68.1492919921875, 95.78089904785156, 95.83875274658203, 83.33541870117188, 88.30049896240234, 64.10631561279297, 62.484004974365234]
},{
		name: 'SonyVegas Blend Field',
		data: [58.87162399291992, 40.36247253417969, 36.62958908081055, 37.9969482421875, 32.125064849853516, 35.59791946411133, 55.523216247558594, 67.63843536376953, 28.926239013671875, 37.04291534423828, 73.71458435058594, 16.592575073242188, 94.50648498535156, 44.869590759277344, 68.63276672363281, 56.88251495361328, 17.556991577148438, 46.64442825317383, 67.50704956054688, 32.29207992553711, 56.03589630126953, 24.34686279296875, 81.94184112548828, 71.1501693725586, 36.87742614746094, 68.2799072265625, 60.54230499267578, 31.544965744018555]
},{
		name: 'Vapoursynth EEDI3',
		data: [99.55294698079427, 88.26162974039714, 99.29482905069987, 100.0, 100.0, 96.8670778910319, 83.39307988484701, 84.14578170776367, 100.0, 95.88086293538412, 93.78884531656901, 57.52959518432617, 65.07790336608886, 99.72513173421224, 95.08645782470703, 91.75919748942057, 91.64965082804362, 94.43741149902344, 94.19950307210287, 99.40704116821288, 78.25034866333007, 86.1219357808431, 99.64999059041341, 97.44519805908203, 96.07062301635742, 86.12236938476562, 72.60187530517578, 77.10588912963867]
},{
		name: 'TDAN',
		data: [99.34962539672851, 87.86902796427408, 93.78686014811198, 91.63053588867187, 97.38147303263347, 91.24186503092447, 96.19976145426432, 89.90956446329753, 100.0, 90.37942759195964, 95.82254587809244, 41.027445220947264, 78.6690060933431, 99.5891118367513, 92.33816426595052, 94.87410380045573, 74.18272349039714, 97.44037119547527, 96.56523615519205, 95.08838450113932, 89.64071858723959, 77.58076833089193, 97.76336161295573, 97.72261149088541, 93.12317708333333, 95.49275131225586, 88.43240152994791, 73.4307118733724]
},{
		name: 'Bob',
		data: [98.55410207112631, 84.49135258992513, 98.37745946248373, 99.89750010172526, 99.3799929300944, 93.82852172851562, 78.07026189168295, 78.39208424886068, 100.0, 91.56042658487955, 90.51841379801432, 54.468630981445315, 62.446816762288414, 97.06886774698893, 93.73325220743816, 90.23406448364258, 87.35337626139322, 91.04454549153645, 91.77191645304362, 97.56051610310872, 75.21887435913087, 82.35098495483399, 97.62412821451822, 95.5730473836263, 88.96981658935547, 81.70490417480468, 68.85379053751628, 73.71739374796549]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [94.54828643798828, 83.49835205078125, 88.74714660644531, 98.3683853149414, 98.75916290283203, 94.45987701416016, 80.09397888183594, 80.8026351928711, 99.69873809814453, 90.56053924560547, 94.97319793701172, 46.85185623168945, 99.13014221191406, 95.42465209960938, 88.7593765258789, 95.9337158203125, 84.05182647705078, 92.45355224609375, 98.29156494140625, 95.84274291992188, 87.38233947753906, 79.45577239990234, 97.03641510009766, 97.70506286621094, 89.58817291259766, 88.77342987060547, 74.74053955078125, 72.77078247070312]
},{
		name: 'DfRes SA',
		data: [99.60304183959961, 90.72145105997721, 99.3169682820638, 100.0, 100.0, 98.78323694864909, 96.77430903116861, 93.36766789754232, 100.0, 96.27196985880533, 97.45751520792643, 57.833801142374675, 96.44850514729818, 99.81754455566406, 94.78517430623373, 97.35527725219727, 93.72701746622721, 99.12943267822266, 97.43574701944986, 99.72375793457032, 96.94760716756186, 85.19200261433919, 97.98527475992839, 98.60207036336263, 99.72655537923177, 97.04736862182617, 95.97606252034505, 84.91535364786783]
},{
		name: 'DfRes 122000 G2e 3',
		data: [99.50597076416015, 89.64816538492839, 99.22818247477214, 100.0, 100.0, 98.55233637491862, 96.4749989827474, 92.97995529174804, 100.0, 96.13386789957683, 97.21316630045573, 56.210762405395506, 95.93838221232096, 99.86006927490234, 94.86465606689453, 97.38557968139648, 92.42812271118164, 98.91438954671224, 97.3377805074056, 99.77101567586263, 96.55013936360677, 84.94950586954752, 97.94048309326172, 98.91194178263346, 99.59719975789388, 96.7225341796875, 94.52167205810547, 84.10807952880859]
},{
		name: 'SwinDI',
		data: [99.85549926757812, 93.36101531982422, 99.74114227294922, 99.90757751464844, 99.80729675292969, 99.33296966552734, 89.61968231201172, 87.49101257324219, 99.84555053710938, 97.80412292480469, 98.94544219970703, 64.18146514892578, 99.91239166259766, 99.81230163574219, 95.25067901611328, 96.90621948242188, 96.9003677368164, 99.31328582763672, 99.21099090576172, 99.8446044921875, 96.00494384765625, 88.87957763671875, 99.77425384521484, 98.80482482910156, 99.6284408569336, 89.88976287841797, 96.34635925292969, 81.1325912475586]
},{
		name: 'YADIF',
		data: [97.37082468668619, 84.59286193847656, 95.27416076660157, 98.57803624471029, 99.63531010945638, 94.42012736002604, 86.19208958943685, 82.35051803588867, 100.0, 91.92175496419271, 94.61944478352865, 44.69560216267904, 60.79280840555827, 94.85072402954101, 92.8652104695638, 97.5485237121582, 81.99334309895833, 93.81439361572265, 93.86391576131184, 96.74743270874023, 70.35229034423828, 77.19658533732097, 97.68926391601562, 97.11502126057943, 89.4542241414388, 89.3943692525228, 69.77994155883789, 69.61595077514649]
},{
		name: 'SonyVegas Interpolate Field',
		data: [99.63711547851562, 86.74243927001953, 99.464111328125, 99.73175048828125, 99.55024719238281, 95.48798370361328, 80.59098815917969, 79.10132598876953, 99.74565124511719, 93.76420593261719, 90.5993881225586, 54.62472152709961, 90.86550903320312, 99.52709197998047, 94.3968276977539, 90.08345031738281, 89.7698745727539, 93.0406265258789, 96.8997802734375, 99.42131042480469, 88.57189178466797, 85.6076431274414, 98.02739715576172, 96.50071716308594, 93.00669860839844, 82.3195571899414, 71.64061737060547, 75.5066909790039]
},{
		name: 'EDVR',
		data: [96.87501653035481, 89.08894475301106, 91.38511301676432, 97.27676188151041, 97.11818262736003, 93.89575449625652, 96.27417831420898, 90.9855967203776, 100.0, 91.87519861857096, 97.13153889973958, 47.3553466796875, 93.95920384724936, 99.21612879435222, 92.66442108154297, 95.72795333862305, 90.44692687988281, 97.38942413330078, 97.16110636393229, 95.68517354329427, 96.6726079305013, 84.68524017333985, 97.63309478759766, 98.14082768758138, 99.20626017252604, 96.40110804239909, 93.2985850016276, 80.99746538798014]
},{
		name: 'MFDIN L',
		data: [99.87039184570312, 95.33966064453125, 99.75067901611328, 99.9005126953125, 99.80076599121094, 99.26477813720703, 99.14582824707031, 96.53500366210938, 99.8355712890625, 98.22112274169922, 97.80966186523438, 63.54386901855469, 99.69847106933594, 99.85962677001953, 96.18553924560547, 98.35697174072266, 99.57256317138672, 99.57633209228516, 98.93976593017578, 99.85580444335938, 98.27201843261719, 96.4094009399414, 98.71329498291016, 99.25863647460938, 99.79132080078125, 98.5129623413086, 99.79566955566406, 96.18633270263672]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [62.733070373535156, 45.81684494018555, 39.985496520996094, 45.89689636230469, 37.296199798583984, 41.54228973388672, 68.28262329101562, 78.32099151611328, 31.450637817382812, 41.84040451049805, 85.05489349365234, 22.50005531311035, 99.91407012939453, 51.67097091674805, 76.27173614501953, 69.86896514892578, 22.09724998474121, 53.0267333984375, 71.37409210205078, 36.742313385009766, 68.49095153808594, 29.883333206176758, 95.94048309326172, 79.8769302368164, 45.43706512451172, 88.87628936767578, 80.45970153808594, 40.42338562011719]
},{
		name: 'MSU Deinterlacer',
		data: [98.60555419921874, 85.5028917948405, 95.014230855306, 99.53751703898112, 99.2953707377116, 96.0786496480306, 94.00506820678712, 89.98423639933269, 100.0, 92.74934285481771, 95.95474192301432, 53.00388056437175, 72.60502548217774, 98.6409189860026, 92.17073287963868, 97.55499064127604, 95.45553461710612, 94.47544301350912, 96.18037490844726, 97.98983205159506, 90.22575861612955, 86.70724894205729, 97.12347844441732, 98.34979298909505, 97.80678304036458, 94.40167872111003, 85.75007502237956, 84.77029546101888]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [95.37036895751953, 85.88497161865234, 90.45899963378906, 98.39942169189453, 99.09880065917969, 95.32930755615234, 77.77796173095703, 78.73529815673828, 99.70256805419922, 91.55709075927734, 92.50857543945312, 43.59507751464844, 86.84666442871094, 93.78682708740234, 90.09044647216797, 91.97370910644531, 85.54134368896484, 89.4216079711914, 97.01520538330078, 96.6257553100586, 78.73648834228516, 80.15636444091797, 97.13278198242188, 96.87793731689453, 90.24899291992188, 76.4078369140625, 65.23582458496094, 67.91582489013672]
},{
		name: 'Vapoursynth TDeintMod',
		data: [99.80437850952148, 88.759592183431, 99.46315561930338, 100.0, 100.0, 96.9569798787435, 87.5381696065267, 83.97267583211263, 100.0, 96.05752970377604, 94.68636169433594, 56.526406606038414, 65.63351262410482, 99.90365498860677, 96.25086898803711, 97.42019399007161, 91.11722259521484, 97.77326838175456, 97.52157135009766, 99.73863525390625, 79.03050740559895, 86.90080134073894, 97.40120010375976, 97.97212575276693, 94.7885373433431, 90.44128723144532, 74.75219802856445, 78.8154401143392]
},{
		name: 'DfRes',
		data: [99.10274937947591, 89.26154912312826, 98.98168919881185, 100.0, 100.0, 98.14690424601237, 95.72824681599936, 92.44555384318033, 100.0, 95.27376937866211, 96.04352645874023, 57.89522094726563, 74.2479955037435, 99.86874338785807, 93.25930353800456, 93.91537017822266, 97.31929829915364, 94.19998397827149, 95.27477137247722, 99.71104405721029, 84.85641555786133, 87.34462000528971, 97.84740422566732, 98.60024922688802, 99.9325782775879, 93.78022791544596, 90.22408345540364, 86.66815388997396]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [99.62224578857422, 86.54922485351562, 99.2171401977539, 99.67678833007812, 99.5484619140625, 95.55489349365234, 84.181884765625, 80.95014190673828, 99.74518585205078, 93.4963150024414, 91.92190551757812, 54.22640609741211, 90.19204711914062, 99.50253295898438, 92.9731216430664, 95.16557312011719, 88.90713500976562, 93.81502532958984, 97.64535522460938, 99.29789733886719, 88.35575103759766, 85.36483001708984, 98.16472625732422, 97.39510345458984, 94.13739776611328, 86.50666809082031, 73.08876037597656, 75.98966979980469]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [99.07430674235026, 85.62548548380533, 98.88758112589518, 99.95207824707032, 99.88554712931315, 95.23436431884765, 89.6918935139974, 83.24667612711589, 100.0, 93.456702931722, 93.69162165323893, 54.41426124572754, 66.64723154703776, 98.98595835367838, 94.34606374104818, 92.575021870931, 88.28026479085287, 93.20178044637045, 93.88846232096354, 98.79103444417318, 77.10234400431315, 84.21005477905274, 99.04618072509766, 97.12696584065755, 92.18300247192383, 89.81779505411784, 74.1576550801595, 75.98184585571289]
},{
		name: 'FLAD',
		data: [99.72592264811198, 92.18040339152019, 99.56244761149088, 100.0, 100.0, 98.63892110188802, 96.99966532389323, 94.83520177205403, 100.0, 97.14098409016927, 97.50266672770182, 63.89549738566081, 88.8532699584961, 99.98661448160807, 95.68225275675455, 98.14752146402995, 99.22889099121093, 98.6315694173177, 97.3716328938802, 99.94394302368164, 92.88557383219401, 89.19659779866537, 98.73210957845052, 98.95815531412761, 100.0, 97.60714823404948, 97.05102055867513, 90.66271718343098]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [99.79824905395508, 88.19046198527018, 99.2307512919108, 99.87718149820964, 99.98938725789388, 97.15117009480794, 92.15042572021484, 86.31502049763998, 100.0, 96.05953445434571, 95.98809382120768, 52.70830408732096, 67.97292683919271, 99.78713912963867, 95.64872868855794, 96.97026596069335, 88.28197072347005, 97.70163040161133, 96.59974670410156, 99.77352396647136, 81.46884562174479, 85.255837504069, 98.8476557413737, 98.16885274251302, 94.14769083658854, 92.45645573933919, 78.11565831502278, 78.00023727416992]
},{
		name: 'DUF',
		data: [97.60500920613607, 87.91799596150716, 94.43366775512695, 96.1653439839681, 97.56148096720378, 94.679345703125, 95.85169347127278, 90.37630157470703, 100.0, 91.00455754597982, 96.52596918741862, 44.534506479899086, 87.02089195251465, 99.24149271647136, 93.18976313273112, 95.76851857503256, 82.32843551635742, 97.88932851155599, 97.02958526611329, 96.22942326863607, 95.16408615112304, 80.41519622802734, 97.66348012288411, 97.87114944458008, 95.44487889607747, 95.27908681233724, 90.8787041982015, 76.58171132405599]
},{
		name: 'EDVR_woTSA',
		data: [94.94400533040364, 89.19353713989258, 94.56896692911783, 99.7795425415039, 98.0635154724121, 95.74985885620117, 96.48123499552409, 90.96534576416016, 100.0, 90.14711201985678, 97.27929331461588, 46.875932693481445, 94.8283696492513, 99.33629430135092, 94.73693135579427, 95.8475830078125, 92.92190450032552, 98.52619043986003, 97.0524289449056, 96.54877039591472, 96.69965464274088, 85.890074412028, 97.39461313883463, 98.28662389119467, 99.37749506632487, 96.42678349812826, 93.720543162028, 81.52479807535808]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [68.34546661376953, 49.978851318359375, 53.14748001098633, 63.26491165161133, 58.05162811279297, 52.87153625488281, 69.8392105102539, 75.90314483642578, 58.98533630371094, 52.24142074584961, 86.40586853027344, 33.179447174072266, 90.32427978515625, 61.55105972290039, 76.0220718383789, 74.83927154541016, 31.652708053588867, 58.486385345458984, 81.43968963623047, 53.59971618652344, 73.31828308105469, 45.274635314941406, 95.11337280273438, 80.00513458251953, 50.89181900024414, 87.24945831298828, 78.82646942138672, 43.40163803100586]
},{
		name: 'MFDIN',
		data: [99.01322937011719, 91.43501281738281, 90.26114654541016, 99.8014144897461, 99.58849334716797, 96.6934814453125, 96.72787475585938, 90.96565246582031, 99.68013000488281, 96.19302368164062, 96.88903045654297, 55.526214599609375, 99.31758880615234, 99.16218566894531, 88.62639617919922, 96.78861236572266, 96.72254180908203, 96.84101867675781, 98.0073471069336, 99.64115142822266, 94.46907043457031, 88.7671890258789, 97.34477233886719, 98.8675308227539, 99.48597717285156, 97.21398162841797, 93.53592681884766, 87.17144775390625]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [99.60214818318686, 89.46383183797201, 99.3326291402181, 100.0, 100.0, 98.2235112508138, 90.3938585917155, 85.321449025472, 100.0, 96.63103942871093, 96.19490585327148, 56.04244486490885, 67.29607772827148, 99.80465621948242, 95.17292607625326, 94.55225448608398, 91.30010096232097, 95.37011922200521, 96.71655832926432, 99.8234987894694, 76.07457936604818, 86.65969365437826, 98.61475168863932, 98.27714640299479, 95.80066223144532, 88.07666778564453, 74.33294906616212, 77.90771687825521]
},{
		name: 'Muksun Deinterlacer',
		data: [95.37036895751953, 85.88497161865234, 90.45899963378906, 98.39942169189453, 99.09880065917969, 95.32930755615234, 77.77796173095703, 78.73529815673828, 99.70256805419922, 91.55709075927734, 92.50857543945312, 43.59507751464844, 86.84666442871094, 93.78682708740234, 90.09044647216797, 91.97370910644531, 85.54134368896484, 89.4216079711914, 97.01520538330078, 96.6257553100586, 78.73648834228516, 80.15636444091797, 97.13278198242188, 96.87793731689453, 90.24899291992188, 76.4078369140625, 65.23582458496094, 67.91582489013672]
},{
		name: 'Kernel Deinterlacer',
		data: [98.93309783935547, 86.2622299194336, 93.12495422363281, 99.09297943115234, 99.5484619140625, 95.27488708496094, 84.98241424560547, 80.98014831542969, 99.74518585205078, 92.17613983154297, 91.7258071899414, 53.622169494628906, 90.25680541992188, 98.51876831054688, 90.17507934570312, 95.15768432617188, 87.12706756591797, 93.86382293701172, 97.56813049316406, 98.57876586914062, 88.33148956298828, 84.87052154541016, 97.52604675292969, 97.8155746459961, 93.51045227050781, 88.3018798828125, 73.91278839111328, 76.01985931396484]
},],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        });
    });

});