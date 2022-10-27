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
                text: 'VMAF to Frame Number: Sequence # 9'
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
		data: [93.444, 92.983, 91.997, 95.409, 95.161, 95.385, 95.892, 96.833, 97.911, 97.354, 97.569, 97.673, 97.195, 97.238, 97.642, 96.63, 97.804, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'ST-Deint',
		data: [97.432, 91.172, 93.162, 93.924, 94.033, 93.797, 94.907, 95.413, 95.874, 95.232, 96.072, 94.857, 95.952, 94.075, 95.622, 94.195, 95.005, 98.097, 98.479, 100.0, 100.0, 100.0, 100.0, 98.456, 98.732, 98.676, 99.175, 98.64, 99.234, 100.0]
},{
		name: 'PAL Interpolation',
		data: [88.989, 87.271, 81.724, 84.302, 83.248, 81.18, 81.114, 82.582, 83.586, 81.717, 80.96, 80.351, 78.975, 78.269, 78.206, 80.438, 83.989, 85.357, 90.05, 90.929, 91.994, 91.859, 89.268, 89.844, 90.035, 90.411, 89.072, 88.88, 88.328, 87.593]
},{
		name: 'SonyVegas Blend Field',
		data: [56.38, 64.976, 51.003, 43.259, 35.547, 43.981, 52.808, 48.877, 45.24, 50.502, 49.298, 48.52, 49.008, 56.186, 55.957, 30.236, 24.992, 14.211, 17.253, 18.632, 20.591, 19.567, 20.823, 18.37, 24.875, 26.429, 29.283, 32.043, 32.762, 29.68]
},{
		name: 'Vapoursynth EEDI3',
		data: [99.717, 91.294, 90.944, 93.573, 93.125, 92.832, 93.622, 93.807, 95.057, 94.306, 94.595, 94.079, 93.842, 93.765, 94.094, 92.805, 93.15, 96.2, 99.806, 100.0, 100.0, 100.0, 99.089, 98.144, 98.166, 98.498, 98.163, 98.326, 98.154, 97.273]
},{
		name: 'TDAN',
		data: [98.411, 85.984, 87.712, 89.67, 89.849, 90.438, 92.828, 92.831, 93.221, 91.914, 92.928, 92.526, 92.134, 91.382, 90.475, 83.683, 84.316, 86.632, 90.754, 91.643, 90.898, 92.742, 88.924, 88.455, 91.046, 90.097, 91.319, 91.555, 91.508, 85.507]
},{
		name: 'Bob',
		data: [97.499, 87.317, 87.085, 89.764, 89.251, 88.428, 89.435, 89.418, 90.791, 89.758, 89.777, 89.64, 89.159, 88.9, 88.973, 87.994, 88.548, 92.28, 95.258, 95.625, 95.861, 96.67, 94.448, 93.882, 93.855, 94.272, 93.719, 93.717, 92.975, 92.515]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [93.53, 87.768, 86.071, 90.578, 89.872, 88.246, 87.912, 89.348, 90.984, 88.92, 88.25, 87.334, 86.544, 85.754, 85.952, 86.043, 88.193, 91.432, 94.81, 94.878, 95.606, 95.845, 93.765, 93.177, 93.531, 93.381, 92.9, 93.173, 92.079, 90.94]
},{
		name: 'DfRes SA',
		data: [99.35, 92.624, 91.838, 94.045, 93.906, 94.634, 95.358, 95.714, 96.744, 95.766, 95.633, 95.594, 94.863, 94.354, 94.979, 92.303, 92.81, 95.873, 100.0, 100.0, 100.0, 100.0, 100.0, 98.712, 98.802, 99.257, 98.85, 98.797, 98.006, 89.345]
},{
		name: 'DfRes 122000 G2e 3',
		data: [99.164, 92.043, 91.818, 93.893, 93.677, 94.451, 95.256, 95.651, 96.537, 95.478, 95.436, 95.405, 94.825, 94.33, 94.826, 92.648, 93.256, 96.039, 99.794, 100.0, 100.0, 100.0, 99.797, 98.274, 98.361, 98.86, 98.279, 98.244, 97.734, 89.94]
},{
		name: 'SwinDI',
		data: [94.353, 93.681, 93.114, 95.567, 95.551, 95.623, 96.099, 96.842, 97.93, 97.307, 97.572, 97.5, 96.805, 96.45, 96.801, 95.912, 97.159, 99.858, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'YADIF',
		data: [98.478, 89.763, 89.854, 93.371, 92.057, 90.859, 91.966, 92.057, 93.037, 92.164, 92.398, 91.963, 91.385, 90.82, 91.009, 89.682, 87.884, 91.088, 93.836, 94.975, 94.465, 94.447, 91.806, 90.927, 91.221, 92.247, 91.619, 91.906, 91.331, 89.039]
},{
		name: 'SonyVegas Interpolate Field',
		data: [91.631, 88.263, 87.591, 90.761, 90.524, 89.878, 90.86, 91.196, 92.582, 91.584, 91.753, 91.65, 91.019, 90.775, 90.904, 90.269, 91.915, 94.937, 99.04, 99.333, 99.432, 99.454, 97.573, 97.533, 97.732, 97.764, 97.359, 97.402, 96.59, 95.626]
},{
		name: 'EDVR',
		data: [98.885, 91.073, 90.573, 87.359, 88.317, 92.714, 93.133, 94.26, 95.172, 94.59, 94.153, 93.01, 93.096, 90.255, 90.984, 87.252, 86.28, 88.416, 93.129, 93.658, 95.52, 96.197, 91.168, 92.224, 92.093, 90.865, 94.328, 92.507, 92.001, 83.046]
},{
		name: 'MFDIN L',
		data: [95.413, 92.535, 91.962, 94.633, 94.983, 96.271, 97.235, 98.396, 99.057, 97.927, 98.624, 98.81, 97.848, 97.814, 98.344, 97.064, 99.715, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [59.343, 71.776, 56.651, 47.911, 40.069, 48.795, 57.775, 54.002, 49.786, 55.743, 53.798, 52.247, 53.452, 60.719, 60.51, 36.753, 30.722, 19.076, 21.395, 22.723, 24.864, 24.278, 25.375, 22.826, 29.424, 30.802, 33.642, 36.835, 38.301, 35.62]
},{
		name: 'MSU Deinterlacer',
		data: [98.786, 90.101, 90.995, 92.415, 91.151, 90.038, 91.628, 92.298, 93.154, 92.304, 91.839, 92.391, 91.63, 91.698, 91.591, 89.69, 90.012, 91.987, 94.85, 95.538, 95.845, 96.614, 93.942, 92.834, 92.952, 93.747, 93.365, 93.645, 93.352, 92.09]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [94.566, 92.179, 89.488, 92.232, 91.232, 89.89, 90.359, 90.389, 91.391, 90.659, 90.46, 89.795, 89.314, 88.612, 88.325, 88.71, 87.9, 91.609, 94.994, 95.769, 95.278, 94.737, 92.997, 91.84, 92.132, 92.856, 92.119, 92.849, 92.74, 91.291]
},{
		name: 'Vapoursynth TDeintMod',
		data: [100.0, 91.272, 90.371, 93.02, 92.616, 92.639, 93.217, 93.665, 94.756, 94.253, 94.256, 94.17, 93.92, 93.919, 94.248, 93.148, 93.77, 97.16, 100.0, 100.0, 100.0, 100.0, 100.0, 99.003, 99.025, 99.195, 98.707, 98.843, 98.524, 98.029]
},{
		name: 'DfRes',
		data: [99.906, 90.157, 89.983, 92.129, 92.266, 92.471, 93.851, 94.193, 95.099, 94.261, 94.077, 93.77, 92.96, 92.905, 93.571, 91.956, 92.414, 95.168, 98.797, 100.0, 100.0, 100.0, 98.664, 97.259, 97.227, 97.474, 97.199, 97.487, 96.889, 96.077]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [91.63, 88.237, 87.673, 90.665, 90.26, 89.766, 90.655, 90.885, 92.298, 91.408, 91.418, 91.388, 90.639, 90.626, 90.821, 89.957, 91.554, 94.607, 98.668, 98.838, 98.874, 99.046, 97.294, 97.161, 97.334, 97.439, 96.944, 97.026, 96.327, 95.452]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [98.245, 88.904, 88.825, 91.117, 90.581, 90.067, 91.379, 91.319, 92.692, 91.993, 91.568, 91.77, 91.2, 91.216, 91.248, 89.732, 90.583, 93.953, 97.125, 97.452, 97.927, 98.997, 96.744, 95.833, 95.919, 96.263, 95.571, 95.732, 95.102, 94.644]
},{
		name: 'FLAD',
		data: [100.0, 92.99, 92.08, 93.98, 94.135, 95.009, 95.867, 96.118, 97.142, 96.269, 96.4, 96.024, 95.393, 95.148, 95.786, 93.85, 94.944, 97.516, 100.0, 100.0, 100.0, 100.0, 100.0, 99.599, 99.729, 99.911, 99.589, 99.625, 99.042, 98.084]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [99.997, 91.061, 90.953, 93.544, 92.787, 92.699, 94.363, 94.699, 95.349, 94.622, 95.037, 94.753, 94.349, 94.147, 94.802, 92.845, 93.569, 96.397, 99.365, 99.634, 99.8, 100.0, 98.845, 98.243, 98.346, 98.679, 98.174, 98.175, 97.468, 99.083]
},{
		name: 'DUF',
		data: [98.16, 90.469, 89.985, 89.277, 89.859, 90.871, 93.046, 92.912, 93.678, 93.437, 93.476, 92.891, 93.624, 93.001, 93.137, 87.259, 84.246, 87.419, 92.26, 92.519, 92.291, 93.256, 89.472, 89.304, 89.678, 89.938, 90.678, 90.381, 89.865, 83.748]
},{
		name: 'EDVR_woTSA',
		data: [96.575, 92.475, 90.459, 87.295, 90.063, 91.483, 90.508, 92.031, 92.086, 90.725, 91.404, 89.753, 90.324, 88.686, 89.985, 86.911, 84.02, 87.237, 91.266, 92.882, 91.849, 94.592, 90.718, 89.81, 91.306, 88.204, 89.582, 89.991, 88.988, 83.209]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [58.826, 57.117, 88.095, 25.348, 89.782, 23.556, 89.201, 30.63, 90.58, 34.738, 87.651, 31.387, 85.453, 41.999, 85.844, 6.925, 80.386, 0.0, 88.039, 0.0, 89.631, 3.29, 86.685, 0.749, 85.565, 7.958, 86.577, 14.036, 84.718, 12.477]
},{
		name: 'MFDIN',
		data: [87.139, 93.355, 91.544, 93.096, 93.031, 93.75, 94.368, 95.515, 95.434, 94.831, 95.262, 94.108, 93.77, 93.387, 93.5, 93.954, 95.654, 97.547, 100.0, 100.0, 100.0, 100.0, 100.0, 99.221, 99.685, 100.0, 99.524, 100.0, 100.0, 98.115]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [99.487, 91.811, 90.76, 93.133, 93.668, 93.423, 93.891, 95.234, 96.415, 95.0, 95.346, 95.489, 95.275, 94.913, 95.389, 93.976, 94.626, 97.394, 100.0, 100.0, 100.0, 100.0, 100.0, 99.166, 99.083, 99.247, 99.054, 99.624, 99.099, 98.429]
},{
		name: 'Muksun Deinterlacer',
		data: [94.566, 92.179, 89.488, 92.232, 91.232, 89.89, 90.359, 90.389, 91.391, 90.659, 90.46, 89.795, 89.314, 88.612, 88.325, 88.71, 87.9, 91.609, 94.994, 95.769, 95.278, 94.737, 92.997, 91.84, 92.132, 92.856, 92.119, 92.849, 92.74, 91.291]
},{
		name: 'Kernel Deinterlacer',
		data: [91.63, 89.459, 88.826, 90.227, 89.461, 88.744, 89.236, 89.509, 90.596, 89.718, 89.459, 89.444, 88.714, 88.667, 88.799, 87.946, 89.975, 93.369, 97.295, 97.134, 97.192, 97.443, 95.719, 95.71, 95.777, 95.881, 95.312, 95.378, 94.682, 93.983]
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