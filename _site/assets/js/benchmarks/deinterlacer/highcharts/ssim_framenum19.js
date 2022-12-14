$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {
            
            chart: {
                zoomType: 'xy',
            },
            credits: {
                text: 'videoprocessing.ai',
                href: 'https://videoprocessing.ai/'
            },
            title: {
                text: 'SSIM to Frame Number: Sequence # 19'
            },
            subtitle: {
                text: ''
            },
            yAxis: {
                title: {
                    text: 'SSIM'
                }
            },
            xAxis: {
                title: {
                        text: 'Frame Number'
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
		data: [0.994, 0.992, 0.99, 0.994, 0.993, 0.993, 0.994, 0.995, 0.995, 0.995, 0.993, 0.993, 0.989, 0.991, 0.991, 0.992, 0.991, 0.989, 0.987, 0.992, 0.991, 0.987, 0.984, 0.985, 0.988, 0.987, 0.988, 0.987, 0.989, 0.988]
},{
		name: 'ST-Deint',
		data: [0.994, 0.993, 0.992, 0.994, 0.994, 0.993, 0.994, 0.995, 0.995, 0.995, 0.994, 0.994, 0.994, 0.992, 0.994, 0.993, 0.992, 0.99, 0.988, 0.992, 0.994, 0.988, 0.984, 0.986, 0.989, 0.988, 0.99, 0.995, 0.99, 0.989]
},{
		name: 'PAL Interpolation',
		data: [0.988, 0.919, 0.908, 0.921, 0.924, 0.91, 0.915, 0.914, 0.926, 0.929, 0.928, 0.912, 0.907, 0.909, 0.906, 0.905, 0.908, 0.909, 0.906, 0.907, 0.906, 0.902, 0.901, 0.893, 0.894, 0.892, 0.891, 0.896, 0.898, 0.895]
},{
		name: 'SonyVegas Blend Field',
		data: [0.9, 0.893, 0.93, 0.899, 0.896, 0.939, 0.902, 0.921, 0.901, 0.901, 0.897, 0.925, 0.893, 0.879, 0.921, 0.877, 0.895, 0.892, 0.902, 0.901, 0.902, 0.896, 0.905, 0.898, 0.904, 0.914, 0.915, 0.983, 0.913, 0.914]
},{
		name: 'Vapoursynth EEDI3',
		data: [0.994, 0.993, 0.99, 0.994, 0.994, 0.992, 0.994, 0.995, 0.995, 0.995, 0.993, 0.993, 0.989, 0.992, 0.991, 0.992, 0.991, 0.989, 0.987, 0.992, 0.991, 0.987, 0.984, 0.984, 0.987, 0.987, 0.988, 0.987, 0.989, 0.988]
},{
		name: 'TDAN',
		data: [0.973, 0.988, 0.976, 0.984, 0.981, 0.984, 0.993, 0.987, 0.984, 0.984, 0.989, 0.98, 0.975, 0.985, 0.985, 0.987, 0.968, 0.982, 0.977, 0.979, 0.982, 0.979, 0.983, 0.985, 0.987, 0.987, 0.988, 0.995, 0.989, 0.965]
},{
		name: 'Bob',
		data: [0.993, 0.992, 0.989, 0.994, 0.993, 0.991, 0.993, 0.994, 0.995, 0.995, 0.992, 0.992, 0.987, 0.991, 0.99, 0.992, 0.99, 0.988, 0.986, 0.99, 0.99, 0.984, 0.982, 0.982, 0.985, 0.985, 0.986, 0.985, 0.987, 0.986]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [0.965, 0.96, 0.957, 0.962, 0.961, 0.963, 0.958, 0.961, 0.963, 0.963, 0.959, 0.957, 0.946, 0.953, 0.956, 0.947, 0.949, 0.948, 0.947, 0.95, 0.949, 0.947, 0.942, 0.942, 0.944, 0.945, 0.944, 0.989, 0.947, 0.947]
},{
		name: 'DfRes SA',
		data: [0.995, 0.994, 0.992, 0.994, 0.994, 0.995, 0.995, 0.995, 0.996, 0.996, 0.994, 0.994, 0.99, 0.992, 0.993, 0.993, 0.992, 0.991, 0.989, 0.993, 0.992, 0.989, 0.99, 0.989, 0.992, 0.991, 0.99, 0.996, 0.993, 0.977]
},{
		name: 'DfRes 122000 G2e 3',
		data: [0.994, 0.993, 0.991, 0.994, 0.994, 0.995, 0.995, 0.995, 0.995, 0.995, 0.993, 0.994, 0.989, 0.992, 0.993, 0.993, 0.992, 0.99, 0.989, 0.992, 0.992, 0.988, 0.989, 0.989, 0.991, 0.991, 0.99, 0.996, 0.992, 0.98]
},{
		name: 'SwinDI',
		data: [0.993, 0.992, 0.99, 0.993, 0.993, 0.992, 0.993, 0.994, 0.994, 0.994, 0.992, 0.992, 0.988, 0.991, 0.991, 0.992, 0.991, 0.989, 0.987, 0.991, 0.991, 0.987, 0.985, 0.985, 0.988, 0.988, 0.988, 0.988, 0.99, 0.989]
},{
		name: 'YADIF',
		data: [0.989, 0.988, 0.985, 0.991, 0.99, 0.987, 0.989, 0.991, 0.992, 0.993, 0.989, 0.988, 0.981, 0.987, 0.985, 0.988, 0.986, 0.984, 0.982, 0.987, 0.986, 0.981, 0.978, 0.978, 0.981, 0.98, 0.981, 0.982, 0.982, 0.979]
},{
		name: 'SonyVegas Interpolate Field',
		data: [0.993, 0.992, 0.989, 0.994, 0.993, 0.991, 0.993, 0.994, 0.995, 0.995, 0.992, 0.992, 0.987, 0.991, 0.99, 0.992, 0.99, 0.988, 0.986, 0.99, 0.99, 0.984, 0.982, 0.982, 0.985, 0.985, 0.986, 0.985, 0.987, 0.986]
},{
		name: 'EDVR',
		data: [0.977, 0.986, 0.965, 0.983, 0.981, 0.982, 0.99, 0.981, 0.984, 0.986, 0.989, 0.974, 0.979, 0.986, 0.986, 0.986, 0.959, 0.985, 0.978, 0.975, 0.984, 0.983, 0.986, 0.985, 0.988, 0.988, 0.987, 0.996, 0.989, 0.959]
},{
		name: 'MFDIN L',
		data: [0.995, 0.994, 0.992, 0.994, 0.994, 0.995, 0.995, 0.995, 0.995, 0.995, 0.994, 0.994, 0.99, 0.992, 0.993, 0.993, 0.992, 0.991, 0.991, 0.993, 0.993, 0.99, 0.991, 0.991, 0.993, 0.992, 0.991, 0.996, 0.993, 0.992]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [0.796, 0.782, 0.867, 0.755, 0.767, 0.899, 0.8, 0.819, 0.747, 0.747, 0.752, 0.848, 0.792, 0.732, 0.854, 0.731, 0.788, 0.771, 0.783, 0.802, 0.816, 0.802, 0.822, 0.813, 0.837, 0.861, 0.855, 0.988, 0.854, 0.856]
},{
		name: 'MSU Deinterlacer',
		data: [0.988, 0.985, 0.98, 0.988, 0.985, 0.986, 0.984, 0.986, 0.99, 0.99, 0.985, 0.983, 0.978, 0.98, 0.983, 0.981, 0.982, 0.981, 0.981, 0.984, 0.984, 0.981, 0.983, 0.982, 0.985, 0.985, 0.982, 0.99, 0.987, 0.98]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [0.962, 0.962, 0.961, 0.961, 0.961, 0.967, 0.963, 0.962, 0.961, 0.961, 0.959, 0.962, 0.951, 0.955, 0.959, 0.952, 0.955, 0.953, 0.952, 0.956, 0.956, 0.954, 0.95, 0.95, 0.952, 0.955, 0.953, 0.987, 0.956, 0.955]
},{
		name: 'Vapoursynth TDeintMod',
		data: [0.994, 0.992, 0.99, 0.994, 0.993, 0.992, 0.993, 0.994, 0.995, 0.995, 0.993, 0.993, 0.988, 0.991, 0.99, 0.991, 0.99, 0.989, 0.987, 0.991, 0.991, 0.985, 0.983, 0.983, 0.986, 0.986, 0.986, 0.987, 0.988, 0.987]
},{
		name: 'DfRes',
		data: [0.994, 0.992, 0.991, 0.994, 0.994, 0.993, 0.993, 0.995, 0.996, 0.996, 0.993, 0.993, 0.989, 0.992, 0.991, 0.992, 0.991, 0.99, 0.988, 0.992, 0.99, 0.987, 0.989, 0.988, 0.991, 0.99, 0.989, 0.995, 0.992, 0.99]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [0.993, 0.988, 0.986, 0.989, 0.99, 0.988, 0.988, 0.989, 0.99, 0.992, 0.989, 0.988, 0.982, 0.987, 0.986, 0.986, 0.985, 0.983, 0.981, 0.985, 0.985, 0.98, 0.977, 0.977, 0.98, 0.98, 0.98, 0.984, 0.981, 0.981]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [0.989, 0.989, 0.988, 0.989, 0.991, 0.99, 0.989, 0.99, 0.991, 0.993, 0.991, 0.991, 0.985, 0.988, 0.987, 0.987, 0.987, 0.985, 0.983, 0.985, 0.986, 0.982, 0.98, 0.977, 0.98, 0.981, 0.982, 0.988, 0.982, 0.982]
},{
		name: 'FLAD',
		data: [0.995, 0.994, 0.992, 0.995, 0.995, 0.995, 0.995, 0.996, 0.996, 0.996, 0.994, 0.994, 0.991, 0.993, 0.994, 0.993, 0.993, 0.992, 0.99, 0.993, 0.993, 0.99, 0.991, 0.991, 0.993, 0.992, 0.991, 0.996, 0.994, 0.992]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [0.992, 0.992, 0.99, 0.994, 0.993, 0.993, 0.993, 0.994, 0.995, 0.995, 0.993, 0.993, 0.988, 0.991, 0.991, 0.992, 0.99, 0.988, 0.987, 0.991, 0.99, 0.986, 0.984, 0.984, 0.986, 0.986, 0.986, 0.99, 0.988, 0.987]
},{
		name: 'DUF',
		data: [0.983, 0.988, 0.98, 0.985, 0.98, 0.987, 0.99, 0.987, 0.986, 0.985, 0.987, 0.982, 0.979, 0.984, 0.983, 0.984, 0.973, 0.981, 0.978, 0.979, 0.982, 0.981, 0.983, 0.985, 0.988, 0.987, 0.987, 0.994, 0.989, 0.959]
},{
		name: 'EDVR_woTSA',
		data: [0.974, 0.982, 0.975, 0.984, 0.981, 0.981, 0.991, 0.986, 0.985, 0.987, 0.99, 0.98, 0.981, 0.988, 0.984, 0.989, 0.966, 0.985, 0.982, 0.98, 0.987, 0.986, 0.986, 0.985, 0.987, 0.987, 0.988, 0.996, 0.99, 0.959]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [0.796, 0.744, 0.941, 0.738, 0.96, 0.836, 0.965, 0.793, 0.972, 0.745, 0.965, 0.796, 0.964, 0.701, 0.968, 0.695, 0.968, 0.724, 0.966, 0.747, 0.962, 0.749, 0.953, 0.753, 0.956, 0.799, 0.951, 0.958, 0.969, 0.793]
},{
		name: 'MFDIN',
		data: [0.982, 0.979, 0.977, 0.98, 0.98, 0.983, 0.981, 0.982, 0.983, 0.982, 0.98, 0.98, 0.972, 0.977, 0.977, 0.978, 0.978, 0.977, 0.976, 0.979, 0.977, 0.976, 0.977, 0.975, 0.977, 0.976, 0.974, 0.989, 0.979, 0.976]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [0.993, 0.992, 0.989, 0.993, 0.993, 0.992, 0.993, 0.993, 0.994, 0.994, 0.992, 0.992, 0.988, 0.99, 0.99, 0.991, 0.99, 0.988, 0.986, 0.991, 0.99, 0.985, 0.983, 0.984, 0.986, 0.986, 0.986, 0.988, 0.988, 0.987]
},{
		name: 'Muksun Deinterlacer',
		data: [0.962, 0.962, 0.961, 0.961, 0.961, 0.967, 0.963, 0.962, 0.961, 0.961, 0.959, 0.962, 0.951, 0.955, 0.959, 0.952, 0.955, 0.953, 0.952, 0.956, 0.956, 0.954, 0.95, 0.95, 0.952, 0.955, 0.953, 0.987, 0.956, 0.955]
},{
		name: 'Kernel Deinterlacer',
		data: [0.993, 0.975, 0.972, 0.973, 0.976, 0.979, 0.971, 0.972, 0.975, 0.976, 0.975, 0.973, 0.967, 0.968, 0.975, 0.961, 0.968, 0.966, 0.964, 0.968, 0.969, 0.964, 0.959, 0.96, 0.963, 0.965, 0.963, 0.985, 0.965, 0.965]
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