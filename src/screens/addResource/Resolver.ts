import * as Yup from 'yup';

export const validation = Yup.object().shape({
  title: Yup.string()
    .label('Title')
    .trim()
    .required()
    .max(64)
    .test({
      exclusive: false,
      params: {},
      message: '${path} must be Water or Coffe or Tea',
      test: function (value) {
        if (value !== 'Tea' && value !== 'Water' && value !== 'Coffe') {
          return false;
        }

        return true;
      },
    }),
});
