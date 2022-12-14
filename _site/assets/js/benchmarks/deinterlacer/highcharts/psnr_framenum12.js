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
                text: 'PSNR to Frame Number: Sequence # 12'
            },
            subtitle: {
                text: ''
            },
            yAxis: {
                title: {
                    text: 'PSNR'
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
		data: [24.073, 24.115, 24.147, 24.241, 24.668, 24.466, 25.262, 24.671, 24.619, 24.155, 24.36, 23.859, 24.341, 24.367, 23.618, 24.036, 23.873, 23.569, 24.306, 23.889, 24.07, 23.592, 24.054, 22.743, 23.211, 23.586, 23.713, 23.599, 23.31, 23.795]
},{
		name: 'ST-Deint',
		data: [42.966, 43.885, 43.344, 43.447, 43.406, 44.012, 44.379, 44.831, 44.5, 44.319, 44.249, 44.233, 44.319, 44.914, 42.796, 43.178, 42.841, 43.424, 43.272, 43.616, 43.725, 43.867, 43.928, 43.026, 42.404, 43.349, 43.086, 43.774, 42.673, 43.428]
},{
		name: 'PAL Interpolation',
		data: [25.18, 22.654, 22.594, 22.814, 23.155, 22.941, 23.582, 23.12, 22.923, 22.55, 22.675, 22.314, 22.601, 22.681, 22.169, 22.648, 22.409, 22.13, 22.659, 22.385, 22.412, 22.119, 22.505, 21.372, 21.878, 22.221, 22.349, 22.225, 21.958, 22.216]
},{
		name: 'SonyVegas Blend Field',
		data: [24.111, 23.983, 23.978, 24.491, 24.605, 24.475, 24.895, 24.552, 24.052, 23.937, 23.973, 23.712, 23.856, 23.947, 23.666, 24.142, 23.791, 23.607, 23.989, 23.749, 23.815, 23.544, 23.724, 22.954, 23.434, 23.724, 23.755, 23.583, 23.326, 23.559]
},{
		name: 'Vapoursynth EEDI3',
		data: [23.868, 23.903, 23.916, 24.007, 24.44, 24.206, 24.965, 24.395, 24.339, 23.895, 24.112, 23.63, 24.083, 24.134, 23.401, 23.802, 23.632, 23.354, 24.059, 23.638, 23.832, 23.383, 23.835, 22.546, 22.996, 23.383, 23.52, 23.426, 23.116, 23.56]
},{
		name: 'TDAN',
		data: [28.421, 29.257, 29.391, 29.246, 29.677, 29.594, 30.563, 29.879, 29.669, 28.888, 29.386, 28.609, 29.433, 29.241, 28.54, 28.497, 28.458, 28.175, 28.921, 28.59, 28.942, 28.659, 29.044, 27.791, 28.21, 28.577, 28.53, 28.621, 28.15, 27.515]
},{
		name: 'Bob',
		data: [23.791, 23.819, 23.821, 23.919, 24.325, 24.086, 24.769, 24.246, 24.155, 23.814, 23.993, 23.573, 23.972, 24.06, 23.379, 23.763, 23.575, 23.315, 23.987, 23.569, 23.759, 23.321, 23.75, 22.494, 22.952, 23.338, 23.48, 23.38, 23.078, 23.512]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [25.785, 25.897, 25.905, 25.913, 26.4, 26.119, 26.976, 26.367, 26.301, 25.829, 26.073, 25.511, 26.049, 26.063, 25.289, 25.647, 25.552, 25.22, 25.995, 25.546, 25.803, 25.315, 25.832, 24.412, 24.89, 25.272, 25.387, 25.35, 25.051, 25.575]
},{
		name: 'DfRes SA',
		data: [46.551, 49.258, 48.103, 47.954, 48.222, 48.854, 48.616, 48.632, 49.763, 48.325, 49.809, 48.997, 49.83, 49.927, 47.762, 47.782, 47.091, 47.975, 48.539, 48.228, 49.154, 49.008, 49.149, 46.866, 47.179, 46.344, 47.023, 47.839, 47.366, 30.41]
},{
		name: 'DfRes 122000 G2e 3',
		data: [43.183, 46.891, 46.333, 45.835, 46.197, 46.429, 46.692, 46.329, 47.494, 46.211, 47.49, 46.42, 47.37, 47.581, 45.347, 44.931, 45.396, 45.808, 45.848, 46.073, 46.597, 46.481, 46.79, 44.439, 45.139, 44.1, 44.875, 45.922, 45.117, 31.954]
},{
		name: 'SwinDI',
		data: [54.608, 54.086, 54.272, 54.454, 53.006, 54.72, 54.494, 54.591, 54.418, 53.943, 53.707, 53.928, 54.309, 54.364, 54.369, 54.064, 53.964, 53.989, 53.701, 53.858, 53.773, 53.99, 53.943, 53.618, 52.47, 53.41, 53.574, 53.455, 52.412, 52.92]
},{
		name: 'YADIF',
		data: [23.333, 22.888, 22.898, 23.226, 23.498, 23.323, 23.896, 23.473, 23.216, 23.007, 23.103, 22.762, 23.122, 23.247, 22.666, 23.112, 22.819, 22.611, 23.138, 22.777, 22.964, 22.544, 22.897, 21.8, 22.224, 22.618, 22.758, 22.619, 22.295, 24.375]
},{
		name: 'SonyVegas Interpolate Field',
		data: [23.79, 23.818, 23.82, 23.918, 24.325, 24.086, 24.768, 24.245, 24.154, 23.813, 23.992, 23.572, 23.971, 24.059, 23.377, 23.762, 23.574, 23.314, 23.986, 23.569, 23.758, 23.32, 23.749, 22.493, 22.951, 23.337, 23.48, 23.379, 23.077, 23.512]
},{
		name: 'EDVR',
		data: [32.521, 38.81, 39.046, 39.57, 39.235, 40.065, 39.539, 39.751, 41.282, 40.473, 40.113, 40.529, 40.451, 40.753, 39.948, 39.662, 40.534, 39.379, 41.607, 41.126, 40.113, 40.25, 40.679, 40.904, 40.668, 39.15, 39.36, 39.598, 39.534, 25.474]
},{
		name: 'MFDIN L',
		data: [35.093, 34.483, 34.735, 35.529, 35.373, 35.745, 36.123, 35.676, 35.196, 34.555, 34.918, 34.491, 34.972, 34.484, 34.329, 34.189, 33.223, 33.336, 34.599, 33.444, 33.913, 34.646, 34.321, 33.583, 33.759, 34.277, 34.884, 34.495, 32.986, 34.142]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [68.695, 69.36, 69.717, 69.848, 69.76, 69.469, 69.573, 69.464, 64.447, 69.963, 69.558, 69.724, 69.378, 69.551, 69.498, 69.298, 69.589, 69.338, 69.511, 69.439, 69.242, 64.146, 64.074, 64.117, 64.367, 64.003, 68.902, 63.78, 63.878, 63.96]
},{
		name: 'MSU Deinterlacer',
		data: [25.962, 26.8, 26.795, 27.001, 27.409, 27.491, 28.65, 27.996, 27.751, 26.986, 27.386, 26.577, 27.327, 27.269, 26.349, 26.796, 26.601, 26.337, 27.1, 26.688, 27.004, 26.574, 27.006, 25.564, 26.035, 26.484, 26.572, 26.499, 25.972, 25.262]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [22.445, 22.341, 22.33, 22.707, 22.989, 22.808, 23.431, 22.989, 22.643, 22.401, 22.479, 22.143, 22.445, 22.581, 22.031, 22.558, 22.215, 22.013, 22.559, 22.173, 22.319, 21.926, 22.231, 21.188, 21.681, 22.071, 22.185, 22.013, 21.696, 22.04]
},{
		name: 'Vapoursynth TDeintMod',
		data: [23.672, 23.738, 23.764, 23.834, 24.278, 24.035, 24.784, 24.219, 24.146, 23.755, 23.973, 23.493, 23.936, 24.003, 23.271, 23.644, 23.489, 23.195, 23.924, 23.508, 23.694, 23.251, 23.698, 22.387, 22.85, 23.239, 23.376, 23.277, 22.96, 23.417]
},{
		name: 'DfRes',
		data: [28.181, 27.415, 27.262, 27.667, 28.037, 28.024, 29.267, 28.666, 28.421, 27.525, 28.157, 27.385, 28.042, 28.0, 26.803, 27.39, 26.81, 26.768, 27.337, 26.977, 27.511, 26.94, 27.558, 25.929, 26.364, 27.054, 27.186, 27.18, 26.586, 27.027]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [23.777, 23.663, 23.649, 23.75, 24.16, 23.934, 24.579, 24.084, 23.989, 23.652, 23.823, 23.425, 23.795, 23.883, 23.241, 23.596, 23.431, 23.176, 23.794, 23.424, 23.584, 23.174, 23.564, 22.368, 22.78, 23.166, 23.323, 23.227, 22.933, 23.327]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [27.145, 25.248, 25.246, 25.297, 25.726, 25.552, 26.197, 25.748, 25.666, 25.241, 25.461, 25.001, 25.393, 25.44, 24.771, 25.055, 24.964, 24.713, 25.261, 25.001, 25.134, 24.765, 25.13, 23.976, 24.27, 24.68, 24.846, 24.795, 24.471, 24.821]
},{
		name: 'FLAD',
		data: [33.608, 33.964, 33.764, 33.376, 33.885, 34.021, 34.451, 33.959, 34.342, 33.522, 33.98, 33.401, 33.978, 33.86, 33.104, 32.803, 33.011, 32.758, 33.205, 32.987, 33.268, 33.37, 33.763, 32.538, 32.631, 32.961, 33.084, 33.216, 32.555, 32.715]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [24.779, 24.677, 24.697, 24.759, 25.182, 24.935, 25.667, 25.116, 25.059, 24.647, 24.916, 24.388, 24.86, 24.894, 24.154, 24.515, 24.395, 24.135, 24.787, 24.399, 24.591, 24.128, 24.589, 23.302, 23.731, 24.13, 24.247, 24.172, 23.884, 23.279]
},{
		name: 'DUF',
		data: [27.174, 32.546, 32.873, 32.549, 33.035, 33.21, 33.497, 33.282, 33.914, 32.775, 32.819, 32.427, 32.941, 32.969, 32.112, 32.015, 31.944, 31.544, 33.417, 32.467, 32.952, 33.163, 33.594, 32.227, 32.152, 32.094, 32.393, 32.397, 32.38, 20.913]
},{
		name: 'EDVR_woTSA',
		data: [31.573, 42.72, 42.799, 42.872, 42.571, 43.399, 42.886, 43.069, 44.113, 43.152, 43.856, 43.437, 44.026, 43.595, 43.188, 42.444, 43.403, 42.533, 43.971, 43.213, 42.863, 43.657, 44.351, 43.352, 43.033, 42.701, 42.912, 43.011, 42.49, 25.214]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [45.491, 23.047, 22.895, 23.141, 23.254, 23.127, 23.576, 23.27, 23.033, 22.785, 22.978, 22.659, 22.986, 23.177, 22.599, 23.147, 22.794, 22.629, 23.119, 22.788, 22.942, 22.494, 22.772, 21.634, 22.2, 22.602, 22.688, 22.532, 22.24, 22.582]
},{
		name: 'MFDIN',
		data: [30.219, 30.098, 30.219, 30.407, 30.807, 30.619, 31.325, 30.807, 30.612, 30.208, 30.46, 29.932, 30.458, 30.434, 29.667, 30.151, 29.863, 29.654, 30.417, 29.984, 30.094, 29.759, 30.085, 28.91, 29.369, 29.72, 29.875, 29.738, 29.377, 29.855]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [24.306, 24.363, 24.346, 24.488, 24.906, 24.716, 25.472, 24.936, 24.878, 24.445, 24.7, 24.185, 24.689, 24.704, 23.932, 24.361, 24.166, 23.848, 24.573, 24.187, 24.373, 23.917, 24.369, 23.047, 23.54, 23.935, 24.047, 23.95, 23.612, 24.068]
},{
		name: 'Muksun Deinterlacer',
		data: [22.445, 22.341, 22.33, 22.707, 22.989, 22.808, 23.431, 22.989, 22.643, 22.401, 22.479, 22.143, 22.445, 22.581, 22.031, 22.558, 22.215, 22.013, 22.559, 22.173, 22.319, 21.926, 22.231, 21.188, 21.681, 22.071, 22.185, 22.013, 21.696, 22.04]
},{
		name: 'Kernel Deinterlacer',
		data: [23.777, 23.672, 23.657, 23.758, 24.168, 23.943, 24.588, 24.093, 23.998, 23.66, 23.832, 23.433, 23.805, 23.892, 23.249, 23.605, 23.439, 23.185, 23.802, 23.432, 23.594, 23.182, 23.572, 22.375, 22.787, 23.174, 23.331, 23.235, 22.941, 23.336]
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