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
                text: 'PSNR to Frame Number: Sequence # 3'
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
		data: [57.247, 54.001, 41.318, 42.786, 42.735, 51.372, 46.15, 46.844, 43.629, 38.52, 43.0, 44.527, 44.366, 41.65, 55.929, 55.446, 57.5, 45.007, 45.702, 48.414, 51.652, 50.814, 38.523, 40.864, 42.957, 40.251, 44.888, 39.671, 45.419, 56.91]
},{
		name: 'ST-Deint',
		data: [50.784, 53.673, 47.65, 44.052, 40.886, 51.506, 46.902, 46.861, 44.224, 39.805, 40.133, 44.617, 42.689, 42.898, 48.192, 52.72, 48.234, 46.604, 40.579, 49.536, 48.915, 51.478, 48.932, 42.407, 41.96, 41.823, 42.393, 41.17, 44.108, 55.832]
},{
		name: 'PAL Interpolation',
		data: [54.323, 39.179, 32.511, 33.821, 34.406, 40.281, 37.669, 38.185, 34.829, 31.434, 34.568, 36.374, 35.491, 32.77, 38.155, 38.81, 37.97, 33.563, 36.472, 36.777, 39.111, 39.563, 30.99, 31.639, 32.648, 31.539, 34.24, 31.433, 34.803, 36.987]
},{
		name: 'SonyVegas Blend Field',
		data: [26.21, 23.211, 19.272, 20.513, 18.728, 22.777, 18.581, 16.736, 14.232, 15.217, 12.589, 10.731, 14.93, 14.823, 18.978, 18.324, 19.48, 18.082, 18.825, 21.818, 26.582, 23.601, 20.776, 22.854, 24.117, 24.541, 26.737, 24.959, 28.076, 28.717]
},{
		name: 'Vapoursynth EEDI3',
		data: [59.473, 54.344, 40.923, 42.504, 42.566, 51.999, 46.205, 46.934, 43.192, 38.336, 42.501, 44.191, 44.252, 41.841, 58.043, 57.094, 59.478, 45.331, 45.904, 48.58, 52.158, 50.612, 38.585, 40.722, 43.04, 40.388, 45.018, 39.855, 45.621, 59.273]
},{
		name: 'TDAN',
		data: [53.467, 41.832, 29.128, 31.619, 33.158, 44.261, 38.319, 37.006, 33.064, 27.847, 29.126, 32.7, 34.027, 29.742, 50.462, 50.384, 51.667, 30.835, 36.742, 39.482, 43.395, 40.662, 27.143, 29.347, 32.523, 30.392, 34.666, 29.612, 35.923, 56.028]
},{
		name: 'Bob',
		data: [59.925, 52.145, 39.039, 40.423, 40.64, 50.535, 44.656, 45.419, 41.318, 36.547, 40.452, 42.216, 42.022, 39.698, 58.381, 57.547, 59.982, 42.611, 44.079, 46.873, 50.504, 49.103, 36.931, 38.85, 41.086, 38.735, 43.135, 38.32, 43.838, 59.779]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [40.998, 40.919, 36.225, 35.664, 36.625, 41.985, 38.456, 37.823, 36.247, 33.542, 32.777, 16.232, 25.218, 22.805, 31.102, 35.359, 39.466, 38.058, 29.029, 36.335, 38.62, 40.402, 34.922, 35.179, 36.335, 34.759, 37.935, 34.807, 37.936, 40.333]
},{
		name: 'DfRes SA',
		data: [60.06, 56.171, 42.815, 44.387, 44.34, 52.785, 47.145, 47.667, 44.885, 39.774, 43.858, 45.43, 46.116, 43.927, 58.161, 57.123, 59.856, 47.29, 47.584, 50.175, 52.982, 52.851, 40.023, 42.338, 44.681, 41.842, 46.477, 41.142, 47.083, 59.707]
},{
		name: 'DfRes 122000 G2e 3',
		data: [59.035, 55.411, 42.623, 44.202, 44.111, 52.179, 46.811, 47.174, 44.453, 39.198, 43.291, 44.981, 45.599, 43.559, 54.834, 54.555, 55.841, 46.922, 47.288, 49.884, 52.567, 52.329, 39.925, 42.195, 44.486, 41.681, 46.24, 41.006, 46.849, 59.612]
},{
		name: 'SwinDI',
		data: [54.341, 52.939, 43.115, 44.712, 44.516, 50.824, 47.355, 47.701, 45.209, 40.418, 44.514, 46.155, 46.499, 44.463, 53.646, 53.442, 53.299, 47.224, 47.536, 49.656, 51.461, 51.038, 40.301, 42.573, 44.784, 42.017, 46.346, 41.369, 46.869, 54.192]
},{
		name: 'YADIF',
		data: [58.466, 48.973, 35.695, 36.138, 36.579, 45.6, 41.186, 40.825, 37.143, 32.327, 33.284, 35.831, 36.061, 35.106, 48.503, 55.868, 56.726, 36.806, 39.802, 43.461, 47.384, 46.264, 33.368, 34.817, 36.236, 34.556, 38.392, 34.524, 39.067, 38.123]
},{
		name: 'SonyVegas Interpolate Field',
		data: [59.572, 52.068, 39.032, 40.417, 40.633, 50.476, 44.637, 45.396, 41.309, 36.544, 40.443, 42.204, 42.012, 39.692, 58.014, 57.192, 59.583, 42.595, 44.063, 46.849, 50.457, 49.066, 36.927, 38.842, 41.074, 38.729, 43.119, 38.312, 43.817, 59.378]
},{
		name: 'EDVR',
		data: [56.092, 44.071, 32.299, 35.192, 32.841, 43.625, 39.682, 38.775, 32.926, 29.483, 34.895, 35.745, 37.406, 31.874, 54.566, 53.613, 54.19, 32.624, 37.42, 39.554, 42.897, 39.93, 29.359, 30.818, 34.62, 33.802, 37.36, 32.874, 37.078, 59.481]
},{
		name: 'MFDIN L',
		data: [57.004, 55.088, 42.898, 44.455, 44.4, 52.179, 47.302, 47.712, 45.06, 39.946, 44.214, 45.947, 46.329, 44.159, 55.343, 54.731, 56.509, 47.51, 47.687, 50.28, 52.758, 52.39, 40.056, 42.371, 44.709, 41.852, 46.499, 41.143, 47.121, 55.779]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [23.497, 20.357, 16.445, 17.696, 15.738, 19.812, 15.64, 13.728, 11.248, 12.25, 9.58, 7.72, 11.947, 11.838, 16.009, 15.349, 16.534, 15.191, 15.813, 18.911, 23.866, 20.745, 18.088, 20.128, 21.271, 21.866, 23.97, 22.365, 25.448, 25.651]
},{
		name: 'MSU Deinterlacer',
		data: [44.0, 50.083, 37.153, 38.098, 38.61, 47.632, 41.354, 42.732, 38.783, 34.719, 36.989, 36.869, 38.805, 35.272, 49.217, 41.988, 52.704, 38.236, 40.374, 45.303, 40.832, 47.739, 34.87, 36.872, 38.972, 36.744, 40.841, 36.511, 41.82, 44.536]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [43.893, 42.41, 34.433, 35.907, 36.098, 44.232, 39.423, 39.812, 36.664, 32.476, 36.605, 37.532, 37.246, 34.809, 42.794, 44.002, 41.68, 35.765, 39.116, 41.092, 43.796, 42.887, 32.534, 34.71, 36.5, 34.746, 38.16, 34.278, 38.457, 42.364]
},{
		name: 'Vapoursynth TDeintMod',
		data: [56.975, 54.688, 41.752, 43.05, 43.075, 51.57, 46.325, 47.097, 43.924, 38.961, 42.861, 44.91, 44.82, 42.548, 56.689, 56.395, 58.326, 46.07, 46.086, 48.545, 51.631, 50.901, 39.045, 40.988, 43.348, 40.895, 45.359, 40.3, 45.675, 57.148]
},{
		name: 'DfRes',
		data: [58.891, 54.896, 41.967, 43.597, 43.485, 52.075, 46.738, 47.331, 43.968, 39.111, 43.367, 44.877, 45.053, 42.8, 57.59, 56.854, 58.85, 45.853, 46.838, 49.419, 52.499, 51.318, 39.227, 41.512, 43.736, 40.827, 45.551, 40.248, 46.172, 58.767]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [59.55, 45.849, 38.69, 38.779, 40.105, 42.997, 41.908, 44.151, 38.937, 36.212, 37.39, 20.389, 28.858, 25.69, 35.776, 43.845, 48.741, 41.879, 33.344, 39.437, 46.832, 45.909, 36.756, 38.283, 40.058, 37.781, 41.301, 37.642, 41.937, 46.143]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [55.669, 51.903, 39.81, 40.891, 39.887, 43.094, 43.341, 43.129, 40.817, 36.473, 38.498, 40.383, 40.569, 39.497, 47.587, 54.234, 54.987, 43.872, 42.065, 42.756, 47.664, 48.019, 37.622, 39.098, 40.049, 38.126, 40.971, 37.849, 41.696, 44.956]
},{
		name: 'FLAD',
		data: [60.107, 56.723, 42.866, 44.503, 44.456, 53.232, 47.542, 48.046, 45.248, 40.03, 44.31, 45.879, 46.315, 44.12, 58.439, 57.419, 60.034, 47.78, 47.841, 50.718, 53.561, 53.307, 40.012, 42.473, 44.922, 41.949, 46.864, 41.246, 47.48, 59.568]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [53.911, 51.554, 39.061, 39.558, 40.837, 48.475, 44.685, 43.913, 41.319, 37.134, 32.324, 35.958, 37.851, 39.477, 48.238, 55.234, 54.427, 43.275, 43.65, 46.737, 49.961, 48.794, 37.392, 38.168, 39.338, 38.293, 41.492, 38.415, 42.007, 56.931]
},{
		name: 'DUF',
		data: [59.321, 43.984, 31.802, 31.953, 33.735, 44.072, 39.505, 39.756, 33.804, 29.402, 30.318, 34.076, 33.685, 31.704, 54.536, 53.077, 53.156, 33.604, 36.573, 39.08, 43.176, 43.672, 30.951, 32.085, 34.17, 32.667, 37.148, 32.307, 36.71, 59.512]
},{
		name: 'EDVR_woTSA',
		data: [56.116, 41.697, 31.058, 33.095, 35.337, 46.471, 36.957, 37.644, 33.258, 31.244, 29.952, 32.283, 39.694, 33.169, 52.596, 51.011, 52.786, 36.421, 45.277, 42.704, 46.636, 45.439, 33.405, 35.396, 39.395, 35.214, 40.68, 38.406, 42.978, 59.536]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [23.431, 17.417, 33.689, 14.81, 35.363, 16.853, 38.569, 10.769, 35.722, 9.271, 34.982, 4.761, 36.106, 8.839, 44.833, 12.35, 43.747, 12.25, 38.127, 15.965, 41.967, 17.721, 32.021, 17.363, 35.895, 19.092, 37.741, 19.645, 38.375, 23.135]
},{
		name: 'MFDIN',
		data: [48.53, 47.768, 40.104, 41.37, 40.503, 45.193, 42.793, 41.674, 40.311, 37.59, 40.356, 40.846, 41.837, 40.1, 47.793, 47.473, 48.341, 41.939, 43.003, 45.624, 47.769, 47.509, 37.978, 39.607, 40.915, 39.217, 42.136, 38.872, 42.809, 49.521]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [50.973, 49.788, 40.798, 42.388, 42.315, 48.967, 45.201, 45.526, 42.248, 36.874, 41.362, 42.785, 43.607, 41.686, 50.685, 50.439, 51.187, 44.36, 44.946, 46.811, 48.911, 48.554, 38.596, 40.786, 42.783, 40.269, 44.348, 39.72, 44.897, 50.352]
},{
		name: 'Muksun Deinterlacer',
		data: [43.893, 42.41, 34.433, 35.907, 36.098, 44.232, 39.423, 39.812, 36.664, 32.476, 36.605, 37.532, 37.246, 34.809, 42.794, 44.002, 41.68, 35.765, 39.116, 41.092, 43.796, 42.887, 32.534, 34.71, 36.5, 34.746, 38.16, 34.278, 38.457, 42.364]
},{
		name: 'Kernel Deinterlacer',
		data: [59.55, 40.627, 37.625, 35.841, 38.935, 39.559, 39.073, 41.478, 33.995, 35.249, 32.413, 15.355, 23.431, 21.348, 29.961, 34.361, 40.153, 40.262, 28.763, 36.099, 43.892, 42.667, 36.18, 36.154, 37.819, 35.672, 37.871, 36.15, 39.3, 39.654]
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