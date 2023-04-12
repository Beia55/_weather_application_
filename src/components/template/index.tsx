import { FC, ReactElement } from "react";
import { TemplateStyled, NavigationStyled, AppTitleStyled, ActionBoxStyled } from "./styled";
import { useTheme } from "../../utils/helpers";
import { TemplateProps } from "./types";
import { Select } from "../select";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectTheme, changeTheme } from "../../store/theme";
import { ThemeVariant } from "../../utils/types";

export const Template: FC<TemplateProps> = ({ children }): ReactElement => {
  const currentTheme = useAppSelector(selectTheme).theme;
  const theme = useTheme(currentTheme);
  const dispatch = useAppDispatch();

  const handleSelectOnChange = (newTheme: string) => {
    currentTheme !== newTheme && dispatch(changeTheme(newTheme as ThemeVariant));
  };

  return (
    <TemplateStyled theme={theme}>
      <NavigationStyled theme={theme}>
        <AppTitleStyled theme={theme}>HelloWeatherApp</AppTitleStyled>
        <ActionBoxStyled theme={theme}>
          <Select
            firstItemLabel="Select theme"
            options={[
              {
                label: "light theme",
                value: "light",
              },
              {
                label: "dark theme",
                value: "dark",
              },
              {
                label: "rainy theme",
                value: "rainy",
              },
              {
                label: "sunny theme",
                value: "sunny",
              },
            ]}
            onChange={handleSelectOnChange}
          />
        </ActionBoxStyled>
      </NavigationStyled>
      {children}
    </TemplateStyled>
  );
};
