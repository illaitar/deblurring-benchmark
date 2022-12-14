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
                text: 'VMAF to Frame Number: Sequence # 27'
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
		data: [64.962, 81.747, 82.662, 81.783, 82.252, 85.283, 84.764, 82.232, 78.313, 80.669, 79.532, 79.012, 78.155, 79.412, 78.14, 79.321, 79.9, 78.3, 79.467, 77.138, 78.21, 78.981, 75.527, 77.796, 77.603, 78.812, 77.531, 75.277, 78.431, 94.639]
},{
		name: 'ST-Deint',
		data: [72.331, 79.812, 85.37, 79.899, 89.124, 83.41, 88.256, 81.295, 86.923, 80.12, 86.531, 79.153, 84.123, 80.08, 85.69, 80.27, 83.505, 79.097, 82.627, 78.228, 84.746, 80.607, 85.184, 79.93, 85.105, 81.297, 84.751, 78.202, 84.62, 96.072]
},{
		name: 'PAL Interpolation',
		data: [52.937, 64.707, 65.663, 65.242, 64.847, 66.535, 65.223, 63.085, 59.326, 61.392, 60.303, 59.988, 59.992, 61.386, 60.754, 61.009, 61.908, 61.658, 61.935, 61.016, 62.372, 62.929, 61.052, 62.434, 61.681, 63.442, 62.892, 61.572, 63.079, 74.16]
},{
		name: 'SonyVegas Blend Field',
		data: [0.0, 7.693, 8.184, 7.208, 6.761, 6.556, 8.271, 10.648, 15.035, 22.15, 26.779, 32.018, 34.768, 37.543, 38.343, 41.718, 41.928, 41.4, 42.046, 41.425, 46.262, 48.06, 46.921, 48.116, 47.758, 50.49, 50.023, 48.081, 50.851, 39.313]
},{
		name: 'Vapoursynth EEDI3',
		data: [79.33, 78.564, 79.336, 78.565, 78.98, 82.266, 81.794, 79.4, 75.742, 77.86, 76.893, 76.196, 75.412, 76.526, 75.283, 76.294, 76.808, 75.175, 76.125, 74.226, 75.188, 75.992, 72.418, 74.68, 74.687, 75.75, 74.444, 72.192, 75.342, 91.705]
},{
		name: 'TDAN',
		data: [51.706, 54.99, 55.941, 55.844, 55.427, 57.89, 59.051, 60.744, 62.887, 69.384, 72.995, 76.021, 76.818, 79.665, 79.202, 80.713, 81.58, 80.675, 81.592, 80.883, 83.178, 83.949, 81.933, 83.796, 84.149, 84.705, 84.723, 82.934, 84.851, 74.694]
},{
		name: 'Bob',
		data: [76.094, 75.429, 76.22, 75.524, 76.016, 78.845, 78.316, 76.012, 72.513, 74.345, 73.51, 72.851, 72.067, 73.165, 71.781, 72.982, 73.323, 71.809, 72.678, 70.896, 71.789, 72.599, 69.325, 71.25, 71.195, 72.228, 71.126, 69.062, 71.867, 86.705]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [55.442, 72.094, 73.068, 72.365, 72.413, 74.527, 74.531, 72.794, 70.441, 72.651, 72.198, 72.377, 71.883, 73.407, 72.095, 73.376, 74.017, 72.698, 73.858, 71.724, 73.54, 74.243, 71.603, 73.143, 72.761, 74.306, 73.266, 71.882, 73.9, 86.519]
},{
		name: 'DfRes SA',
		data: [75.35, 74.872, 76.147, 75.162, 75.406, 78.796, 79.809, 78.462, 77.019, 81.814, 83.247, 84.316, 85.286, 87.126, 87.106, 88.469, 89.056, 88.463, 90.138, 88.301, 90.087, 90.94, 88.85, 90.797, 91.428, 91.109, 91.182, 90.193, 91.016, 87.514]
},{
		name: 'DfRes 122000 G2e 3',
		data: [76.821, 76.065, 77.07, 76.402, 76.332, 79.739, 80.429, 78.63, 77.003, 80.984, 81.956, 83.522, 83.895, 85.776, 85.611, 86.936, 87.358, 86.838, 88.506, 86.818, 87.973, 89.061, 87.2, 88.837, 89.571, 89.16, 89.147, 88.528, 89.29, 87.784]
},{
		name: 'SwinDI',
		data: [66.347, 83.342, 84.093, 83.258, 83.474, 86.295, 85.861, 83.456, 80.458, 82.105, 81.231, 80.659, 79.655, 81.01, 79.602, 81.088, 81.461, 80.079, 81.273, 78.512, 80.034, 80.691, 77.529, 79.817, 79.514, 80.846, 79.367, 76.945, 80.023, 95.952]
},{
		name: 'YADIF',
		data: [64.895, 67.144, 67.851, 67.805, 68.247, 70.435, 70.836, 69.654, 67.45, 69.965, 69.336, 69.148, 69.003, 70.08, 69.224, 70.152, 70.747, 69.398, 70.269, 68.896, 70.292, 70.736, 68.311, 69.673, 70.008, 70.943, 70.186, 68.489, 70.446, 78.86]
},{
		name: 'SonyVegas Interpolate Field',
		data: [61.223, 78.204, 79.132, 78.272, 78.799, 81.459, 80.839, 78.367, 74.586, 76.597, 75.575, 74.955, 74.244, 75.412, 74.025, 75.383, 75.657, 74.197, 75.157, 73.159, 74.109, 74.996, 71.575, 73.624, 73.434, 74.472, 73.554, 71.354, 74.266, 88.576]
},{
		name: 'EDVR',
		data: [64.294, 74.841, 76.209, 73.93, 74.981, 79.096, 79.859, 78.186, 76.652, 79.854, 79.967, 80.612, 80.739, 82.862, 82.799, 83.718, 84.912, 84.045, 84.9, 84.511, 86.4, 87.182, 85.152, 86.994, 87.532, 88.149, 87.778, 86.702, 87.959, 59.108]
},{
		name: 'MFDIN L',
		data: [69.881, 86.947, 88.027, 87.379, 87.949, 91.547, 95.227, 96.729, 96.66, 99.933, 99.279, 97.249, 98.622, 98.473, 98.697, 100.0, 99.911, 100.0, 100.0, 98.333, 100.0, 99.758, 97.373, 100.0, 100.0, 98.946, 99.993, 99.327, 99.348, 100.0]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [0.0, 12.92, 13.491, 12.536, 11.923, 11.575, 13.676, 16.515, 21.745, 28.907, 34.378, 40.52, 43.674, 47.256, 48.334, 52.189, 52.082, 51.618, 51.995, 51.917, 57.952, 59.96, 59.197, 60.73, 60.166, 63.764, 63.268, 61.401, 63.977, 45.038]
},{
		name: 'MSU Deinterlacer',
		data: [79.01, 80.557, 81.652, 81.254, 81.602, 85.542, 87.104, 85.971, 83.665, 86.383, 85.496, 85.092, 84.298, 86.291, 84.555, 86.165, 86.427, 85.348, 86.596, 84.081, 85.951, 86.239, 82.548, 85.491, 85.609, 86.323, 85.214, 83.564, 86.178, 88.901]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [54.325, 70.751, 71.181, 70.756, 70.853, 72.804, 72.41, 69.913, 66.918, 68.678, 67.567, 67.327, 66.606, 67.89, 66.726, 67.692, 67.959, 66.684, 67.573, 65.976, 66.823, 67.638, 64.354, 66.062, 66.088, 67.304, 66.28, 64.691, 67.057, 80.589]
},{
		name: 'Vapoursynth TDeintMod',
		data: [79.841, 79.277, 80.141, 79.373, 79.973, 83.289, 82.973, 80.495, 77.007, 79.458, 78.49, 77.91, 77.181, 78.535, 77.158, 78.173, 78.888, 77.223, 78.361, 76.382, 77.364, 78.157, 74.622, 76.928, 76.856, 77.951, 76.555, 74.163, 77.228, 94.512]
},{
		name: 'DfRes',
		data: [81.098, 80.089, 81.398, 80.13, 80.715, 84.175, 84.63, 84.17, 83.31, 87.674, 87.158, 86.867, 87.311, 88.444, 87.824, 89.03, 89.318, 88.508, 89.794, 87.303, 88.761, 89.333, 86.341, 88.919, 89.084, 89.358, 88.642, 87.124, 88.962, 94.574]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [61.219, 78.345, 79.173, 78.439, 78.894, 81.544, 80.934, 78.588, 74.82, 76.92, 75.842, 75.19, 74.552, 75.886, 74.496, 75.797, 76.199, 74.726, 75.656, 73.762, 74.825, 75.772, 72.383, 74.544, 74.234, 75.379, 74.542, 72.448, 75.276, 89.306]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [77.014, 76.751, 77.573, 77.026, 77.432, 80.358, 79.862, 77.705, 74.294, 76.182, 75.217, 74.771, 74.059, 75.445, 73.958, 75.264, 75.736, 74.204, 74.888, 73.196, 74.47, 75.466, 72.237, 74.66, 74.22, 75.85, 74.653, 72.535, 75.494, 88.937]
},{
		name: 'FLAD',
		data: [80.063, 78.981, 79.947, 79.222, 79.292, 83.089, 84.858, 85.686, 86.485, 91.144, 92.715, 91.811, 93.291, 93.53, 93.716, 95.019, 94.913, 95.145, 96.048, 93.534, 95.738, 95.735, 93.104, 95.775, 96.058, 94.944, 95.245, 94.423, 95.176, 95.197]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [71.616, 74.815, 75.467, 75.441, 75.905, 79.279, 79.352, 78.015, 75.421, 77.907, 77.45, 77.302, 76.815, 78.337, 77.123, 78.377, 79.248, 77.596, 78.504, 76.898, 78.465, 79.418, 76.242, 78.198, 78.347, 79.689, 78.659, 76.564, 79.232, 94.324]
},{
		name: 'DUF',
		data: [60.615, 60.256, 61.524, 61.026, 61.222, 64.43, 64.83, 66.428, 68.685, 74.768, 77.387, 78.772, 79.345, 81.6, 81.25, 82.544, 83.543, 82.282, 83.463, 82.666, 84.936, 85.828, 83.922, 85.461, 85.945, 86.526, 86.517, 84.992, 86.558, 70.129]
},{
		name: 'EDVR_woTSA',
		data: [66.438, 69.537, 72.528, 71.114, 71.555, 73.84, 74.411, 73.171, 70.594, 77.4, 80.624, 82.463, 83.765, 85.995, 85.695, 86.41, 87.55, 86.615, 87.521, 86.585, 88.445, 89.091, 86.978, 89.069, 89.483, 89.799, 89.539, 88.92, 89.478, 71.13]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [0.0, 8.28, 56.776, 7.786, 55.506, 5.812, 56.636, 8.422, 50.748, 17.653, 52.342, 28.707, 54.045, 35.025, 57.874, 39.935, 62.079, 39.208, 63.174, 38.311, 66.49, 46.579, 66.579, 47.247, 68.989, 50.416, 71.046, 47.431, 72.652, 26.3]
},{
		name: 'MFDIN',
		data: [64.337, 81.024, 82.046, 80.912, 81.052, 84.176, 84.601, 83.686, 82.01, 86.271, 86.144, 86.691, 87.063, 88.937, 88.686, 90.104, 90.554, 89.875, 91.22, 89.269, 91.303, 92.198, 89.721, 91.576, 92.007, 92.024, 92.33, 90.646, 92.401, 92.278]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [79.368, 78.692, 79.457, 78.627, 79.311, 82.556, 82.19, 79.877, 76.505, 78.532, 77.526, 77.247, 76.154, 77.386, 76.042, 77.149, 77.572, 76.25, 77.109, 75.159, 76.308, 77.056, 73.952, 75.819, 75.89, 77.019, 75.619, 73.639, 76.427, 92.794]
},{
		name: 'Muksun Deinterlacer',
		data: [54.325, 70.751, 71.181, 70.756, 70.853, 72.804, 72.41, 69.913, 66.918, 68.678, 67.567, 67.327, 66.606, 67.89, 66.726, 67.692, 67.959, 66.684, 67.573, 65.976, 66.823, 67.638, 64.354, 66.062, 66.088, 67.304, 66.28, 64.691, 67.057, 80.589]
},{
		name: 'Kernel Deinterlacer',
		data: [61.219, 78.045, 78.748, 77.982, 78.444, 81.071, 80.483, 78.22, 74.732, 76.739, 75.843, 75.226, 74.616, 75.939, 74.621, 75.951, 76.284, 74.967, 75.977, 74.013, 75.154, 76.164, 72.656, 74.83, 74.506, 75.629, 74.825, 72.863, 75.613, 89.233]
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