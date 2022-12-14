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
                text: 'VMAF to Frame Number: Sequence # 4'
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
		data: [93.164, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'ST-Deint',
		data: [93.21, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'PAL Interpolation',
		data: [80.888, 88.067, 85.832, 88.679, 99.532, 100.0, 99.561, 97.046, 91.088, 89.593, 89.843, 88.866, 89.306, 96.707, 96.062, 96.243, 95.904, 96.194, 90.658, 92.726, 95.871, 97.137, 87.755, 88.266, 89.662, 93.438, 95.737, 98.037, 97.317, 96.918]
},{
		name: 'SonyVegas Blend Field',
		data: [17.907, 46.915, 39.706, 43.332, 28.426, 19.035, 35.863, 15.19, 38.306, 43.484, 36.399, 27.623, 37.53, 24.16, 30.744, 23.844, 37.41, 33.572, 34.179, 39.337, 33.235, 22.772, 24.648, 42.413, 35.05, 31.211, 28.011, 31.542, 29.452, 32.457]
},{
		name: 'Vapoursynth EEDI3',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'TDAN',
		data: [88.051, 100.0, 96.258, 99.522, 100.0, 99.851, 89.887, 93.339, 88.459, 100.0, 92.713, 100.0, 97.789, 97.45, 100.0, 100.0, 91.435, 100.0, 99.505, 100.0, 97.158, 100.0, 94.089, 97.563, 100.0, 98.374, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Bob',
		data: [97.101, 97.996, 96.474, 98.163, 100.0, 100.0, 100.0, 100.0, 99.58, 99.094, 98.975, 100.0, 98.987, 100.0, 100.0, 100.0, 100.0, 100.0, 98.526, 100.0, 100.0, 100.0, 97.815, 98.689, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [81.305, 98.837, 94.818, 96.862, 100.0, 100.0, 100.0, 100.0, 99.213, 99.872, 99.061, 99.199, 98.75, 100.0, 100.0, 100.0, 100.0, 100.0, 99.936, 100.0, 100.0, 100.0, 96.926, 97.995, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'DfRes SA',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'DfRes 122000 G2e 3',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'SwinDI',
		data: [94.219, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'YADIF',
		data: [96.226, 98.747, 97.857, 98.905, 100.0, 100.0, 100.0, 100.0, 100.0, 99.929, 99.747, 100.0, 99.224, 100.0, 100.0, 100.0, 100.0, 100.0, 99.868, 100.0, 100.0, 100.0, 98.914, 99.642, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'SonyVegas Interpolate Field',
		data: [86.508, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'EDVR',
		data: [93.88, 100.0, 100.0, 97.457, 100.0, 97.81, 90.244, 90.025, 89.281, 92.763, 91.585, 99.391, 94.487, 100.0, 100.0, 100.0, 99.158, 100.0, 99.52, 100.0, 96.001, 100.0, 94.974, 97.873, 100.0, 97.443, 100.0, 100.0, 100.0, 91.654]
},{
		name: 'MFDIN L',
		data: [94.023, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [24.962, 56.598, 47.971, 51.338, 30.73, 21.907, 39.868, 18.227, 45.518, 49.685, 42.406, 32.696, 42.601, 28.345, 34.73, 27.965, 42.705, 37.666, 40.457, 45.091, 37.313, 26.58, 30.047, 50.058, 41.947, 35.614, 31.789, 34.735, 33.583, 35.753]
},{
		name: 'MSU Deinterlacer',
		data: [96.646, 99.439, 96.832, 98.5, 100.0, 100.0, 100.0, 100.0, 97.525, 98.129, 97.843, 100.0, 97.429, 100.0, 100.0, 100.0, 100.0, 100.0, 98.604, 100.0, 100.0, 100.0, 98.11, 99.949, 100.0, 100.0, 100.0, 100.0, 99.854, 100.0]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [81.86, 98.574, 97.223, 98.428, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 97.973, 98.906, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Vapoursynth TDeintMod',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'DfRes',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [86.454, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [99.023, 100.0, 98.149, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.394, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'FLAD',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [99.682, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'DUF',
		data: [89.547, 100.0, 96.154, 100.0, 100.0, 100.0, 92.955, 93.683, 88.09, 100.0, 91.412, 99.335, 95.087, 100.0, 100.0, 100.0, 96.309, 100.0, 99.856, 100.0, 99.754, 100.0, 96.672, 96.105, 100.0, 99.643, 100.0, 100.0, 100.0, 92.242]
},{
		name: 'EDVR_woTSA',
		data: [95.993, 100.0, 100.0, 100.0, 100.0, 99.103, 89.725, 97.642, 86.327, 100.0, 90.659, 100.0, 96.435, 98.428, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.748, 100.0, 96.752, 98.25, 100.0, 100.0, 100.0, 100.0, 100.0, 93.844]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [24.822, 40.62, 82.997, 32.997, 100.0, 15.55, 100.0, 13.119, 96.22, 29.055, 98.237, 18.717, 97.537, 14.655, 100.0, 18.939, 100.0, 26.43, 97.422, 29.533, 97.785, 17.813, 91.959, 31.162, 98.316, 22.206, 100.0, 23.04, 100.0, 22.417]
},{
		name: 'MFDIN',
		data: [87.655, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Muksun Deinterlacer',
		data: [81.86, 98.574, 97.223, 98.428, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 97.973, 98.906, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Kernel Deinterlacer',
		data: [86.454, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
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