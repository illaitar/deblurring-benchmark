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
                text: 'VMAF to Frame Number: Sequence # 5'
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
		data: [89.439, 97.112, 97.772, 98.981, 100.0, 100.0, 100.0, 100.0, 100.0, 99.006, 94.609, 98.886, 98.313, 99.972, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.805, 99.469]
},{
		name: 'ST-Deint',
		data: [91.193, 95.178, 98.636, 98.837, 98.26, 100.0, 100.0, 100.0, 100.0, 95.611, 94.759, 93.414, 95.151, 94.4, 97.026, 95.415, 97.602, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'PAL Interpolation',
		data: [72.735, 74.551, 80.592, 87.002, 98.305, 100.0, 100.0, 100.0, 91.778, 87.404, 80.273, 89.84, 83.53, 90.048, 90.202, 95.378, 91.746, 100.0, 100.0, 100.0, 100.0, 99.263, 100.0, 98.973, 97.222, 94.589, 93.091, 94.363, 95.832, 91.935]
},{
		name: 'SonyVegas Blend Field',
		data: [13.276, 12.25, 12.727, 16.313, 22.447, 39.535, 64.967, 47.651, 79.865, 59.173, 43.748, 42.062, 43.759, 42.068, 43.056, 28.554, 30.829, 72.32, 63.449, 22.943, 21.291, 14.648, 16.24, 9.879, 12.401, 10.963, 43.015, 63.559, 28.26, 46.688]
},{
		name: 'Vapoursynth EEDI3',
		data: [99.691, 93.517, 91.851, 96.087, 100.0, 100.0, 100.0, 100.0, 96.666, 96.758, 89.291, 93.485, 95.331, 92.77, 98.147, 95.37, 90.219, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.888, 93.937, 94.311, 95.075, 93.617]
},{
		name: 'TDAN',
		data: [75.362, 76.154, 73.164, 79.596, 92.419, 98.313, 100.0, 100.0, 89.519, 95.134, 89.192, 85.087, 95.662, 85.647, 96.414, 87.765, 82.279, 100.0, 99.636, 90.865, 100.0, 92.096, 97.656, 89.906, 87.67, 87.205, 96.975, 98.666, 98.425, 96.448]
},{
		name: 'Bob',
		data: [84.262, 83.431, 85.533, 91.378, 100.0, 100.0, 100.0, 100.0, 92.901, 93.261, 85.444, 90.032, 91.921, 88.695, 95.31, 91.713, 85.576, 100.0, 100.0, 100.0, 100.0, 99.001, 100.0, 99.434, 100.0, 95.948, 89.604, 90.161, 91.334, 89.916]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [72.207, 72.892, 77.623, 85.696, 100.0, 100.0, 100.0, 100.0, 93.521, 91.865, 86.177, 92.315, 87.551, 93.793, 96.507, 98.621, 95.817, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 97.33, 94.985, 100.0, 97.356, 99.54]
},{
		name: 'DfRes SA',
		data: [99.586, 97.286, 96.351, 97.304, 100.0, 100.0, 100.0, 100.0, 100.0, 97.608, 93.632, 97.391, 96.544, 97.041, 100.0, 97.545, 97.767, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 95.443]
},{
		name: 'DfRes 122000 G2e 3',
		data: [95.847, 95.968, 96.369, 96.979, 100.0, 100.0, 100.0, 100.0, 98.921, 97.414, 94.04, 95.764, 97.647, 97.071, 100.0, 98.033, 99.093, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.966, 98.589, 100.0, 100.0, 94.869]
},{
		name: 'SwinDI',
		data: [93.717, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 97.843, 92.98, 98.392, 97.057, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'YADIF',
		data: [88.201, 92.18, 93.189, 95.892, 100.0, 100.0, 100.0, 100.0, 91.794, 92.017, 84.579, 88.563, 90.501, 87.252, 93.629, 89.506, 84.171, 100.0, 99.873, 100.0, 100.0, 98.027, 100.0, 97.425, 98.618, 93.44, 87.594, 95.107, 95.771, 95.274]
},{
		name: 'SonyVegas Interpolate Field',
		data: [76.084, 83.698, 86.687, 92.268, 100.0, 100.0, 100.0, 100.0, 93.85, 95.444, 87.262, 92.511, 94.92, 92.592, 100.0, 97.918, 91.065, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.339, 96.322, 97.102, 94.037, 94.542]
},{
		name: 'EDVR',
		data: [78.123, 61.406, 73.355, 74.377, 88.062, 100.0, 100.0, 100.0, 95.38, 97.603, 92.781, 89.389, 96.827, 95.023, 98.786, 97.882, 93.749, 100.0, 100.0, 96.401, 100.0, 100.0, 100.0, 97.511, 100.0, 100.0, 99.921, 100.0, 100.0, 90.297]
},{
		name: 'MFDIN L',
		data: [92.426, 99.081, 99.194, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 97.853, 94.0, 98.929, 97.159, 99.301, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [16.671, 14.397, 13.773, 17.367, 26.157, 45.891, 71.964, 55.228, 91.572, 67.525, 49.096, 48.425, 49.357, 47.123, 48.522, 33.683, 36.361, 76.448, 67.341, 28.295, 26.818, 18.912, 22.034, 15.274, 18.478, 17.334, 50.86, 73.852, 38.375, 59.132]
},{
		name: 'MSU Deinterlacer',
		data: [93.733, 91.101, 91.892, 95.192, 100.0, 100.0, 100.0, 100.0, 92.311, 94.589, 91.36, 93.7, 94.411, 93.967, 97.169, 91.98, 94.061, 100.0, 100.0, 100.0, 100.0, 99.976, 100.0, 99.765, 100.0, 98.683, 92.146, 92.565, 94.256, 89.501]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [89.266, 96.509, 97.939, 100.0, 100.0, 100.0, 100.0, 100.0, 91.843, 92.33, 83.807, 88.096, 91.6, 88.819, 96.769, 93.35, 87.555, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 95.812, 92.054, 92.625, 89.562, 91.943]
},{
		name: 'Vapoursynth TDeintMod',
		data: [89.032, 88.762, 90.712, 95.858, 100.0, 100.0, 100.0, 100.0, 98.146, 98.174, 90.83, 95.008, 96.689, 94.538, 99.295, 96.785, 92.254, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 95.585, 95.851, 96.379, 94.811]
},{
		name: 'DfRes',
		data: [98.092, 94.781, 95.44, 96.909, 100.0, 100.0, 100.0, 100.0, 100.0, 96.287, 92.359, 94.708, 96.544, 95.846, 98.314, 98.444, 97.994, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 96.769, 97.842, 97.642, 96.438]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [76.088, 83.617, 86.629, 92.13, 100.0, 100.0, 100.0, 100.0, 93.459, 94.423, 86.695, 92.151, 94.591, 92.226, 100.0, 97.479, 90.834, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.055, 95.735, 98.688, 96.585, 97.26]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [86.045, 85.714, 87.733, 93.085, 100.0, 100.0, 100.0, 100.0, 97.279, 94.428, 87.253, 91.355, 93.489, 90.649, 96.673, 93.305, 87.647, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 97.497, 91.941, 93.962, 95.034, 93.943]
},{
		name: 'FLAD',
		data: [99.879, 97.176, 97.304, 98.444, 100.0, 100.0, 100.0, 100.0, 100.0, 96.562, 94.049, 95.81, 95.671, 95.001, 100.0, 97.153, 93.936, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.182, 100.0, 100.0, 100.0]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [85.105, 87.218, 89.478, 94.966, 100.0, 100.0, 100.0, 100.0, 99.352, 98.667, 91.564, 95.731, 97.018, 95.312, 99.643, 96.815, 93.244, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.808, 95.995, 100.0, 100.0, 95.617]
},{
		name: 'DUF',
		data: [86.028, 78.059, 71.539, 80.459, 92.369, 98.181, 100.0, 100.0, 95.804, 95.959, 92.055, 93.165, 97.188, 88.474, 97.496, 94.139, 90.931, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.715, 100.0, 99.942, 100.0, 100.0, 89.877]
},{
		name: 'EDVR_woTSA',
		data: [78.285, 78.885, 78.087, 96.321, 97.646, 100.0, 100.0, 100.0, 93.475, 93.299, 93.134, 96.122, 98.688, 85.489, 100.0, 95.577, 96.621, 100.0, 100.0, 100.0, 100.0, 99.852, 100.0, 100.0, 99.61, 100.0, 100.0, 100.0, 100.0, 91.406]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [16.351, 0.0, 91.625, 0.0, 96.819, 12.151, 100.0, 18.985, 90.266, 43.809, 75.694, 28.883, 84.588, 26.445, 91.034, 3.263, 84.797, 51.637, 100.0, 0.0, 100.0, 0.0, 100.0, 0.0, 94.142, 1.286, 91.572, 52.246, 93.027, 37.527]
},{
		name: 'MFDIN',
		data: [84.563, 91.982, 94.187, 98.423, 100.0, 100.0, 100.0, 100.0, 91.794, 96.048, 88.912, 92.817, 90.5, 86.873, 97.979, 93.826, 94.305, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.421, 100.0, 100.0, 99.174, 100.0]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [97.07, 94.916, 94.43, 96.207, 100.0, 100.0, 100.0, 100.0, 100.0, 95.739, 92.911, 96.39, 94.602, 96.17, 99.649, 99.09, 98.425, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 95.571, 98.49, 99.114, 97.933]
},{
		name: 'Muksun Deinterlacer',
		data: [89.266, 96.509, 97.939, 100.0, 100.0, 100.0, 100.0, 100.0, 91.843, 92.33, 83.807, 88.096, 91.6, 88.819, 96.769, 93.35, 87.555, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 95.812, 92.054, 92.625, 89.562, 91.943]
},{
		name: 'Kernel Deinterlacer',
		data: [76.088, 83.345, 86.587, 92.27, 100.0, 100.0, 100.0, 100.0, 92.853, 92.903, 85.844, 90.579, 93.791, 91.306, 99.242, 95.902, 89.951, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 97.638, 94.427, 99.094, 97.595, 98.831]
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