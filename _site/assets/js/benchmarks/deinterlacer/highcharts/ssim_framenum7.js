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
                text: 'SSIM to Frame Number: Sequence # 7'
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
		data: [0.974, 0.972, 0.969, 0.967, 0.966, 0.968, 0.971, 0.967, 0.967, 0.966, 0.967, 0.967, 0.969, 0.967, 0.967, 0.968, 0.967, 0.967, 0.969, 0.966, 0.965, 0.966, 0.965, 0.966, 0.968, 0.966, 0.969, 0.969, 0.966, 0.97]
},{
		name: 'ST-Deint',
		data: [0.969, 0.974, 0.968, 0.967, 0.975, 0.971, 0.967, 0.973, 0.969, 0.972, 0.975, 0.971, 0.967, 0.977, 0.971, 0.965, 0.974, 0.976, 0.97, 0.967, 0.979, 0.966, 0.975, 0.98, 0.975, 0.965, 0.983, 0.98, 0.977, 0.972]
},{
		name: 'PAL Interpolation',
		data: [0.965, 0.9, 0.899, 0.898, 0.901, 0.918, 0.9, 0.901, 0.903, 0.903, 0.937, 0.926, 0.922, 0.924, 0.945, 0.918, 0.91, 0.938, 0.913, 0.915, 0.938, 0.948, 0.927, 0.939, 0.952, 0.916, 0.947, 0.949, 0.947, 0.944]
},{
		name: 'SonyVegas Blend Field',
		data: [0.924, 0.902, 0.918, 0.92, 0.95, 0.939, 0.915, 0.948, 0.932, 0.942, 0.95, 0.94, 0.946, 0.957, 0.953, 0.943, 0.953, 0.955, 0.944, 0.939, 0.957, 0.943, 0.955, 0.96, 0.953, 0.944, 0.964, 0.961, 0.957, 0.952]
},{
		name: 'Vapoursynth EEDI3',
		data: [0.974, 0.972, 0.969, 0.968, 0.967, 0.969, 0.971, 0.968, 0.968, 0.967, 0.968, 0.968, 0.97, 0.968, 0.967, 0.968, 0.968, 0.968, 0.969, 0.966, 0.966, 0.966, 0.966, 0.967, 0.968, 0.967, 0.969, 0.969, 0.967, 0.97]
},{
		name: 'TDAN',
		data: [0.973, 0.972, 0.967, 0.967, 0.976, 0.97, 0.975, 0.974, 0.971, 0.978, 0.977, 0.98, 0.983, 0.986, 0.982, 0.976, 0.983, 0.983, 0.982, 0.983, 0.986, 0.982, 0.983, 0.987, 0.984, 0.983, 0.99, 0.986, 0.985, 0.978]
},{
		name: 'Bob',
		data: [0.97, 0.968, 0.964, 0.963, 0.962, 0.963, 0.967, 0.962, 0.962, 0.961, 0.962, 0.962, 0.964, 0.963, 0.962, 0.963, 0.962, 0.962, 0.964, 0.961, 0.96, 0.961, 0.961, 0.962, 0.963, 0.961, 0.964, 0.964, 0.962, 0.965]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [0.939, 0.934, 0.932, 0.934, 0.961, 0.951, 0.933, 0.959, 0.946, 0.954, 0.967, 0.956, 0.957, 0.969, 0.969, 0.951, 0.964, 0.968, 0.951, 0.952, 0.971, 0.953, 0.968, 0.972, 0.968, 0.954, 0.977, 0.975, 0.972, 0.97]
},{
		name: 'DfRes SA',
		data: [0.987, 0.987, 0.984, 0.985, 0.987, 0.986, 0.988, 0.988, 0.986, 0.986, 0.987, 0.99, 0.991, 0.992, 0.991, 0.989, 0.991, 0.991, 0.991, 0.991, 0.992, 0.99, 0.991, 0.992, 0.992, 0.99, 0.993, 0.993, 0.991, 0.976]
},{
		name: 'DfRes 122000 G2e 3',
		data: [0.986, 0.987, 0.984, 0.984, 0.986, 0.986, 0.987, 0.987, 0.985, 0.986, 0.986, 0.989, 0.991, 0.991, 0.991, 0.988, 0.99, 0.991, 0.991, 0.991, 0.992, 0.99, 0.99, 0.992, 0.991, 0.99, 0.993, 0.993, 0.991, 0.976]
},{
		name: 'SwinDI',
		data: [0.977, 0.975, 0.972, 0.971, 0.97, 0.972, 0.974, 0.971, 0.971, 0.97, 0.971, 0.97, 0.973, 0.971, 0.97, 0.971, 0.971, 0.971, 0.972, 0.97, 0.969, 0.97, 0.97, 0.97, 0.971, 0.97, 0.972, 0.972, 0.97, 0.973]
},{
		name: 'YADIF',
		data: [0.967, 0.967, 0.963, 0.961, 0.963, 0.962, 0.967, 0.963, 0.961, 0.965, 0.966, 0.965, 0.968, 0.973, 0.967, 0.963, 0.969, 0.967, 0.967, 0.968, 0.972, 0.967, 0.97, 0.975, 0.969, 0.966, 0.977, 0.973, 0.972, 0.974]
},{
		name: 'SonyVegas Interpolate Field',
		data: [0.97, 0.968, 0.964, 0.963, 0.962, 0.963, 0.966, 0.962, 0.962, 0.961, 0.962, 0.962, 0.964, 0.963, 0.962, 0.963, 0.962, 0.962, 0.964, 0.961, 0.96, 0.961, 0.961, 0.961, 0.963, 0.961, 0.964, 0.964, 0.962, 0.965]
},{
		name: 'EDVR',
		data: [0.981, 0.981, 0.977, 0.975, 0.98, 0.979, 0.983, 0.982, 0.98, 0.982, 0.982, 0.983, 0.987, 0.988, 0.985, 0.983, 0.984, 0.986, 0.985, 0.987, 0.988, 0.986, 0.986, 0.988, 0.987, 0.987, 0.991, 0.99, 0.987, 0.934]
},{
		name: 'MFDIN L',
		data: [0.992, 0.992, 0.99, 0.991, 0.992, 0.992, 0.993, 0.992, 0.992, 0.993, 0.992, 0.993, 0.993, 0.994, 0.993, 0.992, 0.994, 0.993, 0.994, 0.993, 0.994, 0.993, 0.993, 0.994, 0.993, 0.992, 0.994, 0.994, 0.993, 0.993]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [0.9, 0.872, 0.901, 0.905, 0.957, 0.936, 0.888, 0.952, 0.928, 0.946, 0.957, 0.942, 0.949, 0.968, 0.962, 0.943, 0.96, 0.964, 0.943, 0.942, 0.971, 0.946, 0.967, 0.974, 0.958, 0.949, 0.98, 0.974, 0.969, 0.956]
},{
		name: 'MSU Deinterlacer',
		data: [0.973, 0.983, 0.981, 0.978, 0.983, 0.983, 0.984, 0.983, 0.981, 0.983, 0.984, 0.984, 0.985, 0.987, 0.986, 0.984, 0.985, 0.986, 0.986, 0.984, 0.986, 0.985, 0.985, 0.987, 0.987, 0.985, 0.988, 0.988, 0.987, 0.976]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [0.953, 0.948, 0.948, 0.948, 0.959, 0.954, 0.948, 0.958, 0.952, 0.955, 0.96, 0.956, 0.959, 0.963, 0.962, 0.956, 0.96, 0.961, 0.955, 0.954, 0.961, 0.955, 0.96, 0.962, 0.961, 0.956, 0.967, 0.966, 0.964, 0.964]
},{
		name: 'Vapoursynth TDeintMod',
		data: [0.971, 0.968, 0.964, 0.963, 0.962, 0.963, 0.966, 0.962, 0.962, 0.961, 0.963, 0.963, 0.966, 0.964, 0.964, 0.963, 0.962, 0.963, 0.964, 0.961, 0.963, 0.964, 0.963, 0.964, 0.966, 0.962, 0.968, 0.968, 0.965, 0.969]
},{
		name: 'DfRes',
		data: [0.99, 0.99, 0.987, 0.988, 0.99, 0.989, 0.991, 0.99, 0.988, 0.989, 0.99, 0.991, 0.991, 0.992, 0.991, 0.99, 0.992, 0.992, 0.992, 0.991, 0.992, 0.99, 0.991, 0.992, 0.992, 0.991, 0.992, 0.993, 0.991, 0.989]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [0.97, 0.964, 0.96, 0.96, 0.958, 0.962, 0.962, 0.958, 0.958, 0.957, 0.967, 0.962, 0.964, 0.963, 0.969, 0.96, 0.959, 0.965, 0.959, 0.958, 0.966, 0.965, 0.963, 0.966, 0.971, 0.96, 0.971, 0.971, 0.969, 0.972]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [0.95, 0.957, 0.957, 0.957, 0.962, 0.96, 0.955, 0.96, 0.955, 0.958, 0.968, 0.962, 0.961, 0.966, 0.967, 0.957, 0.962, 0.967, 0.957, 0.955, 0.969, 0.964, 0.965, 0.969, 0.97, 0.957, 0.973, 0.972, 0.969, 0.969]
},{
		name: 'FLAD',
		data: [0.99, 0.992, 0.989, 0.989, 0.99, 0.991, 0.991, 0.991, 0.991, 0.991, 0.991, 0.991, 0.993, 0.994, 0.994, 0.992, 0.994, 0.993, 0.994, 0.993, 0.994, 0.993, 0.993, 0.994, 0.993, 0.993, 0.994, 0.995, 0.994, 0.991]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [0.965, 0.967, 0.961, 0.96, 0.969, 0.965, 0.968, 0.965, 0.965, 0.971, 0.971, 0.972, 0.974, 0.979, 0.973, 0.968, 0.975, 0.973, 0.972, 0.973, 0.978, 0.972, 0.975, 0.98, 0.975, 0.972, 0.982, 0.978, 0.978, 0.964]
},{
		name: 'DUF',
		data: [0.977, 0.979, 0.976, 0.975, 0.978, 0.976, 0.981, 0.979, 0.977, 0.981, 0.98, 0.983, 0.986, 0.987, 0.984, 0.981, 0.984, 0.985, 0.984, 0.985, 0.987, 0.984, 0.984, 0.988, 0.985, 0.985, 0.99, 0.988, 0.986, 0.936]
},{
		name: 'EDVR_woTSA',
		data: [0.981, 0.981, 0.977, 0.976, 0.98, 0.979, 0.983, 0.981, 0.979, 0.982, 0.983, 0.983, 0.987, 0.987, 0.986, 0.984, 0.985, 0.986, 0.986, 0.988, 0.988, 0.987, 0.986, 0.989, 0.987, 0.986, 0.99, 0.99, 0.987, 0.937]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [0.899, 0.818, 0.916, 0.875, 0.95, 0.903, 0.937, 0.919, 0.95, 0.912, 0.959, 0.91, 0.959, 0.942, 0.966, 0.912, 0.967, 0.939, 0.964, 0.912, 0.969, 0.918, 0.969, 0.953, 0.972, 0.918, 0.975, 0.952, 0.974, 0.93]
},{
		name: 'MFDIN',
		data: [0.975, 0.98, 0.97, 0.969, 0.979, 0.974, 0.98, 0.977, 0.974, 0.98, 0.98, 0.982, 0.982, 0.985, 0.983, 0.976, 0.984, 0.984, 0.983, 0.982, 0.985, 0.981, 0.982, 0.986, 0.984, 0.981, 0.988, 0.986, 0.985, 0.979]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [0.972, 0.97, 0.966, 0.964, 0.966, 0.966, 0.968, 0.966, 0.965, 0.964, 0.966, 0.965, 0.967, 0.967, 0.966, 0.966, 0.966, 0.966, 0.966, 0.964, 0.965, 0.964, 0.965, 0.966, 0.967, 0.964, 0.968, 0.968, 0.966, 0.969]
},{
		name: 'Muksun Deinterlacer',
		data: [0.953, 0.948, 0.948, 0.948, 0.959, 0.954, 0.948, 0.958, 0.952, 0.955, 0.96, 0.956, 0.959, 0.963, 0.962, 0.956, 0.96, 0.961, 0.955, 0.954, 0.961, 0.955, 0.96, 0.962, 0.961, 0.956, 0.967, 0.966, 0.964, 0.964]
},{
		name: 'Kernel Deinterlacer',
		data: [0.97, 0.954, 0.951, 0.954, 0.957, 0.958, 0.954, 0.958, 0.955, 0.955, 0.969, 0.961, 0.962, 0.966, 0.971, 0.957, 0.96, 0.967, 0.956, 0.955, 0.97, 0.961, 0.965, 0.969, 0.971, 0.958, 0.976, 0.974, 0.971, 0.973]
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