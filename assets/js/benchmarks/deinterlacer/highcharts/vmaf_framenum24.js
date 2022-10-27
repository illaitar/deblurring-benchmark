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
                text: 'VMAF to Frame Number: Sequence # 24'
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
		data: [82.734, 96.429, 96.533, 95.823, 95.019, 93.398, 93.125, 93.871, 97.46, 97.213, 97.734, 99.618, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'ST-Deint',
		data: [83.447, 97.343, 94.05, 95.413, 91.261, 94.969, 93.069, 92.94, 93.131, 96.352, 93.443, 96.601, 95.604, 98.722, 97.915, 100.0, 99.838, 100.0, 99.789, 100.0, 99.298, 100.0, 99.036, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'PAL Interpolation',
		data: [66.145, 74.324, 76.12, 74.484, 73.672, 73.465, 75.387, 75.762, 77.854, 76.459, 77.282, 79.426, 81.338, 83.872, 84.483, 86.485, 88.167, 89.848, 89.688, 89.961, 89.22, 89.07, 89.285, 90.461, 91.212, 90.361, 92.685, 92.594, 90.222, 90.731]
},{
		name: 'SonyVegas Blend Field',
		data: [20.79, 41.699, 49.148, 39.995, 49.964, 40.075, 55.993, 42.233, 32.751, 36.82, 34.317, 31.349, 31.777, 33.466, 32.629, 32.47, 33.207, 33.808, 34.651, 34.855, 34.897, 34.742, 33.86, 35.039, 35.284, 35.345, 37.885, 38.096, 39.079, 40.097]
},{
		name: 'Vapoursynth EEDI3',
		data: [96.045, 90.773, 90.581, 90.182, 89.547, 88.958, 87.149, 89.077, 92.269, 91.392, 92.406, 94.496, 95.988, 96.546, 98.192, 99.201, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.916, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.402]
},{
		name: 'TDAN',
		data: [96.849, 96.005, 97.038, 96.434, 95.879, 98.229, 98.523, 97.025, 96.465, 95.886, 94.942, 93.22, 93.024, 92.737, 91.44, 90.173, 89.958, 90.979, 89.551, 90.932, 91.164, 89.995, 90.408, 90.407, 90.147, 91.23, 92.285, 92.713, 93.032, 87.024]
},{
		name: 'Bob',
		data: [87.913, 82.699, 82.734, 82.29, 81.905, 81.331, 79.636, 81.536, 84.576, 83.837, 84.688, 86.917, 88.281, 88.768, 90.236, 91.379, 92.601, 93.837, 92.956, 93.452, 92.663, 92.693, 92.81, 93.477, 94.215, 94.227, 96.312, 95.388, 93.507, 92.234]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [68.382, 83.993, 85.168, 83.538, 83.019, 83.773, 85.825, 84.312, 85.538, 85.485, 86.213, 87.001, 88.57, 89.628, 90.461, 91.612, 93.036, 94.211, 94.088, 94.529, 93.653, 93.661, 93.622, 94.836, 95.364, 94.877, 96.879, 96.539, 94.589, 95.243]
},{
		name: 'DfRes SA',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 91.797]
},{
		name: 'DfRes 122000 G2e 3',
		data: [100.0, 100.0, 100.0, 99.842, 99.237, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 88.837]
},{
		name: 'SwinDI',
		data: [88.853, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'YADIF',
		data: [86.661, 82.792, 83.335, 82.446, 81.883, 83.747, 82.917, 82.624, 84.655, 84.056, 84.722, 86.248, 87.897, 88.496, 90.311, 91.457, 93.136, 94.488, 93.431, 94.249, 93.76, 93.671, 93.661, 94.407, 94.885, 94.774, 97.143, 96.303, 95.363, 90.109]
},{
		name: 'SonyVegas Interpolate Field',
		data: [74.476, 88.186, 88.465, 87.733, 87.256, 85.626, 85.357, 86.0, 89.473, 89.242, 89.852, 91.506, 93.075, 93.769, 94.538, 95.817, 96.918, 97.987, 97.716, 97.782, 97.228, 97.051, 97.211, 97.878, 98.525, 98.126, 99.821, 99.659, 97.193, 96.735]
},{
		name: 'EDVR',
		data: [100.0, 99.353, 99.957, 98.72, 98.251, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.585, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 80.322]
},{
		name: 'MFDIN L',
		data: [93.74, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [28.258, 50.56, 58.974, 48.227, 58.586, 49.079, 67.744, 50.971, 40.205, 44.731, 42.237, 38.82, 39.514, 41.466, 40.626, 40.452, 41.104, 41.964, 42.797, 43.07, 43.142, 43.086, 41.966, 43.48, 43.75, 43.785, 46.625, 47.439, 49.6, 50.854]
},{
		name: 'MSU Deinterlacer',
		data: [90.984, 91.486, 93.788, 93.224, 91.899, 95.168, 94.665, 96.019, 97.388, 97.164, 97.15, 98.343, 99.662, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 97.266]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [70.074, 83.068, 83.428, 82.804, 82.313, 81.098, 80.569, 81.582, 85.454, 85.2, 86.055, 88.16, 90.269, 91.218, 92.368, 93.697, 95.283, 96.486, 96.199, 96.371, 95.942, 95.746, 95.706, 96.511, 97.064, 96.8, 98.498, 98.25, 95.752, 95.505]
},{
		name: 'Vapoursynth TDeintMod',
		data: [93.723, 88.14, 88.159, 87.934, 87.474, 86.731, 84.969, 86.888, 90.057, 89.036, 90.143, 92.345, 93.692, 94.596, 96.432, 97.827, 99.201, 100.0, 99.537, 100.0, 99.229, 99.453, 99.461, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.63]
},{
		name: 'DfRes',
		data: [100.0, 100.0, 100.0, 99.566, 99.162, 100.0, 99.249, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [74.403, 88.087, 89.018, 88.106, 87.376, 86.244, 86.431, 87.119, 90.015, 89.451, 90.123, 91.806, 93.447, 94.753, 96.048, 97.438, 98.621, 99.851, 99.59, 99.779, 99.315, 99.04, 99.173, 99.964, 100.0, 100.0, 100.0, 100.0, 99.142, 99.782]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [90.038, 85.995, 86.56, 85.419, 84.635, 84.805, 84.303, 85.428, 87.482, 86.465, 87.341, 89.585, 90.935, 91.857, 93.217, 94.283, 95.585, 97.015, 95.952, 96.755, 95.991, 95.847, 95.916, 96.77, 97.619, 97.374, 99.906, 98.881, 97.344, 96.189]
},{
		name: 'FLAD',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [90.88, 89.07, 89.977, 89.389, 88.426, 89.764, 89.331, 89.107, 90.544, 89.861, 90.361, 91.59, 92.533, 92.985, 94.08, 95.132, 96.521, 97.91, 96.816, 97.729, 96.91, 96.659, 96.812, 97.715, 98.16, 98.232, 100.0, 99.811, 98.818, 99.309]
},{
		name: 'DUF',
		data: [97.458, 97.726, 98.26, 97.166, 96.167, 98.424, 98.51, 97.785, 97.506, 96.752, 96.345, 94.756, 95.327, 95.334, 94.334, 94.11, 94.625, 94.874, 93.837, 95.251, 94.77, 94.216, 94.143, 94.467, 94.969, 94.997, 96.524, 96.923, 96.612, 81.18]
},{
		name: 'EDVR_woTSA',
		data: [100.0, 100.0, 100.0, 99.625, 99.48, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 82.22]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [28.194, 45.29, 63.538, 33.058, 71.504, 32.77, 78.411, 34.857, 75.033, 29.011, 75.055, 27.453, 72.858, 32.865, 68.908, 34.248, 67.968, 36.739, 65.296, 37.922, 63.466, 38.056, 60.644, 38.179, 62.236, 38.488, 64.327, 41.073, 64.428, 44.878]
},{
		name: 'MFDIN',
		data: [84.579, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [95.81, 90.623, 90.642, 90.207, 89.269, 89.287, 87.602, 89.174, 92.238, 90.942, 91.837, 93.609, 95.052, 95.347, 97.146, 98.462, 99.747, 100.0, 99.849, 100.0, 99.531, 99.437, 99.472, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.736]
},{
		name: 'Muksun Deinterlacer',
		data: [70.074, 83.068, 83.428, 82.804, 82.313, 81.098, 80.569, 81.582, 85.454, 85.2, 86.055, 88.16, 90.269, 91.218, 92.368, 93.697, 95.283, 96.486, 96.199, 96.371, 95.942, 95.746, 95.706, 96.511, 97.064, 96.8, 98.498, 98.25, 95.752, 95.505]
},{
		name: 'Kernel Deinterlacer',
		data: [74.403, 87.585, 88.46, 87.558, 86.92, 85.828, 86.379, 86.933, 89.649, 89.179, 89.705, 91.222, 93.117, 94.189, 95.063, 96.326, 97.478, 98.735, 98.439, 98.75, 98.238, 98.043, 98.105, 98.893, 99.617, 98.967, 100.0, 100.0, 98.57, 98.964]
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